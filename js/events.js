// events.js - Handles displaying and filtering events

// Example event data (replace with fetch from API or JSON file as needed)
const events = [
    {
        id: 1,
        name: "Summer Music Festival",
        date: "2025-07-15",
        time: "18:00",
        location: "Rubavu",
        category: "music",
        description: "Join us for an unforgettable evening of live music featuring local and international artists. ",
        organizer: "Toxic Experience Group"
    },
    {
        id: 2,
        name: "Tech Innovation Conference",
        date: "2025-08-20",
        time: "09:00",
        location: "Africa Tech Hub, kigali"
,       category: "technology",
        description: "Discover the latest trends in artificial intelligence, blockchain, and emerging technologies. ",
        organizer: "Irembo Tech solutions",
    },
    {
        id: 3,
        name: "Food & Wine Tasting",
        date: "2025-07-12",
        time: "19:30",
        location: "Downtown - City Lounge, Kigali",
        category: "food",
        description: "Indulge in an exquisite selection of wines paired with gourmet appetizers.",
        organizer: "The Shinex Catering Services group",
    },
    {
        id: 4,
        name: "Art Gallery Opening",
        date: "2025-07-18",
        time: "17:00",
        location: "Modern Art Museum, Gisozi",
        category: "art",
        description: "Experience contemporary art from emerging artists. Join us for an evening of creativity and inspiration.",
        organizer: "The Shinex Arts Foundation",
    },
    {
        id: 5,
        name: "Marathon Training Workshop",
        date: "2025-08-01",
        time: "08:00",
        location: "ALU, Kigali",
        category: "health",
        description: "Learn proper running techniques, nutrition strategies, and injury prevention tips from professional marathon coaches.",
        organizer: "ALU wellness club"
    },
    {
        id: 6,
        name: "Business Networking Event",
        date: "2025-07-22",
        time: "18:30",
        location: "The Shinex Hotel, Musanze",
        category: "business",
        description: "Connect with entrepreneurs, investors, and business professionals. ",
        organizer: "The Shinex Business Group"
    },
    {
        id: 7,
        name: "Basketball Championship",
        date: "2025-07-25",
        time: "20:00",
        location: "BK Arena",
        category: "sports",
        description: "Experience the excitement of live sports between APR BBC and REG BBC with family and friends .",
        organizer: "Rwanda Basketball Federation"
    },
    {
        id: 8,
        name: "Wellness Retreat",
        date: "2025-09-28",
        time: "10:00",
        location: "ALU, Kigali",
        category: "health",
        description: "Escape the hustle and bustle with a day of yoga, meditation, and mindfulness exercises. Includes healthy meals.",
        organizer: "ALU Wellness Center"
    }
];

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        search: params.get('search') || '',
        date: params.get('date') || '',
        category: params.get('category') || ''
    };
}

function filterEvents(events, { search, date, category }) {
    return events.filter(event => {
        const matchesSearch = search ? (event.name.toLowerCase().includes(search.toLowerCase()) || event.location.toLowerCase().includes(search.toLowerCase())) : true;
        const matchesDate = date ? event.date === date : true;
        const matchesCategory = category ? event.category === category : true;
        return matchesSearch && matchesDate && matchesCategory;
    });
}

function renderEvents(events) {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    if (events.length === 0) {
        eventsList.innerHTML = '<p class="text-center">No events found.</p>';
        return;
    }
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-lg-4 d-flex align-items-stretch mb-4';
        card.innerHTML = `
            <div class="card h-100 w-100">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${event.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${event.date} | ${event.location}</h6>
                    <p class="card-text flex-grow-1">${event.description}</p>
                    <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary mt-auto">View Details</a>
                </div>
            </div>
        `;
        eventsList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    const filtered = filterEvents(events, params);
    renderEvents(filtered);
});
