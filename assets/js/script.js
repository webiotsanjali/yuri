/*! -----------------------------------------------------------------------------------

    Template Name: Yuri Admin
    Template URI: http://admin.pixelstrap.com/yuri/theme
    Description: This is Admin theme
    Author: Pixelstrap
    Author URI: https://themeforest.net/user/pixelstrap

-----------------------------------------------------------------------------------

        01. password show hide
        02. Background Image js
        03. sidebar filter
        04. Language js
        05. Translate js

 --------------------------------------------------------------------------------- */

(function ($) {
  "use strict";
  $(document).on("click", function (e) {
    var outside_space = $(".outside");
    if (
      !outside_space.is(e.target) &&
      outside_space.has(e.target).length === 0
    ) {
      $(".menu-to-be-close").removeClass("d-block");
      $(".menu-to-be-close").css("display", "none");
    }
  });

  $(".prooduct-details-box .close").on("click", function (e) {
    var tets = $(this).parent().parent().parent().parent().addClass("d-none");
    console.log(tets);
  });

  if ($(".page-wrapper").hasClass("horizontal-wrapper")) {
    $(".sidebar-list").hover(
      function () {
        $(this).addClass("hoverd");
      },
      function () {
        $(this).removeClass("hoverd");
      }
    );
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 600) {
        $(".sidebar-list").removeClass("hoverd");
      }
    });
  }

  /*----------------------------------------
     password show hide
     ----------------------------------------*/
  $(".show-hide").show();
  $(".show-hide span").addClass("show");

  $(".show-hide span").click(function () {
    if ($(this).hasClass("show")) {
      $('input[name="login[password]"]').attr("type", "text");
      $(this).removeClass("show");
    } else {
      $('input[name="login[password]"]').attr("type", "password");
      $(this).addClass("show");
    }
  });
  $('form button[type="submit"]').on("click", function () {
    $(".show-hide span").addClass("show");
    $(".show-hide")
      .parent()
      .find('input[name="login[password]"]')
      .attr("type", "password");
  });

  /*=====================
      02. Background Image js
      ==========================*/
  $(".bg-center").parent().addClass("b-center");
  $(".bg-img-cover").parent().addClass("bg-size");
  $(".bg-img-cover").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();
    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });
    el.hide();
  });

  $(".mega-menu-container").css("display", "none");
  $(".header-search").click(function () {
    $(".search-full").addClass("open");
  });
  $(".close-search").click(function () {
    $(".search-full").removeClass("open");
    $("body").removeClass("offcanvas");
  });
  $(".mobile-toggle").click(function () {
    $(".nav-menus").toggleClass("open");
  });
  $(".mobile-toggle-left").click(function () {
    $(".left-header").toggleClass("open");
  });
  $(".bookmark-search").click(function () {
    $(".form-control-search").toggleClass("open");
  });
  $(".filter-toggle").click(function () {
    $(".product-sidebar").toggleClass("open");
  });
  $(".toggle-data").click(function () {
    $(".product-wrapper").toggleClass("sidebaron");
  });
  $(".form-control-search input").keyup(function (e) {
    if (e.target.value) {
      $(".page-wrapper").addClass("offcanvas-bookmark");
    } else {
      $(".page-wrapper").removeClass("offcanvas-bookmark");
    }
  });
  $(".search-full input").keyup(function (e) {
    console.log(e.target.value);
    if (e.target.value) {
      $("body").addClass("offcanvas");
    } else {
      $("body").removeClass("offcanvas");
    }
  });

  $("body").keydown(function (e) {
    if (e.keyCode == 27) {
      $(".search-full input").val("");
      $(".form-control-search input").val("");
      $(".page-wrapper").removeClass("offcanvas-bookmark");
      $(".search-full").removeClass("open");
      $(".search-form .form-control-search").removeClass("open");
      $("body").removeClass("offcanvas");
    }
  });
  $(".mode").on("click", function () {
    const bodyModeDark = $("body").hasClass("dark-only");

    if (!bodyModeDark) {
      $(".mode").addClass("active");
      localStorage.setItem("mode", "dark-only");
      $("body").addClass("dark-only");
      $("body").removeClass("light");
    }
    if (bodyModeDark) {
      $(".mode").removeClass("active");
      localStorage.setItem("mode", "light");
      $("body").removeClass("dark-only");
      $("body").addClass("light");
    }
  });
  $("body").addClass(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  $(".mode").addClass(
    localStorage.getItem("mode") === "dark-only" ? "active" : " "
  );

  // sidebar filter
  $(".md-sidebar .md-sidebar-toggle ").on("click", function (e) {
    $(".md-sidebar .md-sidebar-aside ").toggleClass("open");
  });
})(jQuery);

$(".loader-wrapper").fadeOut("slow", function () {
  $(this).remove();
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 600) {
    $(".tap-top").fadeIn();
  } else {
    $(".tap-top").fadeOut();
  }
});

