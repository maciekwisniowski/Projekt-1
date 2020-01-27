document.getElementById("Kitchen").style.display = "none";

const elo = document.getElementById("kplink");
const kuchnia = function () {
	document.getElementById("Kitchen").style.display = "block";
	}
	
elo.addEventListener("click", kuchnia);

const siema = document.getElementById("3dlink");
const dupa = function () {
	document.getElementById("Kitchen").style.display = "block";
	}
	
siema.addEventListener("click", dupa);


const klik = function(){
	document.getElementById("zdjecie1").src="mebel.jpg"
	document.getElementById("zdjecie2").src="mebel2.jpg"
	document.getElementById("zdjecie3").src="mebel3.jpg"
	document.getElementById("zdjecie4").src="mebel4.jpg"
}

document.getElementById("3dlink").addEventListener("click", klik);

const back = function(){
	document.getElementById("zdjecie1").src="kuchnia.jpg"
	document.getElementById("zdjecie2").src="kuchnia2.jpg"
	document.getElementById("zdjecie3").src="kuchnia3.jpg"
	document.getElementById("zdjecie4").src="kuchnia4.jpg"
	console.log("back")
}
document.getElementById("kplink").addEventListener("click", back);
	
