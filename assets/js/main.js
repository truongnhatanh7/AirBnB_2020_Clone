let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let navbar = $('.navbar');
navbar.addEventListener('click', () => {
    console.log("yes")
})

let navbarScrollStyle = `
    .navbar {
        background-color: white;
        color: black;
    }

    .navbar__logo {
        color: #ff395c;
    }

    .navbar__globe_svg {
        color: black;
    }

    .navbar__item-link {
        color: black;
    }

    .navbar__search-wrapper {
        transform: translateY(-80px) scale(0.4);
        opacity: 0;
     
    }

    .navbar__search--collapse {
        display: block;
        opacity: 1;
        top: 20px;
        


    }

    .navbar__center-nav {
        visibility: hidden;
    }

    .navbar__user-wrapper {
        border: 1px solid #ccc;
    }
`
let styleNode = document.createElement('style')
styleNode.innerText = navbarScrollStyle

window.onscroll = () => {
    console.log("-------")
    console.log(Math.floor(window.scrollY))
    if (window.scrollY !== 0) {
        document.head.appendChild(styleNode)
    } else {
        document.head.removeChild(styleNode)
    }
}