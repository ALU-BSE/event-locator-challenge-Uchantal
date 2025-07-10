// index.js - Handles search and filter on the home page

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Collect search/filter values
    const search = document.getElementById('searchInput').value;
    const date = document.getElementById('dateFilter').value;
    const category = document.getElementById('categoryFilter').value;
    // Redirect to events.html with query params
    const params = new URLSearchParams({ search, date, category });
    window.location.href = `events.html?${params.toString()}`;
});
