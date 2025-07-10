// event-details.js - Handles displaying details for a single event

// Example event data (should match events.js)
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
        location: "Africa Tech Hub, kigali",
        category: "technology",
        description: "Discover the latest trends in artificial intelligence, blockchain, and emerging technologies. ",
        organizer: "Irembo Tech solutions"
    },
    {
        id: 3,
        name: "Food & Wine Tasting",
        date: "2025-07-12",
        time: "19:30",
        location: "Downtown - City Lounge, Kigali",
        category: "food",
        description: "Indulge in an exquisite selection of wines paired with gourmet appetizers. Learn about wine regions and tasting techniques from certified sommeliers.",
        organizer: "The Shinex Catering Services group"
    },
    {
        id: 4,
        name: "Art Gallery Opening",
        date: "2025-07-18",
        time: "17:00",
        location: "Modern Art Museum, Gisozi",
        category: "art",
        description: "Experience contemporary art from emerging artists. Join us for an evening of creativity and inspiration.",
        organizer: "The Shinex Arts Foundation"
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

function getEventId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

function renderEventDetails(event) {
    const detailsDiv = document.getElementById('eventDetails');
    if (!event) {
        detailsDiv.innerHTML = '<p class="text-center">Event not found.</p>';
        return;
    }
    detailsDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title mb-3">${event.name}</h2>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>Date:</strong> ${event.date}</li>
                    <li class="list-group-item"><strong>Time:</strong> ${event.time}</li>
                    <li class="list-group-item"><strong>Location:</strong> ${event.location}</li>
                    <li class="list-group-item"><strong>Category:</strong> ${event.category}</li>
                    <li class="list-group-item"><strong>Organizer:</strong> ${event.organizer}</li>
                </ul>
                <p class="card-text">${event.description}</p>
                <a href="events.html" class="btn btn-secondary mt-3">Back to Events</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const eventId = getEventId();
    const event = events.find(e => e.id === eventId);
    renderEventDetails(event);
});
