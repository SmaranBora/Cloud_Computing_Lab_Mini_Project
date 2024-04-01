function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Fetch real-time exchange rates from an API (replace with a currency API of your choice)
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.rates[toCurrency];
            var result = inputValue * exchangeRate;
            document.getElementById('result').innerHTML = result.toFixed(2) + ' ' + toCurrency;
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
}

// Add currency options with full forms
var currencies = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'ZAR', name: 'South African Rand' },
];

currencies.forEach(function (currency) {
    var option = document.createElement('option');
    option.text = `${currency.code} - ${currency.name}`;
    option.value = currency.code;

    document.getElementById('fromCurrency').add(option);
    document.getElementById('toCurrency').add(option.cloneNode(true));
});
