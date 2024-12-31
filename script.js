const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('#dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        mybutton.classList.add("show"); 
    } else {
        mybutton.classList.remove("show"); 
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


const skillBars = document.querySelectorAll('.skills');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}


function handleScroll() {
    skillBars.forEach(skill => {
        if (isInViewport(skill)) {
            skill.style.width = skill.dataset.width; 
        }
    });
}


skillBars.forEach(skill => {
    const width = skill.classList.contains('html') ? '60%' :
                  skill.classList.contains('css') ? '30%' :
                  skill.classList.contains('js') ? '10%' :
                  skill.classList.contains('python') ? '20%' :
                  skill.classList.contains('java') ? '65%' :
                  skill.classList.contains('sql') ? '40%' : '0%';
    skill.dataset.width = width; 
    skill.style.width = '0'; 
});


window.addEventListener('scroll', handleScroll);
