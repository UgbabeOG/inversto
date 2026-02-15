	function generateUniqueId() {
    return 'TID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function getRandomAmount() {
    return (Math.random() * 1000).toFixed(2); // Random amount between 0 and 1000
}

function getRandomSymbol() {
    const symbols = ['BTC', 'ETH', 'BNB', 'SOL', 'LTC'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateTransaction() {
    const types = ['Deposit', 'Withdraw'];
    const type = types[Math.floor(Math.random() * types.length)];
    return {
        id: generateUniqueId(),
        type: type,
        amount: getRandomAmount(),
        symbol: getRandomSymbol(),
        date: new Date().toLocaleString()
    };
}

let transactions = []; // Array to hold transaction data

function updateTable() {
    const tableBody = document.getElementById('transaction-body');

    // Add a new transaction to the top of the array
    transactions.unshift(generateTransaction());

    // Ensure the transactions array has a maximum of 7 items
    if (transactions.length > 7) {
        transactions.pop(); // Remove the oldest transaction if we have more than 7
    }

    // Clear existing rows
    tableBody.innerHTML = '';

    // Populate table with updated transactions
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.type}</td>
            <td>$${transaction.amount}</td>
            <td>${transaction.symbol}</td>
            <td>${transaction.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial load
updateTable();

// Update table every 10 seconds
setInterval(updateTable, 10000);



   // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to update counters in real-time
    function updateCounters() {
        // Daily Transactions
        const dailyTransactions = document.getElementById('dailyTransactions');
        const currentDailyTransactions = parseInt(dailyTransactions.textContent.replace(',', ''));
        const newDailyTransactions = currentDailyTransactions + getRandomNumber(0, 10);
        dailyTransactions.textContent = newDailyTransactions.toLocaleString();

        // Update Market Cap only if Daily Transactions exceed 100
        if (newDailyTransactions >= 100) {
            const marketCap = document.getElementById('marketCap');
            const currentMarketCap = parseFloat(marketCap.textContent.replace(',', ''));
            marketCap.textContent = (currentMarketCap + (Math.random() * 0.5)).toFixed(2);
        }

        // Active Accounts
        const activeAccounts = document.getElementById('activeAccounts');
        const currentActiveAccounts = parseInt(activeAccounts.textContent.replace(',', ''));
        activeAccounts.textContent = (currentActiveAccounts + getRandomNumber(0, 5)).toLocaleString();

        // Years on the Market
        const yearsMarket = document.getElementById('yearsMarket');
        const currentYear = new Date().getFullYear();
        yearsMarket.textContent = (currentYear - 2014); // Assuming the company was founded in 2014
    }

    // Update counters every 30 seconds
    setInterval(updateCounters, 20000);

    // Initial update
    updateCounters();
	
	//social proof
	
	