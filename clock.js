// clock.js
let clockInterval; // Змінна для збереження інтервалу

export function initClock() {
  clearInterval(clockInterval); // Очищуємо попередній інтервал
  document.getElementById("content").innerHTML = `
        <div class="clock">
            <h1 id="clock-display"></h1>
        </div>
    `;

  clockInterval = setInterval(() => {
    const now = new Date();
    document.getElementById("clock-display").textContent =
      now.toLocaleTimeString();
  }, 1000);
}
