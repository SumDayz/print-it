const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Gestion click carrou gauche

const carrou = document.getElementById("js_left");
carrou.addEventListener("click", function() {
	let point_active = document.getElementsByClassName("dot_selected");
	let text_focus = point_active[0].id;
	let only_numbers_point = parseInt(text_focus.replace(/\D/g, ""));
	let image_active = document.getElementsByClassName("active");
	let image_active_id = image_active[0].id;
	let only_numbers_image = parseInt(image_active_id.replace(/\D/g, ""));
	if((only_numbers_point==0) && (only_numbers_image == 0)){
		let futur_point_active = document.getElementById("dot_"+((slides.length)-1));
		point_active[0].setAttribute("class", "dot");
		futur_point_active.setAttribute("class", "dot dot_selected");
		let futur_image_active = document.getElementById("image_"+((slides.length)-1));
		image_active[0].setAttribute("hidden", "true");
		image_active[0].setAttribute("class", "banner-img");
		futur_image_active.setAttribute("class", "banner-img active");
		futur_image_active.removeAttribute("hidden");
		document.getElementById("text_banner").innerHTML = slides[slides.length-1].tagLine;
	}
	else{
		let futur_point_active = document.getElementById("dot_"+(only_numbers_point-1));
		point_active[0].setAttribute("class", "dot");
		futur_point_active.setAttribute("class", "dot dot_selected");
		let futur_image_active = document.getElementById("image_"+(only_numbers_image-1));
		image_active[0].setAttribute("hidden", "true");
		image_active[0].setAttribute("class", "banner-img");
		futur_image_active.setAttribute("class", "banner-img active");
		futur_image_active.removeAttribute("hidden");
		document.getElementById("text_banner").innerHTML = slides[only_numbers_point-1].tagLine;
	}
});

//

// Gestion click carrou droite

const carrou_right = document.getElementById("js_right");
carrou_right.addEventListener("click", function() {
	let point_active = document.getElementsByClassName("dot_selected");
	let text_focus = point_active[0].id;
	let only_numbers_point = parseInt(text_focus.replace(/\D/g, ""));
	let image_active = document.getElementsByClassName("active");
	let image_active_id = image_active[0].id;
	let only_numbers_image = parseInt(image_active_id.replace(/\D/g, ""));
	if((only_numbers_point==3) && (only_numbers_image == 3)){
		let futur_point_active = document.getElementById("dot_"+(0));
		point_active[0].setAttribute("class", "dot");
		futur_point_active.setAttribute("class", "dot dot_selected");
		let futur_image_active = document.getElementById("image_"+(0));
		image_active[0].setAttribute("hidden", "true");
		image_active[0].setAttribute("class", "banner-img");
		futur_image_active.setAttribute("class", "banner-img active");
		futur_image_active.removeAttribute("hidden");
		document.getElementById("text_banner").innerHTML = slides[0].tagLine;
	}
	else{
		let futur_point_active = document.getElementById("dot_"+(only_numbers_point+1));
		point_active[0].setAttribute("class", "dot");
		futur_point_active.setAttribute("class", "dot dot_selected");
		let futur_image_active = document.getElementById("image_"+(only_numbers_image+1));
		image_active[0].setAttribute("hidden", "true");
		image_active[0].setAttribute("class", "banner-img");
		futur_image_active.setAttribute("class", "banner-img active");
		futur_image_active.removeAttribute("hidden");
		document.getElementById("text_banner").innerHTML = slides[only_numbers_point+1].tagLine;
	}
});  

//

// Boucle générant de manière dynamique les images du carroussel

for(let x=0; x<slides.length; x++){

	// Condition première image (active) ou autre
	if(x==0){
		// point
		let dot = document.createElement("span");
		dot.setAttribute("id", "dot_"+x);
		dot.setAttribute("class", "dot dot_selected");
		document.getElementById("dots").appendChild(dot);
		//

		// image
		let img_carrou = document.createElement("img");
		img_carrou.setAttribute("id", "image_"+x);
		img_carrou.setAttribute("class", "banner-img active");
		img_carrou.setAttribute("src", "./assets/images/slideshow/"+slides[x].image);
		img_carrou.setAttribute("alt", slides[x].tagLine);
		document.getElementById("banner").appendChild(img_carrou);
		//
	}
	else{
		//point
		let dot = document.createElement("span");
		dot.setAttribute("id", "dot_"+x);
		dot.setAttribute("class", "dot");
		document.getElementById("dots").appendChild(dot);
		//

		// image
		let img_carrou = document.createElement("img");
		img_carrou.setAttribute("id", "image_"+x);
		img_carrou.setAttribute("class", "banner-img");
		img_carrou.setAttribute("src", "./assets/images/slideshow/"+slides[x].image);
		img_carrou.setAttribute("alt", slides[x].tagLine);
		img_carrou.setAttribute("hidden", "true")
		document.getElementById("banner").appendChild(img_carrou);
		//
	}
	// 
}

//