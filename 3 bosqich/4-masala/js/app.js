const btnTab = document.querySelector('.btnTab')
const menu1 = document.querySelector('.wrap-menu')
const menubtn1 = document.querySelector('.wrap-menu__btn')
const btnTab1 = document.querySelector('.btnTab1')
const menu2 = document.querySelector('.wrap-menu-1')
const menubtn2 = document.querySelector('.wrap-menu__btn-1')
const bg = document.querySelector('.bg')




btnTab.addEventListener('click', function(){
    btnTab.classList.remove('active');
    btnTab.classList.add('active');
    menu1.classList.add('active');
    bg.classList.add('active');
});



menubtn1.addEventListener('click', function(){
    menu1.classList.remove('active')
    btnTab.classList.remove('active')
    bg.classList.remove('active');
});




btnTab1.addEventListener('click', function(){
    btnTab1.classList.remove('active');
    btnTab1.classList.add('active');
    menu2.classList.add('active');
    bg.classList.add('active');
});

menubtn2.addEventListener('click', function(){
    menu2.classList.remove('active')
    btnTab1.classList.remove('active')
    bg.classList.remove('active');
});

bg.addEventListener('click', function(){
    bg.classList.remove('active')
    btnTab.classList.remove('active')
    btnTab1.classList.remove('active')
    menu1.classList.remove('active')
    menu2.classList.remove('active')
})