$(".tap-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});
(function ($, window, document, undefined) {
  "use strict";
  var $ripple = $(".js-ripple");
  $ripple.on("click.ui.ripple", function (e) {
    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find(".c-ripple__circle");
    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;
    $circle.css({
      top: y + "px",
      left: x + "px",
    });
    $this.addClass("is-active");
  });
  $ripple.on(
    "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
    function (e) {
      $(this).removeClass("is-active");
    }
  );
})(jQuery, window, document);

// active link

$(".chat-menu-icons .toogle-bar").click(function () {
  $(".chat-menu").toggleClass("show");
});

// Language
var tnum = "en";

$(document).ready(function () {
  if (localStorage.getItem("primary") != null) {
    var primary_val = localStorage.getItem("primary");
    $("#ColorPicker1").val(primary_val);
    var secondary_val = localStorage.getItem("secondary");
    $("#ColorPicker2").val(secondary_val);
  }

  $(document).click(function (e) {
    $(".translate_wrapper, .more_lang").removeClass("active");
  });
  $(".translate_wrapper .current_lang").click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass("active");

    setTimeout(function () {
      $(".more_lang").toggleClass("active");
    }, 5);
  });

  /*TRANSLATE*/
  translate(tnum);

  $(".more_lang .lang").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".more_lang").removeClass("active");

    var i = $(this).find("i").attr("class");
    var lang = $(this).attr("data-value");
    var tnum = lang;
    translate(tnum);

    $(".current_lang .lang-txt").text(lang);
    $(".current_lang i").attr("class", i);
  });
});

function translate(tnum) {
  $(".lan-1").text(trans[0][tnum]);
  $(".lan-2").text(trans[1][tnum]);
  $(".lan-3").text(trans[2][tnum]);
  $(".lan-4").text(trans[3][tnum]);
  $(".lan-5").text(trans[4][tnum]);
  $(".lan-6").text(trans[5][tnum]);
  $(".lan-7").text(trans[6][tnum]);
  $(".lan-8").text(trans[7][tnum]);
  $(".lan-9").text(trans[8][tnum]);
}

var trans = [
  {
    English: "- General",
    Português: "- Geral",
    Español: "- Generalo",
    Français: "- GÃ©nÃ©rale",
    Deutsch: "- Generel",
    简体中文: "- ä¸€èˆ¬",
    لعربية: "- Ø­Ø¬Ù†Ø±Ø§Ù„ Ù„ÙˆØ§Ø¡",
  },
  {
    English: "Dashboards,widgets & layout.",
    Português: "PainÃ©is, widgets e layout.",
    Español: "Paneloj, fenestraÄµoj kaj aranÄo.",
    Français: "Tableaux de bord, widgets et mise en page.",
    Deutsch: "Dashboards, widgets en lay-out.",
    简体中文: "ä»ªè¡¨æ¿ï¼Œå°å·¥å…·å’Œå¸ƒå±€ã€‚",
    لعربية: "Ù„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ§Ù„ØªØ®Ø·ÙŠØ·.",
  },
  {
    English: "Dashboards",
    Português: "PainÃ©is",
    Español: "Paneloj",
    Français: "Tableaux",
    Deutsch: "Dashboards",
    简体中文: " ä»ªè¡¨æ¿ ",
    لعربية: "ÙˆØ­Ø§Øª Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© ",
  },
  {
    English: "Default",
    Português: "PadrÃ£o",
    Español: "Vaikimisi",
    Français: "DÃ©faut",
    Deutsch: "Standaard",
    简体中文: "é›»å­å•†å‹™",
    لعربية: "ÙˆØ¥ÙØªØ±Ø§Ø¶ÙŠ",
  },
  {
    English: "Ecommerce",
    Português: "ComÃ©rcio eletrÃ´nico",
    Español: "Komerco",
    Français: "Commerce Ã©lectronique",
    Deutsch: "E-commerce",
    简体中文: "é›»å­å•†å‹™",
    لعربية: "ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©",
  },
  {
    English: "Widgets",
    Português: "Ferramenta",
    Español: "Vidin",
    Français: "Widgets",
    Deutsch: "Widgets",
    简体中文: "å°éƒ¨ä»¶",
    لعربية: "ÙˆØ§Ù„Ø­Ø§Ø¬ÙŠØ§Øª",
  },
  {
    English: "Page layout",
    Português: "Layout da pÃ¡gina",
    Español: "PaÄa aranÄo",
    Français: "Tableaux",
    Deutsch: "Mise en page",
    简体中文: "é é¢ä½ˆå±€",
    لعربية: "ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„ØµÙØ­Ø©",
  },
  {
    English: "- Applications",
    Português: "- FormulÃ¡rios",
    Español: "- Aplikoj",
    Français: "- Applications",
    Deutsch: "- Toepassingen",
    简体中文: "- æ‡‰ç”¨é ˜åŸŸ",
    لعربية: "- ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
  },
  {
    English: "Ready to use Apps",
    Português: "Pronto para usar aplicativos",
    Español: "Preta uzi Apps",
    Français: " Applications prÃªtes Ã  lemploi ",
    Deutsch: "Klaar om apps te gebruiken",
    简体中文: "ä»ªè¡¨æ¿",
    لعربية: "Ø¬Ø§Ù‡Ø² Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
  },
];

$(".mobile-title svg").click(function () {
  $(".header-mega").toggleClass("d-block");
});

$(".onhover-dropdown .onhover-click").on("click", function () {
  $(this).next(".onhover-show-div").toggleClass("active");
});

$("#flip-btn").click(function () {
  $(".flip-card-inner").addClass("flipped");
});

$("#flip-back").click(function () {
  $(".flip-card-inner").removeClass("flipped");
});


// cart dropdown product delete
function CheckProductvalid() {
  let AllProducts = document.getElementsByClassName("cart-product");
  let HiddenProducts = document.getElementsByClassName("d-none");
  if (AllProducts.length == HiddenProducts.length) {
    document.querySelector(".cart-empty").classList.add("show");
    document.querySelector(".cart-main-wrapper").classList.add("d-none");
  }
}
const cart_details = document.getElementsByClassName(
  "cart-product"
);
cart_details.forEach((item, index) => {
  let DeleteButton = item.querySelector(".close-circle");
  DeleteButton.addEventListener("click", (event) => {
    item.classList.add("d-none");
    CheckProductvalid();
  });
});
