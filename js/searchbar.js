let documents = [];

fetch('searchindex.json')
    .then(response => response.json())
    .then(data => {
        documents = data;
        initializeLunr();
    })
    .catch(error => console.error('Error fetching the JSON:', error));

let idx;

function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function initializeLunr() {
    idx = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('content');

        documents.forEach(function (doc) {
            // Normalize the content before adding to Lunr index
            doc.title = normalizeString(doc.title);
            doc.content = normalizeString(doc.content);
            this.add(doc);
        }, this);
    });
}

function search() {
    const query = document.getElementById('searchBox').value.trim();
    
    if (query === "") {
        // Do not show modal if the search query is empty
        return;
    }

    // Normalize the search query
    const normalizedQuery = normalizeString(query);
    const results = idx.search(normalizedQuery);
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Keine Ergebnisse gefunden</p>';
    } else {
        results.forEach(result => {
            const item = documents.find(doc => doc.id == result.ref);
            const truncatedContent = item.content.length > 200 ? item.content.substring(0, 200) + '...' : item.content; // Truncate content to 200 characters
            const div = document.createElement('div');
            div.classList.add('result-item', 'mb-3');
            div.innerHTML = `<h4><a href="${item.url}" target="_blank">${item.title}</a></h4><p><a href="${item.url}" target="_blank">Zum Projekt</a></p><p>${truncatedContent}</p>`;
            resultsDiv.appendChild(div);
        });
    }

    $('#resultsModal').modal('show');
}

// Add event listener for the Enter key
document.getElementById('searchBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});
