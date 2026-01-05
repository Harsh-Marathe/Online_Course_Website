import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const SearchFilter = ({ onSearch, onFilter }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'development', name: 'Development' },
        { id: 'business', name: 'Business' },
        { id: 'design', name: 'Design' },
        { id: 'photography', name: 'Photography' },
        { id: 'music', name: 'Music' },
        { id: 'health', name: 'Health & Fitness' }
    ];

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onSearch) {
                onSearch(searchQuery);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery, onSearch]);

    const handlePriceChange = (type, value) => {
        const newRange = { ...priceRange, [type]: parseInt(value) };
        setPriceRange(newRange);
        if (onFilter) {
            onFilter({ priceRange: newRange, category: selectedCategory });
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (onFilter) {
            onFilter({ priceRange, category });
        }
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setPriceRange({ min: 0, max: 500 });
        setSelectedCategory('all');
        if (onSearch) onSearch('');
        if (onFilter) onFilter({ priceRange: { min: 0, max: 500 }, category: 'all' });
    };

    return (
        <div className="search-filter">
            <div className="search-filter__search">
                <svg className="search-filter__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-filter__input"
                />
                {searchQuery && (
                    <button
                        className="search-filter__clear"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </div>

            <button
                className="search-filter__toggle btn-ripple"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filters
            </button>

            <div className={`search-filter__panel ${isFilterOpen ? 'open' : ''}`}>
                <div className="search-filter__section">
                    <h4 className="search-filter__heading">Price Range</h4>
                    <div className="search-filter__price">
                        <div className="search-filter__price-inputs">
                            <input
                                type="number"
                                min="0"
                                max={priceRange.max}
                                value={priceRange.min}
                                onChange={(e) => handlePriceChange('min', e.target.value)}
                                className="search-filter__price-input"
                                placeholder="Min"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                min={priceRange.min}
                                max="1000"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                className="search-filter__price-input"
                                placeholder="Max"
                            />
                        </div>
                        <div className="search-filter__price-range">
                            <input
                                type="range"
                                min="0"
                                max="500"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                className="search-filter__slider"
                            />
                        </div>
                    </div>
                </div>

                <div className="search-filter__section">
                    <h4 className="search-filter__heading">Category</h4>
                    <div className="search-filter__categories">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`search-filter__category-chip ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="search-filter__clear-btn"
                    onClick={handleClearFilters}
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    );
};

export default SearchFilter;
