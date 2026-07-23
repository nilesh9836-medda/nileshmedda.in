function loadHamburger() {
    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    /*const navLists = document.querySelectorAll('.nav-list');*/
    const navLinks = document.querySelectorAll('.nav-link');
    const overLay = document.querySelector('.overlay');

    function toggleMenu() {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
        overLay.classList.toggle("active");

        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden":"auto";
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    overLay.addEventListener('click', toggleMenu);

    /*navLists.forEach(list => {
        list.addEventListener('click', () => {
            hamburgerBtn.classList.remove("active");
            navMenu.classList.remove("active");
            overLay.classList.remove("active");

            document.body.overflow = "auto";

            navLists.forEach(el => el.classList.remove("active"));
            list.classList.add('active');
        });
    });*/

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            hamburgerBtn.classList.remove("active");
            navMenu.classList.remove("active");
            overLay.classList.remove("active");

            document.body.style.overflow = "auto";

            navLinks.forEach(el => el.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

loadHamburger();