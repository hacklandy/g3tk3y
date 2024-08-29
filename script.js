document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');
const continueBtn = document.getElementById('continue-btn');
const keyContainer = document.getElementById('key-container');
const keySpan = document.getElementById('key');
const copyBtn = document.getElementById('copy-btn');

continueBtn.addEventListener('click', () => {
showAdVideo().then(() => {
continueBtn.style.display = 'none';
keyContainer.style.display = 'block';
keySpan.textContent = key;
});
});

copyBtn.addEventListener('click', () => {
navigator.clipboard.writeText(key).then(() => {
alert('Ключ скопирован!');
});
});

function showAdVideo() {
