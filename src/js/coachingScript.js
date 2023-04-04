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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 4,
      pagination:false
    },
  },
});


const priceBlock = document.querySelectorAll(".price-res");

priceBlock.forEach(item => {
    item.addEventListener("click", function() {
        item.classList.toggle("active");
    });
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
        if(window.innerWidth < 1024) {
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

const selectSingle = document.querySelector('.price-select');

if(selectSingle) {
  const selectSingle_title = selectSingle.querySelector('.price-select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.price-select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  openSelect();
});

function openSelect() {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
};

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

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

