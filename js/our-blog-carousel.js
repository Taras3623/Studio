(function() {
	const slides = [
		 
		`<div class="our-blog__column">
		<div class="item-our-blog">
			<div class="item-our-blog__img"><img src="/img/Photo/Our/Img-1.png" alt="#"></div>
			<div class="item-our-blog__title">all about headshots inside professional studios</div>
			<div class="item-our-blog__text"> 
				<div class="item-our-blog-text__comments"><span><a href="#">Comments</a></span></div>
				<div class="item-our-blog-text__date"><span>August, 2022</span></div>
			</div>
		</div>
		
	</div>`,


		`<div class="our-blog__column">
		<div class="item-our-blog">
			<div class="item-our-blog__img"><img src="/img/Photo/Our/Img-2.png" alt="#"></div>
			<div class="item-our-blog__title title">How do professionals edit
				their photos and What photo editing software they use</div>
			<div class="item-our-blog__text"> 
				<div class="item-our-blog-text__comments"><span><a href="#">Comments</a></span></div>
				<div class="item-our-blog-text__date"><span>August, 2022</span></div>
			</div>
		</div>
	</div>`,


		`<div class="our-blog__column">
		<div class="item-our-blog">
		<div class="item-our-blog__img"><img src="/img/Photo/Our/Img-3.png" alt="#"></div>
		<div class="item-our-blog__title">best Courses In Photography
			from home</div>
		<div class="item-our-blog__text"> 
			<div class="item-our-blog-text__comments"><span><a href="#">Comments</a></span></div>
			<div class="item-our-blog-text__date"><span>August, 2022</span></div>
		</div>
	</div>
	</div>`

		
		
		
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.our-blog__row');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 800) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
			  if (window.innerWidth > 1340) {
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
	document.querySelector('#prew').addEventListener('click', prevSlide);
	document.querySelector('#next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();
