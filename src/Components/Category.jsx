import { useState, useCallback } from 'react';
import "../Style/Cat-Style.css";
import profimg from "../assets/aluda.png";

function Category() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = useCallback(() => {
        if (searchTerm.trim() === '') {
            alert('Please enter a word to search.');
            return;
        }

        const searchResults = [];

        // Search in news.jsx
        const newsComponent = document.querySelector('#content');
        if (newsComponent) {
            const newsMatches = findMatches(newsComponent, searchTerm);
            searchResults.push(...newsMatches.map(match => ({ ...match, source: 'News' })));
        }

        // Search in main.jsx (in Categories folder)
        const mainComponent = document.querySelector('#content');
        if (mainComponent) {
            const mainMatches = findMatches(mainComponent, searchTerm);
            searchResults.push(...mainMatches.map(match => ({ ...match, source: 'Main' })));
        }

        // Display results
        displayResults(searchResults);
    }, [searchTerm]);

    const findMatches = (element, query) => {
        const regex = new RegExp(query, 'gi');
        const text = element.textContent;
        const matches = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
            matches.push({
                text: match[0],
                index: match.index,
                context: text.substr(Math.max(0, match.index - 20), 40)
            });
        }

        return matches;
    };

    const displayResults = (results) => {
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item';
                resultElement.innerHTML = `
                    <h3>${result.source}</h3>
                    <p>...${result.context}...</p>
                `;
                resultsContainer.appendChild(resultElement);
            });
        }

        // Remove any existing results
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        // Add new results after the search bar
        const searchBar = document.getElementById('searchbar');
        searchBar.parentNode.insertBefore(resultsContainer, searchBar.nextSibling);
    };

    return (
        <div className="cat-wrapper">
            <ul className="cat-ul">
                <li className="profimg">
                    <a href="/Login"><img src={profimg} alt="" /></a>
                </li>
                <li>
                    <a href="/">მთავარი</a>
                </li>
                <li>
                    <a href="/profile">პროფილი</a>
                </li>
                <li>
                    <a href="/activities">აქტივობები</a>
                </li>
                <li className="dd-li">
                    <a href="/topics">თემები</a>
                </li>
                <li>
                    <a href="/">ბლოგი</a>
                </li>
                <li>
                    <a href="/history">ისტორიები</a>
                </li>
            </ul>
            <input 
                type="text" 
                name="searchbar" 
                id="searchbar" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search in news and main..."
            />
            {/* <button onClick={handleSearch}>Search</button> */}
        </div>
    );
}

export default Category;