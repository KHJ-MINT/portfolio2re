//변수 선언
const header = document.querySelector('header');
const logo = document.querySelector('.logo');

const menuList = document.querySelectorAll('nav .mainNavList');
const subMenu = document.querySelectorAll('nav .subMenu');
const goTop = document.querySelector('.goTop');

const visualImgWrap = document.querySelector('.imgWrap');
const visualImg = document.querySelector('.imgDiv');
const visualIndi = document.querySelectorAll('.btnList span');

const mNav = document.querySelector('.mNav');
const leftNav = document.querySelector('.leftNav');
const leftNavClose = document.querySelector('.navClose');




//동작 구현

//일정 이상 아래로 스크롤시 header, .logo에 클래스 on
//일정 이상 아래로 스크롤시 .goTop에 클래스 on
addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop;
    //console.log(scrollTop);
    if (scrollTop >= 250) {
        header.classList.add('on');
        logo.classList.add('on');
        goTop.classList.add('on');
    } else {
        header.classList.remove('on');
        logo.classList.remove('on');
        goTop.classList.remove('on');
    }
})

//.goTop클릭시 최상단으로 이동
goTop.addEventListener('click', function () {
    window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0
    })
})

//screen width 1024px 이하일 때 나타나는 mNav를 클릭하면 leftNav의 left 값 0
mNav.addEventListener('click', function () {
    leftNav.style.left = 0;
})
//navClose를 클릭하면 leftNav의 left값 -100%
leftNavClose.addEventListener('click', function () {
    leftNav.style.left = '-100%';
})

//navDown을 클릭하면 class on 추가, subMenu에 class on 추가
const mainMenuBtn = document.querySelector('.mainMenu');
const storeMenuBtn = document.querySelector('.storeMenu');
const serviceMenuBtn = document.querySelector('.serviceMenu');
const commuMenuBtn = document.querySelector('.commuMenu');
const brandMenuBtn = document.querySelector('.brandMenu');

const storeSub = document.querySelector('.store');
const serviceSub = document.querySelector('.service');
const communitySub = document.querySelector('.community');
const brandSub = document.querySelector('.brand');

const leftMenuTit = document.querySelector('.leftMenuTit');
const leftStoreTit = document.querySelector('.leftStoreTit');
const leftServiceTit = document.querySelector('.leftServiceTit');
const leftCommuTit = document.querySelector('.leftCommuTit');
const leftBrandTit = document.querySelector('.leftBrandTit');

mainMenuBtn.addEventListener('click', function () {
    mainMenuBtn.classList.toggle('on');
    document.querySelector('.menu').classList.toggle('on');
    leftMenuTit.classList.toggle('on');
})

storeMenuBtn.addEventListener('click', function () {
    storeMenuBtn.classList.toggle('on');
    storeSub.classList.toggle('on');
    leftStoreTit.classList.toggle('on');
})

serviceMenuBtn.addEventListener('click', function () {
    serviceMenuBtn.classList.toggle('on');
    serviceSub.classList.toggle('on');
    leftServiceTit.classList.toggle('on');
})

commuMenuBtn.addEventListener('click', function () {
    commuMenuBtn.classList.toggle('on');
    communitySub.classList.toggle('on');
    leftCommuTit.classList.toggle('on');
})

brandMenuBtn.addEventListener('click', function () {
    brandMenuBtn.classList.toggle('on');
    brandSub.classList.toggle('on');
    leftBrandTit.classList.toggle('on');
})

const commuSubTit1 = document.querySelector('.commuSubTit1');
const commuSubTit2 = document.querySelector('.commuSubTit2');
const commuSubTit3 = document.querySelector('.commuSubTit3');

const cummuSub1 = document.querySelector('.cummuSub1');
const cummuSub2 = document.querySelector('.cummuSub2');
const cummuSub3 = document.querySelector('.cummuSub3');

commuSubTit1.addEventListener('click', function () {
    commuSubTit1.classList.toggle('on');
    cummuSub1.classList.toggle('on');
    communitySub.classList.toggle('open1');
})
commuSubTit2.addEventListener('click', function () {
    commuSubTit2.classList.toggle('on');
    cummuSub2.classList.toggle('on');
    communitySub.classList.toggle('open2');
})
commuSubTit3.addEventListener('click', function () {
    communitySub.classList.toggle('open3');
    commuSubTit3.classList.toggle('on');
    cummuSub3.classList.toggle('on');
})

