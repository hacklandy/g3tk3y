document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');
const continueBtn = document.getElementById('continue-btn');
const keyContainer = document.getElementById('key-container');
const keySpan = document.getElementById('key');
const copyBtn = document.getElementById('copy-btn');

continueBtn.addEventListener('click', () => {
showFullscreenAd().then(() => {
continueBtn.style.display = 'none';
keyContainer.style.display = 'block';
keySpan.textContent = key;
});
});

copyBtn.addEventListener('click', () => {
navigator.clipboard.writeText(key).then(() => {
alert('The key copied!');
});
});

function showFullscreenAd() {
return new Promise((resolve) => {
const adContainer = document.createElement('div');
adContainer.id = 'fullscreen-ad-container';
document.body.appendChild(adContainer);

window.yaContextCb.push(() => {
Ya.Context.AdvManager.render({
"blockId": "R-A-11786046-7",
"type": "fullscreen",
"platform": "touch",
"renderTo": "fullscreen-ad-container",
"onClose": () => {
document.body.removeChild(adContainer);
resolve();
}
});
});
});
}
});
