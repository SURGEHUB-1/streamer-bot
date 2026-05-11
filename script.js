async function loadStreamers() {
  const response = await fetch('streamers.json');
  const streamers = await response.json();
  
  const container = document.getElementById('streamers');
  container.innerHTML = '';

  streamers.forEach(streamer => {
    const card = document.createElement('div');
    card.className = `streamer-card ${streamer.theme.animation}`;
    
    // Apply custom theme
    card.style.setProperty('--accent-color', streamer.theme.accentColor);
    
    card.innerHTML = `
      <div class="banner" style="background: ${streamer.theme.background};">
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
