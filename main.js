window.addEventListener("DOMContentLoaded", function() {
  const isHomePage = document.body.classList.contains('home');
  console.log('Halaman Home:', isHomePage);  

  if (isHomePage) {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: true
        }
      })
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );
  }
});

const star = document.querySelector('.star');

document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;

  // Menempatkan elemen bintang pada posisi kursor
  star.style.left = `${x - 10}px`;  // Mengatur posisi bintang sedikit di sekitar kursor
  star.style.top = `${y - 10}px`;   // Sama, untuk memastikan bintang berada di sekitar kursor

  // Menampilkan bintang dengan animasi
  star.style.animation = 'none'; // Reset animasi
  star.offsetHeight; // Trik untuk memulai ulang animasi
  star.style.animation = 'sparkle 0.5s ease-out forwards';  // Memulai ulang animasi
});
