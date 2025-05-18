import React, { useState, useEffect } from 'react';
import { users as usersData } from '../../../../data/datasource/users';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc',
    });
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setUsers(usersData);
        setFilteredUsers(usersData);
    }, []);

    useEffect(() => {
        const filtered = users.filter((user) =>
            Object.values(user).some((value) =>
                value
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
        setFilteredUsers(filtered);
        setCurrentPage(1);
    }, [searchTerm, users]);

    const sortData = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        const sorted = [...filteredUsers].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredUsers(sorted);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'username', label: 'Username' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'phoneNumber', label: 'Phone' },
        { key: 'address', label: 'Address' },
        { key: 'isActive', label: 'Status' },
        { key: 'createdAt', label: 'Created At' },
        { key: 'lastLogin', label: 'Last Login' },
    ];

    return (
        <div className="fadeIn p-6">
            <div className="mb-4 flex items-center justify-between">
                <input
                    type="text"
                    className="w-1/3 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Search users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="rounded-lg border border-gray-300 p-2"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                    <option value={50}>50 per page</option>
                </select>
            </div>
            <div className="swipeFadeUp overflow-x-auto rounded-lg shadow-md">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="cursor-pointer px-6 py-3 hover:bg-gray-100"
                                    onClick={() => sortData(column.key)}
                                >
                                    <div className="flex items-center">
                                        {column.label}
                                        {sortConfig.key === column.key && (
                                            <span className="ml-1">
                                                {sortConfig.direction === 'asc'
                                                    ? '↑'
                                                    : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b bg-white hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.role}</td>
                                <td className="px-6 py-4">
                                    {user.phoneNumber}
                                </td>
                                <td className="px-6 py-4">{user.address}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`rounded-full px-2 py-1 text-xs ${
                                            user.isActive
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {user.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(
                                        user.createdAt
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {user.lastLogin
                                        ? new Date(
                                              user.lastLogin
                                          ).toLocaleString()
                                        : 'Never'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                    Showing {indexOfFirstItem + 1} to{' '}
                    {Math.min(indexOfLastItem, filteredUsers.length)} of{' '}
                    {filteredUsers.length} entries
                </div>
                <div className="flex space-x-2">
                    <button
                        className="rounded border px-3 py-1 disabled:opacity-50"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`rounded border px-3 py-1 ${
                                currentPage === index + 1
                                    ? 'bg-blue-500 text-white'
                                    : ''
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="rounded border px-3 py-1 disabled:opacity-50"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;
