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

document.getElementById('skills').addEventListener('click', function() {
	window.location.href = 'inserts/skills.html';
});