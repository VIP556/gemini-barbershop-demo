// ===================================
// MOBILE MENU
// ===================================

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");


menuBtn.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle(
      "active"
    );

  }
);


document
  .querySelectorAll("#navMenu a")
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove(
            "active"
          );

        }
      );

    }
  );




// ===================================
// MODERN DATE SELECTOR
// ===================================

const dateOptions =
  document.getElementById("dateOptions");

const dateInput =
  document.getElementById("date");


function formatDateForInput(date) {

  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");


  return `${year}-${month}-${day}`;

}


function createDateOptions() {

  dateOptions.innerHTML = "";


  const today =
    new Date();


  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const date =
      new Date();

    date.setHours(
      0,
      0,
      0,
      0
    );


    date.setDate(
      today.getDate() + i
    );


    const option =
      document.createElement(
        "button"
      );


    option.type =
      "button";


    option.className =
      "date-option";


    if (i === 0) {

      option.classList.add(
        "today"
      );

    }


    const dayName =
      date.toLocaleDateString(
        "en-US",
        {
          weekday: "short"
        }
      );


    const dayNumber =
      date.getDate();


    const monthName =
      date.toLocaleDateString(
        "en-US",
        {
          month: "short"
        }
      );


    option.innerHTML = `

      <span class="day-name">
        ${dayName}
      </span>

      <span class="day-number">
        ${dayNumber}
      </span>

      <span class="month-name">
        ${monthName}
      </span>

    `;


    option.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".date-option"
          )
          .forEach(
            button => {

              button.classList.remove(
                "active"
              );

            }
          );


        option.classList.add(
          "active"
        );


        dateInput.value =
          formatDateForInput(
            date
          );

      }
    );


    dateOptions.appendChild(
      option
    );

  }


  const firstDate =
    document.querySelector(
      ".date-option"
    );


  if (firstDate) {

    firstDate.click();

  }

}


createDateOptions();




// ===================================
// WHATSAPP BOOKING
// ===================================

const bookingForm =
  document.getElementById(
    "bookingForm"
  );


bookingForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    const name =
      document
        .getElementById("name")
        .value
        .trim();


    const service =
      document
        .getElementById("service")
        .value;


    const barber =
      document
        .getElementById("barber")
        .value;


    const date =
      document
        .getElementById("date")
        .value;


    const time =
      document
        .getElementById("time")
        .value;



    if (
      !name ||
      !service ||
      !barber ||
      !date ||
      !time
    ) {

      alert(
        "Please complete all booking details."
      );

      return;

    }



    const bookingDate =
      new Date(
        `${date}T00:00:00`
      );


    const formattedDate =
      bookingDate.toLocaleDateString(
        "en-US",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      );



    const message =
`Hello Gemini Barbershop 👋

I'd like to book an appointment.

Name: ${name}
Service: ${service}
Barber: ${barber}
Date: ${formattedDate}
Time: ${time}

Please let me know if this appointment is available.

Thank you!`;



    const phoneNumber =
      "962792500050";


    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);




// ===================================
// SCROLL ANIMATIONS
// ===================================

const animatedElements =
  document.querySelectorAll(
    `
    .section-heading,
    .service-card,
    .about-image,
    .about-content,
    .gallery-item,
    .booking-left,
    .booking-form,
    .location > div
    `
  );


animatedElements.forEach(
  element => {

    element.classList.add(
      "fade-in"
    );

  }
);


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add(
                "visible"
              );


            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


animatedElements.forEach(
  element => {

    observer.observe(
      element
    );

  }
);




// ===================================
// NAVBAR SCROLL
// ===================================

const navbar =
  document.querySelector(
    ".navbar"
  );


window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 30
    ) {

      navbar.style.background =
        "rgba(5,5,5,0.97)";

    }

    else {

      navbar.style.background =
        "rgba(5,5,5,0.86)";

    }

  }
);