const box = document.querySelector('.wikibox');

box.addEventListener('mouseover', function() {
box.classList.add('enlarge');
});

box.addEventListener('mouseleave', function() {
box.classList.remove('enlarge');
});

document.getElementById('about').addEventListener('click', function() {
	window.location.href = 'inserts/about.html';
});

document.getElementById('ork').addEventListener('click', function() {
	window.location.href = 'inserts/ork.html';
});

document.getElementById('elemental_relic').addEventListener('click', function() {
	window.location.href = 'inserts/elemental_relic.html';
});

document.getElementById('firestuff').addEventListener('click', function() {
	window.location.href = 'inserts/firestuff.html';
});

document.getElementById('ironsword').addEventListener('click', function() {
	window.location.href = 'inserts/ironsword.html';
});