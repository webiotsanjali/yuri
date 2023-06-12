/*=====================
  Email hide/show js
==========================*/
(function () {
  const emailList = document.querySelector(".email-list");
  const emailRead = document.querySelector(".email-read");
  let email_Data = document.querySelectorAll(".email-data");
  const btnEmail = document.querySelector(".btn-email");

  email_Data.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      emailRead.classList.add("show");
      emailList.classList.add("hide");
    });
  });

  btnEmail?.addEventListener("click", function (e) {
    emailRead.classList.remove("show");
    emailList.classList.remove("hide");
  });
})();
