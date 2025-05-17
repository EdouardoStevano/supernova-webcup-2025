import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../../../../core/utils/infoDecode';
import authService from '../../../services/authService';

const Profile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: '',
        bio: '',
        address: '',
        contact: '',
        image: '',
        isActive: false,
        createdAt: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const data = await getUserInfo();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authService.updateUser(user.id, user);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user info:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[1300px] rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8 flex items-center gap-8">
                <img
                    src={user.image || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {user.username}
                    </h1>
                    <span className="mt-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
                        {user.role}
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Contact
                        </label>
                        <input
                            type="tel"
                            name="contact"
                            value={user.contact}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={user.image}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows="3"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <textarea
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows="2"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="rounded-lg bg-gray-200 px-6 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-lg bg-green-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Profile;
