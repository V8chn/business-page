function observer() {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation;

            if (animationType === "services_table") {
                entry.target.classList.add('services__table--visible');
            } else if (animationType === "services_head") {
                entry.target.classList.add('services__head--visible');
            } else if (animationType === "about_head") {
                entry.target.classList.add('about__head--visible');
            } else if (animationType === "about_paragraph") {
                entry.target.classList.add('about__paragraph--visible');
            } else if (animationType === "projects_head") {
                entry.target.classList.add('projects__head--visible');
            } else if (animationType === "projects_line") {
                entry.target.classList.add('projects__line--visible');
            } else if (animationType === "projects_li") {
                entry.target.classList.add('projects__li--visible');
            } else if (animationType === "contacts_head") {
                entry.target.classList.add('contacts__head--visible');
            } else if (animationType === "contacts_li") {
                entry.target.classList.add('contacts__li--visible');
            } else if (animationType === "contacts_text") {
                entry.target.classList.add('contacts__text--visible');
            }

            observer.unobserve(entry.target);
        }
    });
}, {
        threshold: 0.65
    });

    document.querySelectorAll('.services__table').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.services__head').forEach(el => {
        observer.observe(el);   
    });

    document.querySelectorAll('.about__head').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.about__paragraph').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.projects__head').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.projects__line').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.projects__li').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.contacts__head').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.contacts__li').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.contacts__text').forEach(el => {
        observer.observe(el);
    });
}

function copy() {
    const copyLink = document.querySelector('a[href^="mailto:"]');

    copyLink.addEventListener('click', (e) => {
        e.preventDefault();

        const email = copyLink.innerText;

        navigator.clipboard.writeText(email).then(() => {
            alert('Email скопирован в буфер обмена!');
        });
    });
}

observer();
copy();