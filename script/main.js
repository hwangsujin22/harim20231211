// 외부 스크립트

$(document).ready(function(){

  // 좌우 드래그 스크롤---------------------------------------------------------------
  // 요소, 사이즈
  // const list = document.querySelector('.product');
  // const listScrollWidth = list.scrollWidth;
  // const listClientWidth = list.clientWidth;

  // // 이벤트마다 갱신될 값
  // let startX = 0;
  // let nowX = 0;
  // let endX = 0;
  // let listX = 0;

  // const onScrollStart = (e) => {
  //   startX = getClientX(e);
  //   window.addEventListener('mousemove', onScrollMove);
  //   window.addEventListener('touchmove', onScrollMove);
  //   window.addEventListener('mouseup', onScrollEnd);
  //   window.addEventListener('touchend', onScrollEnd);
  // };
  // const onScrollMove = (e) => {
  //   nowX = getClientX(e);
  //   setTranslateX(listX + nowX - startX);
  // };
  // const onScrollEnd = (e) => {
  //   endX = getClientX(e);
  //   listX = getTranslateX();
  //   if (listX > 0) {
  //     setTranslateX(0);
  //     list.style.transition = `all 0.3s ease`;
  //     listX = 0;
  //   } else if (listX < listClientWidth - listScrollWidth) {
  //     setTranslateX(listClientWidth - listScrollWidth);
  //     list.style.transition = `all 0.3s ease`;
  //     listX = listClientWidth - listScrollWidth;
  //   }
  
  //   window.removeEventListener('mousedown', onScrollStart);
  //   window.removeEventListener('touchstart', onScrollStart);
  //   window.removeEventListener('mousemove', onScrollMove);
  //   window.removeEventListener('touchmove', onScrollMove);
  //   window.removeEventListener('mouseup', onScrollEnd);
  //   window.removeEventListener('touchend', onScrollEnd);
  //   window.removeEventListener('click', onClick);
  
  //   setTimeout(() => {
  //     bindEvents();
  //     list.style.transition = '';
  //   }, 300);
  // };
  // const onClick = (e) => {
  //   if (startX - endX !== 0) {
  //     e.preventDefault();
  //   }
  // };

  // const getClientX = (e) => {
  //   const isTouches = e.touches ? true : false;
  //   return isTouches ? e.touches[0].clientX : e.clientX;
  // };
  // const getTranslateX = () => {
  //   return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
  // };
  // const setTranslateX = (x) => {
  //   list.style.transform = `translateX(${x}px)`;
  // };

  // const bindEvents = () => {
  //   list.addEventListener('mousedown', onScrollStart);
  //   list.addEventListener('touchstart', onScrollStart);
  //   list.addEventListener('click', onClick);
  // };
  // bindEvents();

  var product_list = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

});