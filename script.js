async function loadStreamers() {
  const response = await fetch('streamers.json');
  const streamers = await response.json();
  
  const container = document.getElementById('streamers');
  container.innerHTML = '';

  streamers.forEach(streamer => {
    const isLive = streamer.status === "LIVE" || streamer.status === "live";
    
    const card = document.createElement('div');
    card.className = 'streamer-card';
    
    card.innerHTML = `
      <div class="banner">
        <img src="${streamer.banner}" alt="${streamer.name} banner">
        
        ${isLive ? 
          `<div class="live-badge">LIVE • ${streamer.viewers || '1.2K'}</div>` 
          : ''}
      </div>
      
      <div class="info">
        <h2>${streamer.name}</h2>
        <p>${streamer.game || 'Offline'}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

loadStreamers();
