
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name_input");
	localStorage.setItem("player2_name_input");

  window.location = "game_page.html";
}

