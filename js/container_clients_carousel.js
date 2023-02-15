

(function() {
	const slides = [
		 
		 `<div class="photo_text"><img src="/img/Photo/photo_clients/Img-1.png" alt="#">
		 <div class="container_rating">
			 <span>Marvin Luna</span>
			 <div class="rating_block">
				 <div class="rating_items">
					 <input name="rating" value="5" id="rating_5" type="radio" class="rating_item">
					 <label for="rating_5" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="4" id="raiting_4" type="radio">
									<label for="rating_4" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="3" id="rating_3" type="radio">
					 <label for="rating_3" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="2" id="rating_2" type="radio">
					 <label for="rating_2" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="1" id="rating_1" type="radio">
					 <label for="rating_1" class="rating_label"></label>
				 </div>
			 </div>
		 </div>
		 <div class="photo_text_subtitle">
						<span>Studio impressed me on multiple levels.
							<p>Studio is worth much more than offered.</p></span>
						</div>
					</div>
		 </div>`,


		 `<div class="photo_text"><img src="/img/Photo/photo_clients/Img-2.png" alt="#">
		 <div class="container_rating">
			 <span>Shanai Haas</span>
			 <div class="rating_block">
				 <div class="rating_items">
					 <input name="rating" value="5" id="rating_5" type="radio" class="rating_item">
					 <label for="rating_5" class="rating_label"></label>

					 <input class="rating_item" name="rating" value="4" id="raiting_4" type="radio">
									<label for="rating_4" class="rating_label"></label>

					 <input class="rating_item" name="rating" value="3" id="rating_3" type="radio">
					 <label for="rating_3" class="rating_label"></label>

					 <input class="rating_item" name="rating" value="2" id="rating_2" type="radio">
					 <label for="rating_2" class="rating_label"></label>

					 <input class="rating_item" name="rating" value="1" id="rating_1" type="radio">
					 <label for="rating_1" class="rating_label"></label>
				 </div>
			 </div>
			 
		 </div>
		 <div class="photo_text_subtitle">
		 <span>Studio saved my job interview. Keep up with
		 <p>the excellent work!</p></span>
		 </div></div>`,


		 `<div class="photo_text"><img src="/img/Photo/photo_clients/Img.png" alt="#">
		 <div class="container_rating">
			 <span>Andrea Mcconnell</span>
			 <div class="rating_block">
				 <div class="rating_items">
					 <input name="rating" value="5" id="rating_5" type="radio" class="rating_item">
					 <label for="rating_5" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="4" id="raiting_4" type="radio">
									<label for="rating_4" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="3" id="rating_3" type="radio">
					 <label for="rating_3" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="2" id="rating_2" type="radio">
					 <label for="rating_2" class="rating_label"></label>
					 <input class="rating_item" name="rating" value="1" id="rating_1" type="radio">
					 <label for="rating_1" class="rating_label"></label>
				 </div>
			 </div>
		 </div>
		
		 <div class="photo_text_subtitle">
		 
		 <span>Studio is exactly what our business has been
		 <p>lacking. I will recommend them to everyone.</p></span>
		 </div>
	 </div>`
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.container_clients_photo');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 500) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
			  if (window.innerWidth > 900) {
					const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
					slidesContainer.innerHTML += slides[slide3Idx];    
			  }
		 }
	}

	function nextSlide() {
		 currentSlideIdx++;
		 if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
		 renderSlides();
	}

	function prevSlide() {
		 currentSlideIdx--;
		 if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
		 renderSlides();
	}

	setInterval(nextSlide, 100000);
	document.querySelector('.button_prev').addEventListener('click', prevSlide);
	document.querySelector('.button_next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();
