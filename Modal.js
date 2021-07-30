let openBtn = document.querySelectorAll(".show-modal");
let closeBtn = document.querySelector(".close-modal");
let modalEl = document.querySelector(".modal");
let overlayEl = document.querySelector(".overlay");


for (i = 0; openBtn.length > i ; i++){
	openBtn[i].addEventListener("click", openIt )
}

modalEl.addEventListener("click", closeIt);

overlayEl.addEventListener("click", closeIt);

closeBtn.addEventListener("click", closeIt);

document.addEventListener("keydown", function(pressedAF){
	if(pressedAF.key = "Escape" && !modalEl.classList.contains("hidden")){
		closeIt();
	}
})

function closeIt(){
		modalEl.classList.add("hidden");
		overlayEl.classList.add("hidden");
}

function openIt(){
		modalEl.classList.remove("hidden");
		overlayEl.classList.remove("hidden");
	}