const brandSubTit = document.querySelector('.brandSubTit');
const brandSubMenu = document.querySelector('.brandSub');
brandSubTit.addEventListener('click', function () {
    brandSubTit.classList.toggle('on');
    brandSub.classList.toggle('open');
    brandSubMenu.classList.toggle('on');
})

//screen width 768px 이하일 때(디바이스 너비 체크) img src를 img/banner/m-visual01~11.jpg로 변경
window.addEventListener('load', imgChange);
window.addEventListener('resize', imgChange);

let computerFade;
let mobileFade;
let visualImgs;
let visualImgs2;

function imgChange() {
    console.log('체크');
    visualImgWrap.innerHTML = null;
    let screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        visualImgWrap.innerHTML = `
        <li class="imgList">
        <a href="#">
            <div class="imgDiv on"><img src="img/banner/m-visual01.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual02.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual03.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual04.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual05.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual06.png" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual07.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual08.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual09.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual10.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/m-visual11.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
        `;
        visualImgs = document.querySelectorAll('.imgList');
        //console.log(visualImgs);
        computerVisualStop()
        mobileVisual();


    } else if (screenWidth >= 769) {
        clearInterval(mobileFade);
        mobileFade = null;
        visualImgWrap.innerHTML = `
        <li class="imgList2 on">
        <a href="#">
            <div class="imgDiv on"><img src="img/banner/visual01.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual02.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual03.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual04.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual05.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual06.png" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual07.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual08.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual09.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual10.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
    <li class="imgList2">
        <a href="#">
            <div class="imgDiv"><img src="img/banner/visual11.jpg" alt="비주얼이미지"></div>
        </a>
    </li>
        `;
        visualImgs2 = document.querySelectorAll('.imgList2');
        //console.log(visualImgs2);
        WebVisual();
    }
    console.log('모바일', mobileFade);
    console.log('웹', computerFade);

}
let isRunning = true;

//메인 비주얼 영역의 img는 일정 시간이 지날 때마다 순차적으로 클래스 on이 붙는다.
//.btnList의 span은 img의 순서에 따라 클래스 on이 붙는다.

//이미지 순번에 따라 .visualListNum의 글자 변경
const visualListNum = document.querySelector('.visualListNum');

let currentIndex = 0;
let currentIndex2 = 0;

function mobileVisual() {
    if (mobileFade == null) {
        showVisual(0);
        mobileShowVisual();
        currentIndex = 0;
    }
}

function WebVisual() {
    if (computerFade == null) {
        showVisual2(0);
        computerShowVisual();
        currentIndex = 0;
    }
}

//모바일 화면 메인 비주얼
function showVisual(index) {
    visualImgs.forEach((item) => {
        item.classList.remove('on')
    })
    //console.log(visualImgs);
    visualImgs[index].classList.add('on');
    visualIndi.forEach((item) => {
        item.classList.remove('on')
    })
    visualIndi[index].classList.add('on');
    //console.log(visualImgs[index]);
}
function mobileShowFade() {
    currentIndex++;
    let result = currentIndex % visualImgs.length;
    showVisual(result);
    //console.log('계속');
}
function mobileShowVisual() {
    if (mobileFade == null) {
        mobileFade = setInterval(mobileShowFade, 2000)
    }
}
//모바일 화면 메인 비주얼

//웹 화면 메인 비주얼
function showVisual2(index) {
    //console.log('여기에요');
    //console.log(visualImgs2);
    visualImgs2.forEach((item) => {
        item.classList.remove('on')
    })

    visualImgs2[index].classList.add('on');
    visualIndi.forEach((item) => {
        item.classList.remove('on')
    })
    visualIndi[index].classList.add('on');
    visualListNum.innerHTML = `${index + 1}/${visualImgs2.length}`;
    //console.log(visualImgs[index]);
}
function computerShowFade() {
    currentIndex2++;
    //console.log(visualImgs2);
    let result = currentIndex2 % visualImgs2.length;
    showVisual2(result);
    //console.log(result, currentIndex2)
}
function computerShowVisual() {
    if (computerFade == null) {
        computerFade = setInterval(computerShowFade, 2000)
    }
}
//웹 화면 메인 비주얼

