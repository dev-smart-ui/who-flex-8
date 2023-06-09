// About section
const aboutKeyword = document.querySelectorAll(".about-card__item");

aboutKeyword.forEach(item => {
    item.addEventListener("click", function() {
       item.classList.toggle('active');
    });
});

const aboutTabItem = document.querySelectorAll(".about-tab__item");
const aboutTabContent = document.querySelectorAll(".tab-content");

aboutTabItem.forEach(item => {
    item.addEventListener("click", function() {
        aboutTabItem.forEach(btn => {
            btn.classList.remove('active');
        });
       item.classList.add('active');

        aboutTabContent.forEach(btn => {
            btn.classList.remove('active');
        });

    
       let btnAtr =  item.getAttribute('id');
       document.querySelector("."+btnAtr).classList.add('active');
    });
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    992: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".related-slider-button-next",
        prevEl: ".related-slider-button-prev",
      },
    },
    1200: {
      slidesPerView: 4,
      navigation: {
        nextEl: ".related-slider-button-next",
        prevEl: ".related-slider-button-prev",
      },
    },
  },
});


// video


function video() {
  const video = document.getElementById("video");
  const aboutSection = document.getElementById("about");
  const videoBlock = document.getElementById('videoBlock');

  if(video) {
    window.addEventListener('resize', function() {
      toggleVideo();
    }); 
  
    function toggleVideo() {
        if(window.innerWidth < 992) {
          aboutSection.after(video);
        } else {
          videoBlock.append(video);
        }
    }toggleVideo();
  }


} video();


function croppingTitle() {
  const text = document.querySelectorAll(".related-card__title");

  if(text) {
    if(window.innerWidth < 577) {
      text.forEach(item => {
        let text = item.textContent;
        text = text.substring(0, 25);
        console.log(text);
        item.innerHTML = text+"...";
      });
    }
  }

} croppingTitle();


// select

const selectSingle = document.querySelectorAll('.price-select');

if(selectSingle) {
  selectSingle.forEach(item => {

    const selectBtn = item.querySelector('.price-select__btn');
    const selectSingleTitle = item.querySelector('.price-select__title');
    const selectSingleLabels = item.querySelectorAll('.price-select__label');
  
  // Toggle menu
  selectSingleTitle.addEventListener('click', openSelect);
  
  selectBtn.addEventListener('click', openSelect);
  
  function openSelect() {
    if ('active' === item.getAttribute('data-state')) {
      item.setAttribute('data-state', '');
    } else {
      item.setAttribute('data-state', 'active');
    }
  };
  
  // Close when click to option
  for (let i = 0; i < selectSingleLabels.length; i++) {
    selectSingleLabels[i].addEventListener('click', (evt) => {
      selectSingleTitle.textContent = evt.target.textContent;
      item.setAttribute('data-state', '');
    });
  }
  
   
});

 
}


// reservation

const tabs = document.querySelectorAll(".reservationTabBtn");
const contents = document.querySelectorAll(".reservationTabContent");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("active");
		}
		tabs[i].classList.add("active");
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("active");
		}
		contents[i].classList.add("active");
	});
}


function reservationBtn() {
  const reservationBtn = document.querySelectorAll('.wrap-top-res button') 
  reservationBtn.forEach(btn => {
      btn.addEventListener('click', function(){
          btn.classList.toggle('active');
      })
  });
}reservationBtn();


const openBtn = document.querySelector('.openBuyCard');
const closeBtn = document.querySelector('.closeBuyCard');
const buyCard = document.querySelector('#buyCard');

if(buyCard) {
  function openBuyCard() {
    buyCard.classList.add('active');
  }
  
  function closeBuyCard() {
    buyCard.classList.remove('active');
  }
  
  
  openBtn.addEventListener('click', (event) => {
    openBuyCard();
    event.stopPropagation();
  });
  closeBtn.addEventListener('click', closeBuyCard);
  document.querySelector('.buyCard-close').addEventListener('click', closeBuyCard);
  
}
