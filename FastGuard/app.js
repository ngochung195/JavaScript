for (let i = 0; i < 1000000000; i++) { }

let playerName = prompt("Chào mừng đến với HeroQuest! Nhập tên của bạn:");
if (playerName === null || playerName.trim() === "") {
    playerName = "Anh hùng vô danh";
}
alert("Chào mừng " + playerName + " đến với HeroQuest Game!");

let isAdult = confirm("Bạn đã đủ 18 tuổi chưa?");

const playGame = document.getElementById("play_game");
const blockGame = document.getElementById("block_game");

if (isAdult == true) {
    alert("Chúc bạn chơi game vui vẻ!");
    playGame.style.display = "block";
} else {
    alert("Bạn chưa đủ tuổi chơi HeroQuest Game!");
    blockGame.style.display = "block";
}