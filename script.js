document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    const continueBtn = document.getElementById('continue-btn');
    const keyContainer = document.getElementById('key-container');
    const keySpan = document.getElementById('key');
    const copyBtn = document.getElementById('copy-btn');

    continueBtn.addEventListener('click', () => {
        showFullscreenAd(); // Показываем полноэкранную рекламу
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(key).then(() => {
            alert('The key copied!');
        });
    });

    function showFullscreenAd() {
        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                blockId: "R-A-11786046-4",
                type: "fullscreen",
                platform: "touch",
                onClose: () => {
                    // После закрытия рекламы показываем ключ и кнопку "Скопировать"
                    keyContainer.style.display = 'block';
                    keySpan.textContent = key;
                }
            });
        });
    }
});
