

(function() {
	const slides = [
		 
		`<img src="/img/Photo/01.png" alt="#">`,


		`<img src="/img/Photo/02.png" alt="#">`,


		`<img src="/img/Photo/04.png" alt="#">`,

		
		`<img src="/img/Photo/03.png" alt="#">`
		
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.container_photo_block_one');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 500) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
			  if (window.innerWidth > 500) {
					const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
					slidesContainer.innerHTML += slides[slide3Idx];    
			 }
			 
			 if (window.innerWidth > 500) {
				const slide4Idx = slide2Idx + 2 >= slides.length ? 0 : slide2Idx + 2;
				slidesContainer.innerHTML += slides[slide4Idx];    
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
	document.querySelector('.prew').addEventListener('click', prevSlide);
	document.querySelector('.next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();




////////



(function() {
	const slides = [
		 
		`<img src="/img/Photo/01.png" alt="#">`,


		`<img src="/img/Photo/02.png" alt="#">`,


		`<img src="/img/Photo/04.png" alt="#">`,

		
		`<img src="/img/Photo/03.png" alt="#">`
		
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.container_photo_block_adaptive');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 700) {
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
	document.querySelector('.container_block_arrow').addEventListener('click', prevSlide);
	document.querySelector('.container_block_arrow_two').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();











