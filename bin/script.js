  
  
  // Section reveal
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => observer.observe(sec));

  // Scroll to top button
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile hamburger toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Active nav highlight on scroll
  const navItems = document.querySelectorAll(".nav-links a");
  const sectionsForNav = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sectionsForNav.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

    // Function to check if element is in viewport
    function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
    }

    // Animate sections on scroll
    const fadeInElements = document.querySelectorAll('section, .project, .job, .skills, #contact, #achievements ul');

    function handleScroll() {
    fadeInElements.forEach(el => {
        // Add stagger class if element has multiple children
        if (el.children.length > 1) el.classList.add('stagger');

        if (isInViewport(el)) {
        el.classList.add('visible');
        }
    });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); // trigger on page load

      window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("scrollProgress").style.width = progress + "%";
  });
});

const darkToggle = document.getElementById("darkToggle");

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Optional: save preference
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark")
    );
  });

  // Load saved mode
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }