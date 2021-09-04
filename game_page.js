player1=localStorage.getItem("player1name");
player2=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1+":";
document.getElementById("player2name").innerHTML=player2+":";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("question_turn").innerHTML="Question Turn-"+player1;
document.getElementById("answer_turn").innerHTML="Answer Turn-"+player2;
function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;
    actual_answer=parseInt(input1)*parseInt(input2);
}
var question_number="<h4>"+number1+"x"+number2+"</h4>";
var input_box="<br>Answer: <input type='text' id='input_check_box'>";
var check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
var row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("input1").value="";
document.getElementById("input2").value="";