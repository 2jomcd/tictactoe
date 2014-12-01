
// connect JS variables to HTML elements
var c1 =			document.querySelector("#c1");
var c2 = 			document.querySelector("#c2");
var c3 = 			document.querySelector("#c3");
var c4 = 			document.querySelector("#c4");
var c5 = 			document.querySelector("#c5");
var c6 = 			document.querySelector("#c6");
var c7 = 			document.querySelector("#c7");
var c8 = 			document.querySelector("#c8");
var c9 = 			document.querySelector("#c9");
var xButton =  		document.querySelector("#xbutton");
var oButton = 		document.querySelector("#obutton");
var resetButton = 	document.querySelector("#resetbutton");

// take mark from screen
xButton.onclick = function() {mark = "X"};
oButton.onclick = function() {mark = "O"};

resetButton.onclick = function() {location.reload()};

// game reset function set-up board
function gameReset() {                    
c1.innerHTML="*";
c2.innerHTML="*";
c3.innerHTML="*";
c4.innerHTML="*";
c5.innerHTML="*";
c6.innerHTML="*";
c7.innerHTML="*";
c8.innerHTML="*";
c9.innerHTML="*";

}

gameReset();



// init tally's for each win vector

var row1 = 0; 
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var dia1 = 0;
var dia2 = 0;
var turn = 0;


// change cells and record tallies

c1.onclick = function() {
		if (c1.innerHTML!="*") {alert("illegal move!"); return}; 	// prevent cell from being marked twice
		turn+=1; 													// increment move counter 9 counts = max
		c1.innerHTML = mark; 										// put mark in the cell
		if (mark==="X") {row1 += 1; col1 += 1; dia2 +=1} 			// if X tally value of 1 to all vectors
			else {row1 += 5; col1 +=5; dia2 +=5} 					// if O tally a value of 5 to all vectors
		checkResult();												// check to see if game is complete
}
c2.onclick = function() {
	if (c2.innerHTML!="*") {alert("illegal move!"); return};
	turn+=1;
	c2.innerHTML = mark;
	if (mark==="X") {row1 += 1; col2 += 1} 
		else {row1 += 5; col2+=5}
	checkResult();
}
c3.onclick = function() {
	if (c3.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c3.innerHTML = mark;
	if (mark==="X") {row1 += 1; col3 += 1; dia1 +=1} 
		else {row1 += 5; col3 +=5; dia1 +=5}
	checkResult();
}
c4.onclick = function() {
	if (c4.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c4.innerHTML = mark;
		if (mark==="X") {row2 += 1; col1 += 1} 
		else {row2 += 5; col1 +=5}
	checkResult();
}
c5.onclick = function() {
	if (c5.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c5.innerHTML = mark;
	if (mark==="X") {row2 += 1; col2 += 1; dia1 +=1; dia2 +=1} 
		else {row2 += 5; col2 +=5; dia1 +=5; dia2 +=5}
	checkResult();
}
c6.onclick = function() {
	if (c6.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c6.innerHTML = mark;
	if (mark==="X") {row2 += 1; col3 += 1} 
		else {row2 += 5; col3 +=5}
		checkResult();
}
c7.onclick = function() {
	if (c7.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c7.innerHTML = mark;
	if (mark==="X") {row3 += 1; col1 += 1; dia1 +=1} 
		else {row3 += 5; col1 +=5; dia1 +=5}
	checkResult();
}
c8.onclick = function() {
	if (c8.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c8.innerHTML = mark;
	if (mark==="X") {row3 += 1; col2 += 1} 
		else {row3 += 5; col2 +=5}
	checkResult();
}
c9.onclick = function() {
	if (c9.innerHTML!="*") {alert("illegal move!"); return}; 
	turn+=1;
	c9.innerHTML = mark;
	if (mark==="X") {row3 += 1; col3 += 1; dia2 +=1} 
		else {row3 += 5; col3 +=5; dia2 +=5}
	checkResult();
}

// Switch marks
// check for winner or 9 boxes used
checkResult = function() {
if (mark==="X") {mark="O"} else {mark="X"};
if (row1===3||row2===3||row3===3||col1===3||col2===3||col3===3||dia1===3||dia2===3) {
	alert("X WINS!"); gameReset()}
else if (row1===15||row2===15||row3===15||col1===15||col2===15||col3===15||dia1===15||dia2===15) { 
	alert("O WINS!"); gameReset()}
else if (turn===9) {alert("Draw. Game over"); gameReset()}
}























