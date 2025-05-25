const persegiempat = document.getElementById('box')
const videocontainer = document.getElementById('videocontainer')
const video = document.getElementById('inivideo')

persegiempat.addEventListener('click', () => {
	videocontainer.style.display = "flex";
	video.play();
});

video.addEventListener('ended', () => {
	window.location.href = "landingpage2.html"
});