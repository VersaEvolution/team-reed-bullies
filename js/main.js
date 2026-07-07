/*=====================================================
  TEAM REED BULLIES
  main.js
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

  /*==============================
      ELEMENTS
  ==============================*/

  const body = document.body;

  const burger = document.getElementById("burgerBtn");
  const drawer = document.getElementById("drawer");

  const header = document.querySelector(".site-header");

  const navLinks = document.querySelectorAll(".drawer-nav a");

  const revealItems = document.querySelectorAll("[data-reveal]");



  /*==============================
      MOBILE MENU
  ==============================*/

  function openDrawer() {

    drawer.classList.add("open");
    body.classList.add("menu-open");

  }

  function closeDrawer() {

    drawer.classList.remove("open");
    body.classList.remove("menu-open");

  }

  if (burger && drawer) {

    burger.addEventListener("click", () => {

      drawer.classList.contains("open")
        ? closeDrawer()
        : openDrawer();

    });

  }



  /*==============================
      CLOSE WHEN LINK CLICKED
  ==============================*/

  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      closeDrawer();

    });

  });



  /*==============================
      CLICK OUTSIDE TO CLOSE
  ==============================*/

 const drawerPanel = document.querySelector(".drawer-panel");

drawer.addEventListener("click", (e) => {

  if (!drawer.classList.contains("open")) return;

  // If the click is NOT inside the menu panel,
  // it must be on the dark overlay.
  if (!drawerPanel.contains(e.target)) {
    closeDrawer();
  }

});


  /*==============================
      ESC KEY CLOSE
  ==============================*/

  document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

      closeDrawer();

    }

  });



  /*==============================
      ACTIVE PAGE
  ==============================*/

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    if (href === currentPage) {

      link.classList.add("active");

    }

  });



  /*==============================
      STICKY HEADER
  ==============================*/

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  updateHeader();

  window.addEventListener("scroll", updateHeader);



  /*==============================
      SMOOTH SCROLL
  ==============================*/

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({

        behavior: "smooth",
        block: "start"

      });

    });

  });



  /*==============================
      REVEAL ANIMATION
  ==============================*/

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("in");

          observer.unobserve(entry.target);

        }

      });

    }, {

      threshold: 0.15

    });

    revealItems.forEach(item => {

      observer.observe(item);

    });

  } else {

    revealItems.forEach(item => {

      item.classList.add("in");

    });

  }

});