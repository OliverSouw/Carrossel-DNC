var itens = [
    {
        title: "Scooter Elétroca Voltz EV1",
        description: `O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior 
        confiança e performance na pilotagem, tornando as subidas de marcha mais leves 
        e as reduções mais suaves!`,
        image: "./assets/img/moto1.png"
    },
    {
        title: "Honda CB 500X",
        description: `O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na 
        pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!`,
        image: "./assets/img/moto2.svg"
    },
    {
        title: "Honda PCX",
        description: `Com linhas mais marcantes, a nova PCX apresenta um design 
        imponente, arrojado e cheio de estilo. Tudo isso com um 
        acabamento de alta qualidade para você marcar presença onde estiver.`,
        image: "./assets/img/moto3.png"
    },
    {
        title: "Honda CBR 1000",
        description: `Completamente renovada em relação à sua antecessora, essa nova 
        superesportiva foi construída com foco absoluto na pilotagem em circuitos e 
        pistas de corrida, atingindo níveis de performance e controle sem precedentes 
        para um modelo de rua.`,
        image: "./assets/img/moto4.png"
    } 
];

var modal = document.querySelector('.modal');
var list = document.querySelectorAll('.cards');
var btnPrevius = document.querySelector('.btn-img-previus');
var btnNext = document.querySelector('.btn-img-next');
var showBtn = document.querySelector('.show-img-btn');
var circleActived = document.querySelectorAll('.section-circle')

var index = 0;

function show(indexBtn) {

    circleActived[index].classList.remove('circle-actived');

    index += indexBtn;
    circleActived[index].classList.add('circle-actived');
    index = Math.min(Math.max(index, 0), list.length - 1);
    list[index].scrollIntoView({ behavior: "smooth" }); 

    if (index == 0) {
        btnPrevius.classList.add('show-img-btn');
        btnNext.classList.remove('show-img-btn');
        circleActived[0].classList.add('circle-actived');
    } else if ((index > 0) && (index < list.length - 1)) {
        btnPrevius.classList.remove('show-img-btn');
        btnNext.classList.remove('show-img-btn');
    } else if (index == list.length - 1) {
        btnPrevius.classList.remove('show-img-btn');
        btnNext.classList.add('show-img-btn');
        circleActived[list.length - 1].classList.add('circle-actived');
    } else {
        return false;
    }

}

function changeModal(modalOpen) {

    if (modalOpen == 0) {
        modal.style.visibility = 'visible';
        modalOpen = 1;
        modal.innerHTML = `
            <div class="card-modal">
            <button onclick="changeModal(1)" class="img-close-modal" href="">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 class="modal-title">${itens[index].title}</h2>
            <p class="modal-text">${itens[index].description}</p>
            <img class="modal-item-img" src="${itens[index].image}" alt="">
            <button class="btn-modal" href="">Quero Assinar!</button>
        `
    } else if (modalOpen == 1) {
        modal.style.visibility = 'hidden';
        modalOpen = 0;
    }

}