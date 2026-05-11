async function loadStreamers() {
  const response = await fetch('streamers.json');
  const streamers = await response.json();
  
  const container = document.getElementById('streamers');
  container.innerHTML = '';

  streamers.forEach(streamer => {
    const card = document.createElement('div');
    card.className = `streamer-card ${streamer.theme.animation || 'neon'}`;
    card.style.setProperty('--accent-color', streamer.theme.accentColor);

    card.innerHTML = `
      <div class="banner">
        <img src="${streamer.banner}" alt="banner" style="width:100%; height:100%; object-fit: cover;">
        ${streamer.status === "LIVE" ? 
          `<div class="live-badge">LIVE • ${streamer.viewers}</div>` : ''}
      </div>
      
      <img class="avatar" src="${streamer.avatar}" alt="${streamer.name}">
      
      <div class="info">
        <h2>${streamer.name}</h2>
        <p>${streamer.game}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

loadStreamers();
