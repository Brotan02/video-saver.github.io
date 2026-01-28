function playVideo(filename) {
let player = document.getElementById("player");
player.src = filename;
player.play();


// История
let history = JSON.parse(localStorage.getItem("history") || "[]");
if(!history.includes(filename)) history.push(filename);
localStorage.setItem("history", JSON.stringify(history));


updateHistory();
}


function updateHistory() {
let historyDiv = document.getElementById("history");
let history = JSON.parse(localStorage.getItem("history") || "[]");
historyDiv.innerHTML = "<h3>История просмотров</h3>";
history.forEach(v => {
let el = document.createElement("div");
el.innerText = v;
el.classList.add("video-item");
el.onclick = () => playVideo(v);
historyDiv.appendChild(el);
});
}


function filterVideos() {
let input = document.getElementById("search").value.toLowerCase();
let items = document.getElementsByClassName("video-item");
for(let i=0;i<items.length;i++){
let text = items[i].innerText.toLowerCase();
items[i].style.display = text.includes(input)?"":"none";
}
}


document.getElementById("updateBtn").onclick = function(){
location.reload(); // обновление плейлиста
}