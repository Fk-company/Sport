document.addEventListener("DOMContentLoaded", () => {
    fetchLatestMatches();
    fetchUpcomingMatches();
});

function fetchLatestMatches() {
    fetch("assets/data/match-data.json")
        .then(response => response.json())
        .then(data => {
            const latestMatches = document.getElementById("latest-matches");
            data.latest.forEach(match => {
                const matchElement = document.createElement("div");
                matchElement.classList.add("match");
                matchElement.innerHTML = `
                    <h3>${match.team1} vs ${match.team2}</h3>
                    <p>Score: ${match.score1} - ${match.score2}</p>
                `;
                latestMatches.appendChild(matchElement);
            });
        });
}

function fetchUpcomingMatches() {
    fetch("assets/data/match-data.json")
        .then(response => response.json())
        .then(data => {
            const upcomingMatches = document.getElementById("upcoming-matches");
            data.upcoming.forEach(match => {
                const matchElement = document.createElement("div");
                matchElement.classList.add("match");
                matchElement.innerHTML = `
                    <h3>${match.team1} vs ${match.team2}</h3>
                    <p>Date: ${match.date}</p>
                `;
                upcomingMatches.appendChild(matchElement);
            });
        });
}
