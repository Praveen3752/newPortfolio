/*about section */

(()=>{
    const aboutSection = document.querySelector(".about-section");
    tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active"))
        {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })

    const chatApp = document.querySelector("#chatApp");
    chatApp.addEventListener("click",()=>{
       window.open('https://chatapp-angular.netlify.app/','_blank').focus()
    });

    const gameApp = document.querySelector("#gameApp");
    gameApp.addEventListener("click",()=>{
        window.open('https://housieproject-angular.netlify.app/','_blank').focus()
    });

    const aboutMe = document.querySelector("#moreAboutMe");
    aboutMe.addEventListener("click",()=>{
        document.getElementById("aboutMe").scrollIntoView({
            behavior: 'smooth'
        });
    });

    const dayNight = document.querySelector(".hamburger-btn");
    dayNight.addEventListener("click",()=>{
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    })

})();
//13185510