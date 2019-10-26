function play() {
    var audio = document.getElementById('sviraj');
    audio.play();
}


const app = document.getElementById('app');
console.log(app);
app.innerHTML = '<p>&copy Милош Петровић 2019.</p><br><p>Контакт: имејл - milos.hans@live.com; телефон: 062/89-32-538</p>';

const social = document.getElementById('mreze');
mreze.innerHTML = '<a href="https://www.facebook.com/profile.php?id=100002529640208&ref=bookmarks" target="_blank"><img class="mreze-icon" src="assets/images/fb_ico.png" /></a>';
mreze.innerHTML += '<a href="https://www.youtube.com/channel/UCNIAM9PwSps4Wf0zdsgiUow?view_as=subscriber" target="_blank"><img class="mreze-icon" src="assets/images/yt.png" /></a>';
mreze.innerHTML += '<a href="https://twitter.com" target="_blank"><img class="mreze-icon" src="assets/images/twitter.png" /></a>';
mreze.innerHTML += '<a href="https://www.instagram.com" target="_blank"><img class="mreze-icon" src="assets/images/ig.png" /></a>';