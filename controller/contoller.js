import Page from '../module/pagesClass.js';

const main = document.querySelector(".main");

const homePage = new Page("home.html", document.querySelector(".homePage"));
const service = new Page("service.html", document.querySelector(".servicePage"));
const hostal = new Page("hostal.html", document.querySelector(".dogHostal"));
const about = new Page("about.html", document.querySelector(".aboutPage"));
const review = new Page("review.html", document.querySelector(".reviewPage"));
const contact = new Page("contact.html", document.querySelector(".contactPage"));

const pageArray = [homePage, service, hostal, about, review, contact];


pageArray.forEach(page => {
  page.getPage().addEventListener("click", () => {
      fetch(`pages/${page.getPagePath()}`)
      .then(response => {
        if (!response.ok) {

          throw new Error("Failed to load home.html");
        }
        return response.text();
      })
      .then(html => {
        main.innerHTML = html;
      })
      .catch(error => {
        main.innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  });
})


// service.addEventListener("click", () => {
//     fetch("pages/service.html")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to load home.html");
//       }
//       return response.text();
//     })
//     .then(html => {
//       main.innerHTML = html;
//     })
//     .catch(error => {
//       main.innerHTML = `<p style="color:red;">${error.message}</p>`;
//     });
// });

// hostal.addEventListener("click", () => {
//     fetch("pages/hostal.html")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to load home.html");
//       }
//       return response.text();
//     })
//     .then(html => {
//       main.innerHTML = html;
//     })
//     .catch(error => {
//       main.innerHTML = `<p style="color:red;">${error.message}</p>`;
//     });
// });

// about.addEventListener("click", () => {
//     fetch("pages/about.html")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to load home.html");
//       }
//       return response.text();
//     })
//     .then(html => {
//       main.innerHTML = html;
//     })
//     .catch(error => {
//       main.innerHTML = `<p style="color:red;">${error.message}</p>`;
//     });
// });

// contact.addEventListener("click", () => {
//     fetch("pages/contact.html")
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to load home.html");
//       }
//       return response.text();
//     })
//     .then(html => {
//       main.innerHTML = html;
//     })
//     .catch(error => {
//       main.innerHTML = `<p style="color:red;">${error.message}</p>`;
//     });
// });