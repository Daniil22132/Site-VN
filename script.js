document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  const reviews = document.querySelectorAll('.review');
  const total = reviews.length;
  const currentSpan = document.getElementById('current');
  const totalSpan = document.getElementById('total');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  totalSpan.textContent = total;

  function showReview(index) {
    reviews.forEach(r => r.classList.remove('active'));
    reviews[index].classList.add('active');
    currentSpan.textContent = index + 1;
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % total;
    showReview(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    showReview(current);
  });

  setInterval(() => nextBtn.click(), 5000);

  const callBtnTop = document.getElementById("callBtn");
  callBtnTop.addEventListener("click", () => {
    const formSection = document.getElementById("repair-form");
    formSection.scrollIntoView({ behavior: "smooth" });
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Дякуємо! Майстер зв’яжеться з вами найближчим часом.");
    form.reset();
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if(target) { target.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  const phoneInput = document.querySelector("input[name='phone']");
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });

  document.querySelectorAll(".service").forEach(service => {
    service.addEventListener("mouseenter", () => {
      service.style.transform = "scale(1.05)";
      service.style.transition = "0.3s";
    });
    service.addEventListener("mouseleave", () => {
      service.style.transform = "scale(1)";
    });
  });

  const supportBtn = document.getElementById("supportBtn");
  supportBtn.addEventListener("click", () => {
    alert("Ви натиснули кнопку підтримки!");
  });
});