//자동 재생 멈춤
//모바일
function mobileVisualStop() {
    clearInterval(mobileFade);
}
//웹
function computerVisualStop() {
    clearInterval(computerFade);
    computerFade = null;
}

//메인비주얼의 일시정지/재생 아이콘 클릭시 메인비주얼 움직임 제어
const pauseBtn = document.querySelector('.visualPause');
const arrowBtn = document.querySelector('.visualArrow');
pauseBtn.addEventListener('click', stopVisual);
arrowBtn.addEventListener('click', startVisual);

function stopVisual() {
    if (pauseBtn.classList.contains('on')) {
        mobileVisualStop();
        computerVisualStop();
        console.log('있음')
    } else {
        imgChange();
        console.log('없음')
    }
}

function startVisual() {
    if (arrowBtn.classList.contains('on')) {
        imgChange();
        console.log('있음')
    } else {
        mobileVisualStop();
        computerVisualStop();
        console.log('없음')
    }
}

//.pause를 클릭하면 pause 아이콘의 클래스 on이 사라지고 play_arrow 아이콘에 클래스 on이 붙는다.
const visualPauseDiv = document.querySelector('.visualPauseDiv');
const visualPauseDivArr = Array.from(visualPauseDiv.children);
visualPauseDivArr.forEach(item => {
    item.addEventListener('click', function () {
        //비주얼
        let clickTarget = document.querySelector('.visualPause');
        let clickTargetNext = document.querySelector('.visualArrow');
        clickTarget.classList.toggle('on');
        clickTargetNext.classList.toggle('on');
    })
})

const menuPauseDiv = document.querySelector('.menuPauseDiv');
const menuPauseDivArr = Array.from(menuPauseDiv.children);
menuPauseDivArr.forEach(item => {
    item.addEventListener('click', function () {
        //메뉴
        let clickMenu = document.querySelector('.menuPause');
        let clickMenuNext = document.querySelector('.menuArrow');
        console.log(clickMenu, clickMenuNext);
        clickMenu.classList.toggle('on');
        clickMenuNext.classList.toggle('on');
        if (clickMenu.classList.contains('on')) {
            autoMenuSlide();
            console.log('있음')
        } else {

            stopMenuSlide();
            console.log('없음')
        }
        if (clickMenuNext.classList.contains('on')) {

            stopMenuSlide();
            console.log('있음')
        } else {
            autoMenuSlide();
            console.log('없음')
        }
    })
})

const proPauseDiv = document.querySelector('.proPauseDiv');
const proPauseDivArr = Array.from(proPauseDiv.children);
proPauseDivArr.forEach(item => {
    item.addEventListener('click', function () {
        //상품
        let clickPro = document.querySelector('.proPause');
        let clickProNext = document.querySelector('.proArrow');
        console.log(clickPro, clickProNext);
        clickPro.classList.toggle('on');
        clickProNext.classList.toggle('on');
        if (clickPro.classList.contains('on')) {
            autoProductSlide()
            console.log('있음')
        } else {

            stopProductSlide()
            console.log('없음')
        }
        if (clickProNext.classList.contains('on')) {

            stopProductSlide()
            console.log('있음')
        } else {
            autoProductSlide()
            console.log('없음')
        }
    })
})

//메뉴, 상품 페이지 인디게이터
const menuListLi = document.querySelectorAll('.menuListWrap li');
const productList = document.querySelectorAll('.productListWrap li');


const menuIndiBtn = document.querySelectorAll('.menuIndiBtn span');
const proIndiBtn = document.querySelectorAll('.proIndiBtn span');
const menuListNum = document.querySelector('.menuListNum');
const proListNum = document.querySelector('.proListNum');

let listIndex = 0;
let listIndex2 = 0;
let menuIndiTimer = undefined;
let productIndiTimer = undefined;

