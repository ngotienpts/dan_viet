document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // show menu pc
  var barPc = document.getElementById("nav");

  // tabs
  var tabs = document.querySelectorAll(".tab-item");
  var panes = document.querySelectorAll(".tab-pane");

  // show popup login
  var linkAccount = document.getElementById("top-link-account");
  var popupLogin = document.getElementById("cmt-account-header");

  // change password to show text
  var boxPass = document.querySelectorAll(".box_pass");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // emagazin
      if (widthDoc) {
        var expNoEditFull = document.querySelectorAll(".expNoEdit.full");
        expNoEditFull.forEach(function (a) {
          a.style.width = widthDoc.clientWidth + "px";
          a.style.marginLeft = "-" + a.offsetLeft + "px";
        });
      }

      // show menu pc
      if (barPc) {
        var btnMenu = barPc.querySelector(".icon-expandmenu");
        var menuPc = barPc.querySelector(".expand-bar");

        btnMenu.onclick = () => {
          menuPc.classList.toggle("active");
          btnMenu.classList.toggle("active");
        };
      }

      // tabs
      if (tabs && panes) {
        tabs.forEach(function (tab, index) {
          var pane = panes[index];
          tab.onclick = function () {
            document
              .querySelector(".tab-item.active")
              .classList.remove("active");
            document
              .querySelector(".tab-pane.active")
              .classList.remove("active");

            this.classList.add("active");
            pane.classList.add("active");
          };
        });
      }

      // show login
      linkAccount.onclick = () => {
        popupLogin.style.display = "block";
        widthDoc.style.overflow = "hidden";
      };
      var closePopup = popupLogin.querySelector(".close");
      closePopup.onclick = () => {
        popupLogin.style.display = "none";
        widthDoc.style.overflow = "unset";
      };

      // change password to show text
      boxPass.forEach(function (el) {
        var eyeIcon = el.querySelector(".iconew-eye");
        var typeInput = el.querySelector(".type-input");

        eyeIcon.onclick = () => {
          eyeIcon.classList.toggle("closed");
          if (typeInput.getAttribute("type") == "password") {
            typeInput.setAttribute("type", "text");
          } else {
            typeInput.setAttribute("type", "password");
          }
        };
      });
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (
          !menuPc.querySelector(".wrapper").contains(e.target) &&
          !e.target.matches(".icon-expandmenu")
        ) {
          menuPc.classList.remove("active");
          btnMenu.classList.remove("active");
        }
      });
    },

    // slide topic list
    slideToppicList: function () {
      $(".topic-list").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    // slide hightlight
    slideHightlight: function () {
      $(".hightlight-top__slide").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 30,
      });
    },
    // sticky bar home 2
    stickyHome2: function () {
      $(".leftSidebar-2,.rightSidebar-2").theiaStickySidebar({
        additionalMarginTop: 30,
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }

      if (barPc) {
        if (
          document.body.scrollTop > barPc.offsetTop ||
          document.documentElement.scrollTop > barPc.offsetTop
        ) {
          barPc.classList.add("sticky");
          barPc.classList.remove("active");
        } else {
          barPc.classList.remove("sticky");
          barPc.classList.add("active");
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide topic list
      this.slideToppicList();
      // slide hightlight
      this.slideHightlight();
      // sticky bar home 1
      this.stickyHome1();
      // sticky bar home 2
      this.stickyHome2();
    },
  };

  app.start();
});
