// Spending Insights Data
const spendingData = [
    {
        merchant: "Tesco",
        amountSpent: 50,
        cashbackEarned: 2.5,
        totalSaved: 2.5,
        category: "Groceries",
    },
    {
        merchant: "Costa Coffee",
        amountSpent: 30,
        cashbackEarned: 3,
        totalSaved: 3,
        category: "Dining",
    },
    {
        merchant: "Asda",
        amountSpent: 70,
        cashbackEarned: 5,
        totalSaved: 5,
        category: "Groceries",
    },
    {
        merchant: "IKEA",
        amountSpent: 100,
        cashbackEarned: 10,
        totalSaved: 10,
        category: "Home & Furniture",
    },
    {
        merchant: "Amazon",
        amountSpent: 200,
        cashbackEarned: 20,
        totalSaved: 20,
        category: "Online Shopping",
    },
];

// Populate Spending Insights Table
function populateSpendingTable() {
    const tableBody = document.getElementById("spending-table-body");

    spendingData.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.merchant}</td>
            <td>£${data.amountSpent.toFixed(2)}</td>
            <td>£${data.cashbackEarned.toFixed(2)}</td>
            <td>£${data.totalSaved.toFixed(2)}</td>
            <td>${data.category}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Rewards Progress Bar Logic
function updateProgressBar(currentSpending) {
    const progressFill = document.getElementById("progress-fill");
    const milestones = [50, 100, 200, 300];

    // Calculate progress percentage
    const maxMilestone = milestones[milestones.length - 1];
    const progressPercentage = Math.min((currentSpending / maxMilestone) * 100, 100);
    progressFill.style.width = `${progressPercentage}%`;

    // Highlight reached milestones
    milestones.forEach((milestone) => {
        const milestoneElement = document.getElementById(`milestone-${milestone}`);
        const circle = milestoneElement.querySelector(".circle");
        if (currentSpending >= milestone) {
            circle.style.backgroundColor = "#00a38d"; // Active milestone color
        } else {
            circle.style.backgroundColor = "#e0f5f0"; // Inactive milestone color
        }
    });

    // Update the progress note
    const progressNote = document.querySelector(".progress-note");
    const nextMilestone = milestones.find((milestone) => currentSpending < milestone);
    if (nextMilestone) {
        progressNote.innerHTML = `Current Spending: <strong>£${currentSpending.toFixed(
            2
        )}</strong>. Reach £${nextMilestone} to unlock your next reward!`;
    } else {
        progressNote.innerHTML = `Congratulations! You've reached the maximum milestone of £300.`;
    }
}

// Handle "Send to Savings" Button
function sendToSavings() {
    const spendingPot = 150; // Example value
    alert(`£${spendingPot} has been sent to your savings account!`);
}

// Navigate to Offers Page
function navigateToOffers() {
    window.location.href = "offers.html";
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    populateSpendingTable();

    const currentSpending = 120; // Example current spending
    updateProgressBar(currentSpending);

    const sendToSavingsButton = document.getElementById("send-to-savings");
    sendToSavingsButton.addEventListener("click", sendToSavings);
});

// Offers Data
const offersData = [
    {
        merchant: "Tesco",
        description: "5% cashback on groceries",
        img: "assets/offers-icon.png",
        currentSavings: 5.00,
        predictedSavings: 10.00,
    },
    {
        merchant: "Costa Coffee",
        description: "10% cashback on coffee purchases",
        img: "assets/offers-icon.png",
        currentSavings: 3.50,
        predictedSavings: 7.00,
    },
    {
        merchant: "IKEA",
        description: "10% cashback on furniture",
        img: "assets/offers-icon.png",
        currentSavings: 8.00,
        predictedSavings: 15.00,
    },
    {
        merchant: "Amazon",
        description: "5% cashback on online shopping",
        img: "assets/offers-icon.png",
        currentSavings: 9.00,
        predictedSavings: 18.00,
    },
];

