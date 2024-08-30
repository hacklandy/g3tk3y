document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');
const continueBtn = document.getElementById('continue-btn');
const keyContainer = document.getElementById('key-container');
const keySpan = document.getElementById('key');
const copyBtn = document.getElementById('copy-btn');
const timer = document.getElementById('timer');

let countdown = 17;
const countdownInterval = setInterval(() => {
countdown--;
timer.textContent = countdown;
if (countdown <= 0) {
clearInterval(countdownInterval);
timer.style.display = 'none';
continueBtn.disabled = false;
}
}, 1000);

continueBtn.addEventListener('click', () => {
console.log('Кнопка продолжить нажата, показываем ключ и пытаемся показать рекламу...');
continueBtn.style.display = 'none';
keyContainer.style.display = 'block';
keySpan.textContent = key;
showFullscreenAd();
});

copyBtn.addEventListener('click', () => {
navigator.clipboard.writeText(key).then(() => {
alert('The key copied!');
});
});

function showFullscreenAd() {
console.log('Инициализация показа рекламы...');
window.yaContextCb.push(() => {
Ya.Context.AdvManager.render({
blockId: "R-A-11786046-4",
type: "fullscreen",
platform: "touch",
onRender: () => {
console.log('Реклама отрендерилась');
},
onClose: () => {
console.log('Реклама закрыта');
},
onError: (error) => {
console.error('Ошибка при показе рекламы:', error);
}
});
});
}
});
