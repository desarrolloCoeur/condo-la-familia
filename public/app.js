const whatsappButton = document.querySelector('#whatsapp')
const header = document.querySelector('#header')

window.addEventListener("scroll", () => {
    if(window.scrollY > 720){
        whatsappButton.classList.remove("hidden");
        header.classList.add("scroll-bg")
    } else {
        whatsappButton.classList.add("hidden")
        header.classList.remove("scroll-bg")

    }
})

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a")
let isActive = false;

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isActive) {
        menu.classList.add("flex", "justify-center")
        menu.classList.remove("hidden");
        isActive = true;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }

})
menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  window.onload = function () {
    document.getElementById("captcha").innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
    const box = document.querySelector('#box');
    const pElement = document.createElement('p');
    pElement.classList.add('text-white', 'p-2', 'text-center', 'rounded-md', 'mt-5' , 'py-3');
    document
          .getElementById("contact-form")
          .addEventListener("submit", function (event) {
              event.preventDefault();

  
              if (document.getElementById("cpatchaTextBox").value == code) {
                  
                pElement.textContent = 'Enviando...';
                  pElement.classList.add('green');
                  box.appendChild(pElement);

                  emailjs
                      .sendForm("default_service", "template_8mfzbdt", this)
                      .then(
                          function () {
                              pElement.textContent = 'Correo Enviado';
                              document.getElementById("contact-form").reset();
                              setTimeout(function() {
                                  box.removeChild(pElement);
                                  pElement.classList.remove('green');
                              }, 5000);
                          },
                          function (error) {
                              console.log("FAILED...", error);
                          }
                      );
              } else {
                  pElement.textContent = 'Captcha Incorrecto';
                  pElement.classList.add('red');
                  box.appendChild(pElement);
                  setTimeout(function() {
                      box.removeChild(pElement);
                      pElement.classList.remove('red');
                  }, 3000);
                  
              }
          });
};