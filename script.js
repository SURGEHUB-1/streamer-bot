async function loadStreamers() {
  const response = await fetch('streamers.json');
  const streamers = await response.json();
  
  const container = document.getElementById('streamers');
  container.innerHTML = '';

  streamers.forEach(streamer => {
    const isLive = streamer.status === "LIVE";
    
    const card = document.createElement('div');
    card.className = `streamer-card ${streamer.theme.animation || 'neon'}`;
    card.style.setProperty('--accent-color', streamer.theme.accentColor || '#00ffff');

    card.innerHTML = `
      <div class="banner">
        <img src="${streamer.banner || 'https://via.placeholder.com/600x200/1e2937/ffffff?text=Banner'}" 
             alt="banner" 
             onerror="this.src='https://via.placeholder.com/600x200/1e2937/ffffff?text=Banner'">
        
        ${isLive ? 
          `<div class="live-badge">LIVE • ${streamer.viewers}</div>` : ''}
      </div>
      
      <img class="avatar" 
           src="${streamer.avatar || 'https://via.placeholder.com/150/64748b/ffffff?text=?'}"
           alt="${streamer.name}"
           onerror="this.src='https://via.placeholder.com/150/64748b/ffffff?text=?'">
      
      <div class="info">
        <h2>${streamer.name}</h2>
        <p>${streamer.game || 'No Game'}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

loadStreamers();
