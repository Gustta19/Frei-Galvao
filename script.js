/* =========================
   HEADER SCROLL EFFECT
========================= */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});


/* =========================
   MENU MOBILE
========================= */
const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


/* =========================
   REVEAL SCROLL
========================= */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));


/* =========================
   NOVENA ACCORDION (CORRIGIDO)
========================= */
const novenaItems = document.querySelectorAll(".novena-item");

if (novenaItems.length > 0) {

    novenaItems.forEach(item => {
        const btn = item.querySelector(".novena-toggle");
        const content = item.querySelector(".novena-content");

        if (!btn || !content) return;

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const isActive = item.classList.contains("active");

            // fecha todos
            novenaItems.forEach(el => {
                el.classList.remove("active");
            });

            // se já estava aberto, só fecha (toggle real)
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

}


/* =========================
   ORAÇÃO - BOTÕES
========================= */
const textoOracao = document.querySelector(".texto-oracao");
const btnCopiar = document.querySelector(".btn-copiar");
const btnLeitura = document.querySelector(".btn-leitura");
const btnAudio = document.querySelector(".btn-audio");
const btnShare = document.querySelector(".btn-share");

/* COPIAR */
if (btnCopiar && textoOracao) {
    btnCopiar.addEventListener("click", () => {
        navigator.clipboard.writeText(textoOracao.innerText);

        const original = btnCopiar.innerText;
        btnCopiar.innerText = "Copiado ✔";

        setTimeout(() => {
            btnCopiar.innerText = original;
        }, 2000);
    });
}

/* MODO LEITURA */
if (btnLeitura) {
    btnLeitura.addEventListener("click", () => {
        document.body.classList.toggle("modo-leitura");
    });
}