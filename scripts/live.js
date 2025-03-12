function fetchLiveMatchData() {
    fetch("https://api.example.com/live-match-data")
        .then(response => response.json())
        .then(data => {
            const liveMatch = document.getElementById("live-match");
            liveMatch.innerHTML = `
                <h3>${data.team1} vs ${data.team2}</h3>
                <p>Score: ${data.score1} - ${data.score2}</p>
            `;
        });
}

setInterval(fetchLiveMatchData, 10000); // Fetch every 10 seconds
