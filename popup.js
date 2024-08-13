document.addEventListener('DOMContentLoaded', function () {
    const btcPriceElement = document.getElementById('btc-price');
    const ethPriceElement = document.getElementById('eth-price');

    async function fetchCryptoPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
            const data = await response.json();

            const btcPrice = data.bitcoin.usd;
            const ethPrice = data.ethereum.usd;

            btcPriceElement.textContent = `$${btcPrice}`;
            ethPriceElement.textContent = `$${ethPrice}`;
        } catch (error) {
            btcPriceElement.textContent = 'Error';
            ethPriceElement.textContent = 'Error';
            console.error('Error fetching crypto prices:', error);
        }
    }

    fetchCryptoPrices();
});
