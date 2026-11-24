
// =====================================
// ANTHONY NJOROGE - PORTFOLIO JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        });

    });

}


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// PROJECTS
// Add your projects inside this array.
// =====================================

const projects = [

    /*
    EXAMPLE PROJECT:

    {
        title: "My First Website",
        category: "WEB DEVELOPMENT",
        description: "A responsive website created using HTML, CSS and JavaScript.",
        image: "images/project1.jpg",
        link: "https://example.com"
    }

    */

];


// DISPLAY PROJECTS

const projectsGrid = document.getElementById("projects-grid");
const projectsEmpty = document.getElementById("projects-empty");
const projectCount = document.getElementById("project-count");

if (projectsGrid && projectsEmpty) {

    if (projects.length === 0) {

        projectsEmpty.style.display = "block";
        projectsGrid.style.display = "none";

    } else {

        projectsEmpty.style.display = "none";
        projectsGrid.style.display = "grid";

        projects.forEach(project => {

            const card = document.createElement("article");
            card.className = "project-card";

            const imageWrapper = document.createElement("div");
            imageWrapper.className = "project-image";

            const image = document.createElement("img");
            image.src = project.image;
            image.alt = project.title;
            image.loading = "lazy";

            imageWrapper.appendChild(image);

            const content = document.createElement("div");
            content.className = "project-content";

            const category = document.createElement("span");
            category.className = "project-category";
            category.textContent = project.category || "WEB DEVELOPMENT";

            const title = document.createElement("h3");
            title.textContent = project.title;

            const description = document.createElement("p");
            description.textContent = project.description;

            content.append(category, title, description);

            if (project.link) {

                const link = document.createElement("a");

                link.className = "project-link";
                link.href = project.link;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = "View Project ↗";

                content.appendChild(link);

            }

            card.append(imageWrapper, content);
            projectsGrid.appendChild(card);

        });

    }

}

if (projectCount) {

    projectCount.textContent =
        `${String(projects.length).padStart(2, "0")} PROJECTS`;

}


// =====================================
// SCROLL REVEAL ANIMATIONS
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// =====================================
// ACTIVE NAVIGATION LINK
// =====================================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}
