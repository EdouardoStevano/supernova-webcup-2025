import React, { useState, useEffect } from 'react';

const categories = ['Love Relationship', 'Work', 'Apocalypse', 'Other'];

const farewellsData = [
    {
        id: 1,
        title: 'Final Goodbye',
        category: 'Love Relationship',
        date: '2024-03-20',
        content: 'A heartfelt farewell message',
    },
    {
        id: 2,
        title: 'Last Words',
        category: 'Work',
        date: '2024-03-19',
        content: 'Farewell to my colleagues',
    },
];

const cemeteryData = [
    {
        id: 1,
        title: 'Memorial Garden',
        category: 'Other',
        date: '2024-03-18',
        status: 'In Progress',
        location: 'East Wing',
    },
    {
        id: 2,
        title: 'Peace Haven',
        category: 'Love Relationship',
        date: '2024-03-17',
        status: 'Completed',
        location: 'West Wing',
    },
];

const Data = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeMenu, setActiveMenu] = useState('farewells');

    const currentData =
        activeMenu === 'farewells' ? farewellsData : cemeteryData;

    const filteredData = currentData.filter((item) => {
        const matchesCategory =
            selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left Menu */}
            <div
                style={{
                    width: '250px',
                    backgroundColor: '#f7f7f7',
                    padding: '1rem',
                    borderRight: '1px solid #e2e2e2',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                        Menu
                    </h2>
                    <div
                        style={{
                            padding: '0.5rem',
                            backgroundColor:
                                activeMenu === 'farewells'
                                    ? '#e6f0ff'
                                    : 'transparent',
                            cursor: 'pointer',
                        }}
                        onClick={() => setActiveMenu('farewells')}
                    >
                        Farewell Pages
                    </div>
                    <div
                        style={{
                            padding: '0.5rem',
                            backgroundColor:
                                activeMenu === 'cemetery'
                                    ? '#e6f0ff'
                                    : 'transparent',
                            cursor: 'pointer',
                        }}
                        onClick={() => setActiveMenu('cemetery')}
                    >
                        Cemetery Projects
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full" style={{ flex: 1, padding: '1.5rem' }}>
                {/* Filters */}
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{ width: '200px', padding: '0.5rem' }}
                    >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{ width: '200px', padding: '0.5rem' }}
                    >
                        <option value="date">Sort by Date</option>
                        <option value="alphabet">Sort Alphabetically</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '300px', padding: '0.5rem' }}
                    />
                </div>

                {/* Data List */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {sortedData.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                padding: '1rem',
                                border: '1px solid #e2e2e2',
                                borderRadius: '0.375rem',
                                transition: 'background-color 0.2s',
                                ':hover': {
                                    backgroundColor: '#f7f7f7',
                                },
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '1.125rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.title}
                            </h3>
                            <p style={{ color: '#666' }}>{item.category}</p>
                            <p style={{ fontSize: '0.875rem', color: '#777' }}>
                                {new Date(item.date).toLocaleDateString()}
                            </p>
                            {activeMenu === 'farewells' ? (
                                <p style={{ marginTop: '0.5rem' }}>
                                    {item.content}
                                </p>
                            ) : (
                                <>
                                    <p style={{ marginTop: '0.5rem' }}>
                                        Status: {item.status}
                                    </p>
                                    <p>Location: {item.location}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Data;
