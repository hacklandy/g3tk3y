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
alert('The key copied!');
});
});

function showAdVideo() {
return new Promise((resolve) => {
const adContainer = document.createElement('div');
adContainer.id = 'ad-container';
document.body.appendChild(adContainer);

Ya.adfoxCode.create({
ownerId: 123456, // Замени на свой ownerId
containerId: 'ad-container',
params: {
p1: 'cmwpa', // Замени на свои параметры
p2: 'gbyq'
},
onRender: () => {
console.log('Ad rendered');
},
onError: (error) => {
console.error('Ad error:', error);
resolve();
},
onClose: () => {
console.log('Ad closed');
document.body.removeChild(adContainer);
resolve();
}
});
});
}
});
