function searchWord() {
    const searchTerm = document.getElementById('searchBar').value.trim().toLowerCase();
    const content = document.getElementById('content');
    const text = content.innerHTML;

    if (searchTerm === '') {
        alert('Please enter a word to search.');
        return;
    }

    const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`);

    content.innerHTML = highlightedText;

    const highlightCount = (highlightedText.match(/<span class="highlight">/g) || []).length;
    alert(`Found ${highlightCount} occurrence(s) of "${searchTerm}".`);
}

// Add event listener for the Enter key
document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchWord();
    }
});