function menuIndi(index) {
    menuIndiBtn.forEach(function (item) {
        //console.log(item, index);
        item.classList.remove('on');
    })
    menuIndiBtn[index].classList.add('on');
    menuListNum.innerHTML = `${index + 1}/${menuListLi.length}`
}
function proIndi(index) {
    proIndiBtn.forEach(function (item) {
        //console.log(item, index);
        item.classList.remove('on');
    })
    proIndiBtn[index].classList.add('on');
    proListNum.innerHTML = `${index + 1}/${productList.length}`
}

function autoMenuIndi() {
    if (menuIndiTimer == undefined) {
        menuIndiTimer = setInterval(function () {
            if (listIndex === menuListLi.length) {
                listIndex = 0;
            } else {
                listIndex++;
            }
            let resultMenu = listIndex % menuListLi.length;
            menuIndi(resultMenu);
        }, 2000);
    }
}
function autoProductIndi() {
    if (productIndiTimer == undefined) {
        productIndiTimer = setInterval(function () {
            if (listIndex2 === productList.length) {
                listIndex2 = 0;
            } else {
                listIndex2++;
            }
            let resultPro = listIndex2 % productList.length;
            proIndi(resultPro);
        }, 2000)
    }
}



//슬라이더(0.2초마다 움직임)
//메뉴 슬라이더

//메뉴를 감싸는 ul
const menuImgList = document.querySelector('.menuListWrap');
const productImgList = document.querySelector('.productListWrap');

//이전, 다음 버튼
//메뉴
const menuPrev = document.querySelector('.menuPrevIcon');
const menuNext = document.querySelector('.menuNextIcon');
//상품
const productPrev = document.querySelector('.productPrevIcon');
const productNext = document.querySelector('.productNextIcon');

//ul 안의 li
const menuLists = document.querySelectorAll('.menuList');
const productLists = document.querySelectorAll('.productList');

//웹 사이즈의 메뉴와 상품 li의 너비
let listWidth;

window.addEventListener('load', function () {
    listWidth = menuLists[1].clientWidth;
    makeClone();
    autoMenuSlide();
    autoProductSlide();
});
window.addEventListener('resize', function () {
    listWidth = menuLists[1].clientWidth;
    makeClone();
    autoMenuSlide();
    autoProductSlide();
});

//슬라이드 리스트 갯수
const menuCount = menuLists.length;
const productCount = productLists.length;

//마지막 메뉴 번호
let lastMenuNum = menuLists.length - 1;
let lastProNum = productLists.length - 1;

let menuCurrent = 1;
let productCurrent = 1;



//노드 복사
function makeClone() {
    for (let i = 0; i < menuCount; i++) {
        let menuClones = menuLists[i].cloneNode(true);
        menuImgList.appendChild(menuClones);
    }
    for (let i = menuCount - 1; i >= 0; i--) {
        let menuClones = menuLists[i].cloneNode(true);
        menuImgList.prepend(menuClones);
    }
    for (let i = 0; i < productCount; i++) {
        let productClones = productLists[i].cloneNode(true);
        productImgList.appendChild(productClones);
    }
    for (let i = productCount - 1; i >= 0; i--) {
        let productClones = productLists[i].cloneNode(true);
        productImgList.prepend(productClones);
    }
    updateWidth();
}

//ul의 너비와 left 값 변경
function updateWidth() {
    //let currentSlides = document.querySelectorAll('.menuList');
    //let newSlideCount = currentSlides.length;

    let newMenuWidth = (menuLists.length) * listWidth + 'px';
    let newProductWidth = (productLists.length) * listWidth + 'px';
    menuImgList.style.width = newMenuWidth;
    productImgList.style.width = newProductWidth;
}

function setPosition() {
    let menuTranslate = -(menuCurrent * listWidth) + 'ps';
    menuImgList.style.transform = `translateX(${menuTranslate}px)`;
    let productTranslate = -(productCurrent * listWidth) + 'px';
    productImgList.style.transform = `translateX(${productTranslate}px)`;
}

menuPrev.addEventListener('click', function () {
    menuSlideMove(menuCurrent - 1);
})
menuNext.addEventListener('click', function () {
    menuSlideMove(menuCurrent + 1)
})

