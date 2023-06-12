//  Custom mail pagination
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 8;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

/*=====================
  Email hide/show js
==========================*/

let listItem = document.querySelectorAll("i");
const envelope_1 = document.querySelector(".envelope-1");
const envelope_2 = document.querySelector(".envelope-2");

listItem.forEach((item, index) => {
  envelope_2.addEventListener("click", (event) => {
    envelope_1.classList.remove("hide");
    envelope_1.classList.add("show");
    envelope_2.classList.remove("show");
    envelope_2.classList.add("hide");
  });

  envelope_1.addEventListener("click", (event) => {
    envelope_2.classList.remove("hide");
    envelope_2.classList.add("show");
    envelope_1.classList.remove("show");
    envelope_1.classList.add("hide");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var envelope_1 = document.getElementsByClassName("envelope-1");
//   var envelope_2 = document.getElementsByClassName("envelope-2")[0];

//   for (var i = 0; i < envelope_1.length; i++) {
//     envelope_1[i].addEventListener("click", function () {
//       if (envelope_2.classList.contains("show")) {
//         envelope_2.classList.remove("hide");
//         console.log("abc", envelope_1);
//       } else {
//         envelope_2.classList.add("show");
//       }
//       console.log("hello", envelope_2);
//     });
//     envelope_2[i].addEventListener("click", function () {
//       if (envelope_1.classList.contains("hide")) {
//         envelope_1.classList.remove("show");
//       } else {
//         envelope_1.classList.add("hide");
//       }
//     });
//   }
// });

// let listItem_1 = document.querySelectorAll("i");
// let listData = document.querySelector("li");
// const trash_3 = document.querySelector(".trash-3");

// listItem_1.forEach((item, index) => {
//   trash_3.addEventListener("click", (event) => {
//     listData.classList.remove("remove");
//     listData.classList.add("shows");
//   });
// });

// function CheckInbox() {
//   let AllProducts = document.getElementsByClassName("email-options");
//   let HiddenProducts = document.getElementsByClassName("mail-remove");
//   // if (AllProducts.length == HiddenProducts.length) {
//   //   document.querySelector(".empty-card").classList.add("show");
//   // }
// }
// const product_details = document.getElementsByClassName("email-options");
// product_details.forEach((item, index) => {
//   let DeleteButton = item.querySelector(".trash-remove");
//   DeleteButton.addEventListener("click", (event) => {
//     item.classList.add("mail-remove");
//     CheckInbox();
//   });
// });
// let mailInbox = document.getElementsByClassName("trash-3");
// let inboxData = document.getElementsByClassName("inbox-data");

// // let hiddenLi = document.querySelector("li");

// console.log("listItem_1 mailInbox hiddenLi", inboxData);
// inboxData.forEach((item, index) => {
//   mailInbox.addEventListener("onclick", () => {
//     console.log(closest("li").find("inbox-data").html());
//     // inboxData.classList.remove("shows");
//     // inboxData.classList.add("remove");
//   });
// });

/*======================
 Delete Quantity Item js
=======================*/
const InboxData = document.querySelectorAll(".inbox-data");
InboxData?.forEach((el) => {
  const deleteIcon = el.querySelector(".trash-3");
  deleteIcon.addEventListener("click", function () {
    this.closest(".inbox-data").style.display = "none";
  });
});
