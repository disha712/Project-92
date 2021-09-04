function add_user() {
    player1name=document.getElementById("player1nameinput").value;
    player2name=document.getElementById("player2nameinput").value;
    localStorage.setItem("player1name",player1nameinput);
    localStorage.setItem("player2name",player2nameinput);
    window.location ="game_page.html";
}