// Populate Offers List
function populateOffers() {
    const offersContainer = document.getElementById("offers-container");

    offersData.forEach((offer) => {
        const offerItem = document.createElement("div");
        offerItem.classList.add("offer-item");
        offerItem.innerHTML = `
            <img src="${offer.img}" alt="${offer.merchant}">
            <div>
                <h3>${offer.merchant}</h3>
                <p>${offer.description}</p>
                <p class="savings">Current Savings: £${offer.currentSavings.toFixed(2)}</p>
                <p class="savings">Predicted Savings: £${offer.predictedSavings.toFixed(2)}</p>
            </div>
        `;
        offersContainer.appendChild(offerItem);
    });
}

// Initialize Offers Page
document.addEventListener("DOMContentLoaded", () => {
    populateOffers();
});


// Spending Data for Chart
const chartData = {
    merchants: ["Tesco", "Costa Coffee", "Asda", "IKEA", "Amazon"],
    spending: [50, 30, 70, 100, 200], // Amount Spent
    savings: [2.5, 3, 5, 10, 20], // Total Saved
};

// Initialize Chart
function renderSpendingSavingsChart() {
    const ctx = document.getElementById("spendingSavingsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: chartData.merchants,
            datasets: [
                {
                    label: "Amount Spent (£)",
                    data: chartData.spending,
                    backgroundColor: "#004b39",
                    borderRadius: 5,
                },
                {
                    label: "Total Saved (£)",
                    data: chartData.savings,
                    backgroundColor: "#00a38d",
                    borderRadius: 5,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: {
                        color: "#333",
                        font: {
                            size: 14,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: "#f5f5f5",
                    titleColor: "#004b39",
                    bodyColor: "#333",
                    borderColor: "#ddd",
                    borderWidth: 1,
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: "#555",
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#555",
                    },
                    grid: {
                        color: "#ddd",
                    },
                },
            },
        },
    });
}

// Initialize Spending Insights
document.addEventListener("DOMContentLoaded", () => {
    populateSpendingTable();
    renderSpendingSavingsChart();
    const currentSpending = 120; // Example current spending
    updateProgressBar(currentSpending);
});

// Rewards Milestones Data
const milestones = [
    { amount: 50, reward: "Free Coffee" },
    { amount: 100, reward: "10% Cashback" },
    { amount: 200, reward: "Gift Voucher" },
    { amount: 300, reward: "Exclusive Deal" },
];

// Update Progress Bar
function updateProgressBar(currentSpending) {
    const progressFill = document.getElementById("progress-fill");
    const maxMilestone = milestones[milestones.length - 1].amount;

    // Calculate progress percentage
    const progressPercentage = Math.min((currentSpending / maxMilestone) * 100, 100);
    progressFill.style.width = `${progressPercentage}%`;

    // Update milestones
    milestones.forEach(({ amount }, index) => {
        const milestoneElement = document.getElementById(`milestone-${amount}`);
        const circle = milestoneElement.querySelector(".circle");

        if (currentSpending >= amount) {
            circle.style.backgroundColor = "#00a38d"; // Active milestone color
            circle.style.borderColor = "#004b39";
        } else {
            circle.style.backgroundColor = "#e0f5f0"; // Inactive milestone color
            circle.style.borderColor = "#ddd";
        }
    });

    // Update progress note
    const progressNote = document.querySelector(".progress-note");
    const nextMilestone = milestones.find(({ amount }) => currentSpending < amount);
    if (nextMilestone) {
        progressNote.innerHTML = `Current Spending: <strong>£${currentSpending.toFixed(
            2
        )}</strong>. Reach £${nextMilestone.amount} to unlock "${nextMilestone.reward}"!`;
    } else {
        progressNote.innerHTML = `Congratulations! You've reached the maximum milestone of £${maxMilestone}.`;
    }
}

// Initialize Progress Bar
document.addEventListener("DOMContentLoaded", () => {
    const currentSpending = 120; // Example current spending
    updateProgressBar(currentSpending);
});
