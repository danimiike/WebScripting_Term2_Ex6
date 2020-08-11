// Exercise 6 JavaScript

// global variables to keep display state
let consolesFlag = false;//HERE
let gamesFlag = false;//HERE

// create the empty consoles array
let consoles = []; //HERE

// create the empty games array
let games = [];//HERE


let table, row;


// console class

class Console {

	constructor(name, pG, vR, bluRay, price){
		this._name = name;
		this._pG = pG;
		this._vR = vR;
		this._bluRay = bluRay;
		this._price = price;
	}

	get name(){
		return this._name;
	}

	get pG(){
		return this._pG;
	}
	get vR(){
		return this._vR;
	}
	get bluRay(){
		return this._bluRay;
	}
	get price(){
		return this._price;
	}
}




// game class


class Game {

	constructor(name, xbox1, pS4, nSwitch, genre){
		this._name = name;
		this._xbox1 = xbox1;
		this._pS4 = pS4;
		this._nSwitch = nSwitch;
		this._genre = genre;
	}

	get name(){
		return this._name;
	}

	get xbox1(){
		return this._xbox1;
	}
	get pS4(){
		return this._pS4;
	}
	get nSwitch(){
		return this._nSwitch;
	}
	get genre(){
		return this._genre;
	}
}



// helper function toggles console table visibility
function toggleConsoles() {
	if (consolesFlag) {
		consolesFlag = false;
		document.getElementById("consoles").style.visibility = "hidden";
	}
	else {
		consolesFlag = true;
		document.getElementById("consoles").style.visibility = "visible";
	}
}

// helper function toggles console table visibility
function toggleGames() {
	if (gamesFlag) {
		gamesFlag = false;
		document.getElementById("games").style.visibility = "hidden";
	}
	else {
		gamesFlag = true;
		document.getElementById("games").style.visibility = "visible";
	}
}

// initialization function builds both tables
function init() {

	
	// build the console array
	consoles.push(new Console('Microsoft Xbox One', 'No', 'No', 'Yes', 299.99));
	consoles.push(new Console('Nintendo Switch', 'Yes', 'No', 'Yes', 399.99));
	consoles.push(new Console('Sony PlayStation 4', 'No', 'Yes', 'No', 299.99));
	
	// get a reference to the consoles table
	table = document.getElementById("consoles");//HERE
	
	// create a new row at the end of the table
	row = table.insertRow(-1);//HERE
	
	// create set of row cells and associated reference variables
	// for the 5 headings
	let headName = row.insertCell(0);//HERE
	let headpG = row.insertCell(1);//HERE
	let headvR = row.insertCell(2);//HERE
	let headBluRay = row.insertCell(3);//HERE
	let headPrice = row.insertCell(4);//HERE
	
	// insert the heading values into the cells
	headName.innerHTML = '<h3>Name</h3>';
	headpG.innerHTML = '<h3>Portable Gaming</h3>';
	headvR.innerHTML = '<h3>Virtual Reality</h3>';
	headBluRay.innerHTML = '<h3>UHD Blu-ray Player</h3>';
	headPrice.innerHTML = '<h3>Price</h3>';
	
	// traverse the consoles array adding row data
	for (let i = 0; i < consoles.length; i++) {//HERE


		//table = document.getElementById("consoles");//HERE
		// create a new row at the end of the table
		row = table.insertRow(-1);
		

		// create set of row cells and associated reference variables
		// for the 5 properties in the current row
		let name = row.insertCell(0);//HERE
		let pG = row.insertCell(1);//HERE
		let vR = row.insertCell(2);//HERE
		let bluRay = row.insertCell(3);//HERE
		let price = row.insertCell(4);//HERE
		
		// insert the row values into the cells
		name.innerHTML = consoles[i].name;
		pG.innerHTML = consoles[i].pG;
		vR.innerHTML = consoles[i].vR;
		bluRay.innerHTML = consoles[i].bluRay;
		price.innerHTML = '$' + consoles[i].price;
	}
	
	
	
	// build the games array
	games.push(new Game('The Elder Scrolls V: Skyrim', 'Yes', 'Yes', 'Yes', 'Role-playing'));
	games.push(new Game('Super Mario Odyssey', 'No', 'No', 'Yes', 'Platform'));
	games.push(new Game('Cuphead', 'Yes', 'No', 'No', 'Run and Gun'));
	games.push(new Game('Desting 2', 'Yes', 'Yes', 'No', 'Run and Gun'));
	games.push(new Game('Cuphead', 'Yes', 'No', 'No', 'First-person shooter'));
	games.push(new Game('Horizon Zero Dawn', 'No', 'Yes', 'No', 'Role-playing'));
	games.push(new Game('The Legend of Zelda: Breath of the Wild', 'No', 'No', 'Yes', 'Action-adventure'));
	games.push(new Game('Playerunknown\'s Battlegrounds', 'Yes', 'No', 'No', 'Battle Royale'));
	//or
	//games.push(new Game("Playerunknown's Battlegrounds", "Yes", "No", "No", "Battle Royale"));
	games.push(new Game('Resident Evil 7', 'Yes', 'Yes', 'No', 'Survival'));
	games.push(new Game('Injustice 2', 'Yes', 'Yes', 'No', 'Fighting'));
	games.push(new Game('Call of Duty: WWII', 'Yes', 'Yes', 'No', 'First-person shooter'));
	
	// get a reference to the games table
	table = document.getElementById("games");
	
	// create a new row at the end of the table
	row = table.insertRow(-1);
	
	// create set of row cells and associated reference variables
	// for the 5 headings
	headName = row.insertCell(0);//HERE
	let headXbox = row.insertCell(1);//HERE
	let headPS4 = row.insertCell(2);//HERE
	let headSwitch = row.insertCell(3);//HERE
	let headGenre = row.insertCell(4);//HERE
	
	// insert the row values into the cells
	headName.innerHTML = '<h3>Name</h3>';
	headXbox.innerHTML = '<h3>Xbox One</h3>';
	headPS4.innerHTML = '<h3>PS4</h3>';
	headSwitch.innerHTML = '<h3>Switch</h3>';
	headGenre.innerHTML = '<h3>Genre</h3>';
	
	// traverse the consoles array adding row data
	for (let i = 0; i < games.length; i++) {//HERE
		// create a new row at the end of the table
		row = table.insertRow(-1);
	}
		
		// create set of row cells and associated reference variables
		// for the 5 properties in the current row
	for (let i = 0; i < games.length; i++) {//HERE

		row = table.insertRow(-1);

		let name = row.insertCell(0);//HERE
		let xbox1 = row.insertCell(1);//HERE
		let pS4 = row.insertCell(2);//HERE
		let nSwitch = row.insertCell(3);//HERE
		let genre = row.insertCell(4);//HERE
		
		// insert the row values into the cells
		name.innerHTML = games[i].name;
		xbox1.innerHTML = games[i].xbox1;
		pS4.innerHTML = games[i].pS4;
		nSwitch.innerHTML = games[i].nSwitch;
		genre.innerHTML = games[i].genre;
	}
}