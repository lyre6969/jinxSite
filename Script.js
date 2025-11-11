gsap.registerPlugin(ScrollTrigger);

// ===== Transição =====
function transitionTo(url) {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = url, 800);
}

// ===== HERO =====
gsap.to(".title", { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
gsap.to(".subtitle", { opacity: 1, delay: 0.5, duration: 1 });
gsap.to(".btn", { opacity: 1, delay: 0.8, duration: 1, y: 0 });

// ===== Parallax de Fundo =====
gsap.to(".hero-bg", {
  scale: 1,
  y: -100,
  scrollTrigger: { trigger: ".hero", start: "top top", scrub: 1.5 }
});

// ===== Imagem atrás do nome Jinx se move levemente =====
gsap.to(".hero-overlay-img img", {
  scale: 1,
  y: -80,
  scrollTrigger: { trigger: ".hero", start: "top top", scrub: 1.2 }
});

// ===== Entrada dos cards =====
gsap.utils.toArray(".one-div").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: i * 0.2,
    scrollTrigger: { trigger: card, start: "top 85%" }
  });
});

// ===== CHARACTER =====
gsap.to(".char-img img", {
  scrollTrigger: { trigger: ".character", start: "top 80%" },
  opacity: 1, rotateY: 0, duration: 1.2
});

gsap.to(".char-text h2, .char-text p, .btn.secondary", {
  scrollTrigger: { trigger: ".character", start: "top 75%" },
  opacity: 1, y: 0, stagger: 0.3, duration: 1
});
