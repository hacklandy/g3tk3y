document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    const continueBtn = document.getElementById('continue-btn');
    const keyContainer = document.getElementById('key-container');
    const keySpan = document.getElementById('key');
    const copyBtn = document.getElementById('copy-btn');

    continueBtn.addEventListener('click', () => {
        console.log('Кнопка продолжить нажата, пытаемся показать рекламу...');
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
                    console.log('Реклама закрыта, показываем ключ и кнопку скопировать');
                    keyContainer.style.display = 'block';
                    keySpan.textContent = key;
                },
                onError: (error) => {
                    console.error('Ошибка при показе рекламы:', error);
                }
            });
        });
    }
});
