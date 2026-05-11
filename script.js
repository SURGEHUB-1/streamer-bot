const streamers = [
  {
    name: "YourStreamerName",
    avatar: "https://via.placeholder.com/150",
    banner: "https://via.placeholder.com/600x200",
    status: "LIVE",
    viewers: "1240",
    game: "Valorant"
  }
  // Add more streamers here later
];

const container = document.getElementById('streamers');

streamers.forEach(streamer => {
  const card = document.createElement('div');
  card.className = 'streamer-card';
  card.innerHTML = `
    <div class="banner" style="background-image: url('${streamer.banner}'); background-size: cover;">
      ${streamer.status === "LIVE" ? `<div class="live-badge">LIVE • ${streamer.viewers}</div>` : ''}
    </div>
    <img class="avatar" src="${streamer.avatar}" alt="${streamer.name}">
    <div class="info">
      <h2>${streamer.name}</h2>
      <p>${streamer.game}</p>
    </div>
  `;
  container.appendChild(card);
});
