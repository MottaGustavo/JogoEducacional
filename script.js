function tocarAudio() {
  const audio = document.getElementById('meu-audio');

  // Volta pro início caso a criança clique de novo antes de terminar
  audio.currentTime = 0;

  audio.play();
}