productPrev.addEventListener('click', function () {
    productSlideMove(productCurrent - 1)
})
productNext.addEventListener('click', function () {
    productSlideMove(productCurrent + 1)
})

let menuTimer = undefined;
let productTimer = undefined;

function autoMenuSlide() {
    if (menuTimer == undefined) {
        menuTimer = setInterval(function () {
            menuSlideMove(menuCurrent + 1)
        }, 2000)
        autoMenuIndi()
    }

}
function autoProductSlide() {
    if (productTimer == undefined) {
        productTimer = setInterval(function () {
            productSlideMove(productCurrent + 1)
        }, 2000)
        autoProductIndi()
    }
}


function stopMenuSlide() {
    clearInterval(menuTimer);
    clearInterval(menuIndiTimer)
    menuTimer = undefined;
    menuIndiTimer = undefined;
}
function stopProductSlide() {
    clearInterval(productTimer);
    clearInterval(productIndiTimer);
    productTimer = undefined;
    productIndiTimer = undefined;
}

menuImgList.addEventListener('mouseenter', function () {
    stopMenuSlide()
})
menuImgList.addEventListener('mouseleave', function () {
    autoMenuSlide()
})
productImgList.addEventListener('mouseenter', function () {
    stopProductSlide()
})
productImgList.addEventListener('mouseleave', function () {
    autoProductSlide()
})


function menuSlideMove(imgNum) {
    menuImgList.style.left = -(imgNum * listWidth) + 'px';
    menuCurrent = imgNum;
    //console.log(menuCurrent,menuCount);
    if (menuCurrent == menuCount || menuCurrent == -menuCount) {
        setTimeout(function () {
            menuImgList.style.transition = '0s';
            menuImgList.style.left = '0px';
            menuCurrent = 0;
        }, 100);
        setTimeout(function () {
            menuImgList.style.transition = 0.2 + 's';
        }, 200)
    }
}

function productSlideMove(imgNum) {
    productImgList.style.left = -(imgNum * listWidth) + 'px';
    productCurrent = imgNum;
    //console.log(productCurrent, productCount);
    if (menuCurrent == productCount || productCurrent == -productCount) {
        setTimeout(function () {
            productImgList.style.transition = '0s';
            productImgList.style.left = `-${listWidth}px`;
            productCurrent = 0;
        }, 100);
        setTimeout(function () {
            productImgList.style.transition = 0.2 + 's';
        }, 200)
    }
}

//일정 시간마다 .noticeTop은 top값이 0 -> -30px이 되고,
//.noticeDown의 top값은 0 -> -30px이 된다.
//일정 시간마다 .noticeTop과 .noticeDown에 클래스 up
const noticeTop = document.querySelector('.noticeTop');
const noticeDown = document.querySelector('.noticeDown');

let noticeTimer;

autoNotice();
function autoNotice() {
    noticeTimer = setInterval(noticeMove, 3000);
}

function noticeMove() {
    noticeTop.classList.toggle('up');
    noticeDown.classList.toggle('up');
}

//각 섹션에 도달하면 페이드인 효과(페이드 아웃 없음)
const menuSection = document.querySelector('#menu');
const brandSection = document.querySelector('#joinUs');
const brandSectionIn = document.querySelector('.joinWrap');
const productSection = document.querySelector('#products');
const snsSection = document.querySelector('#snsImg');

addEventListener('scroll', function () {
    let menuSecTop = menuSection.offsetTop;
    let brandSecTop = brandSection.offsetTop;
    let productSecTop = productSection.offsetTop;
    let snsSecTop = snsSection.offsetTop;
    let sct = document.documentElement.scrollTop;
    console.log(sct, menuSecTop, brandSecTop, productSecTop, snsSecTop)
    if (sct >= (menuSecTop - 420)) {
        menuSection.classList.add('fadeIn');
    }
    if (sct >= (brandSecTop - 500)) {
        brandSectionIn.classList.add('fadeIn');
    }
    if (sct >= (productSecTop - 400)) {
        productSection.classList.add('fadeIn');
    }
    if (sct >= (snsSecTop - 400)) {
        snsSection.classList.add('fadeIn');
    }
})