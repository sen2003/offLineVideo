function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
  }
  
  function changeTrack(src, name) {
    const audio = document.getElementById('audio');
    audio.src = src;
    document.getElementById('track-name').textContent = `目前播放：${name}`;
    audio.play();
  }
  