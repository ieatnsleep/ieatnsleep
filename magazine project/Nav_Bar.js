
//fetching DOM from html

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

// onclick function to open navigation bar
btnHam.addEventListener
("click", function(){if(btnHam.className !== "")
    {
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

// onclick function to close navigation bar
btnTimes.addEventListener('click', function(){if(btnHam.className !== "")
    {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})
