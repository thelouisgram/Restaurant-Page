import './style.css';
import myLogo from './logo-li.png'
import picture from './home-img.png'


const content = document.querySelector('#content')


function renderHeader(){    
    
    let header = document.createElement('header')

    let logo = new Image();
    logo.src = myLogo;
    logo.classList.add('logo')

    let headerUl = document.createElement('ul')
    
    let homeBtn = document.createElement('li')
    homeBtn.textContent = 'Home'

    let aboutBtn = document.createElement('li')
    aboutBtn.textContent = 'About'

    let menuBtn = document.createElement('li')
    menuBtn.textContent = 'Menu'

    headerUl.appendChild(homeBtn)
    headerUl.appendChild(menuBtn)
    headerUl.appendChild(aboutBtn)
    header.appendChild(logo)
    header.appendChild(headerUl)
    content.appendChild(header)
}

renderHeader()

function renderHome(){
    let home = document.createElement('section')
    home.classList.add('home')

    let rightSide = document.createElement('div')
    rightSide.classList.add('right-side')

    let rightSideDiv = document.createElement('div')


    let welcome = document.createElement('h1')
    welcome.innerText = 'The Best Restaurants In Your Home'
    welcome.classList.add('main-text')

    let pWelcome = document.createElement('p')
    pWelcome.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

    let mainBtn = document.createElement('button')
    mainBtn.innerText = 'EXPLORE'

    let leftSide = document.createElement('div')
    leftSide.classList.add('left-side')

    let mainPic = new Image();
    mainPic.src = picture


    rightSideDiv.appendChild(welcome)
    rightSideDiv.appendChild(pWelcome)
    rightSideDiv.appendChild(mainBtn)
    rightSide.appendChild(rightSideDiv)
    leftSide.appendChild(mainPic)
    home.appendChild(rightSide)
    home.appendChild(leftSide)
    content.appendChild(home)
}

renderHome()