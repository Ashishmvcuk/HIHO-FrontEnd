// Financial Health Score Calculation
document.getElementById("calculate-health-score")?.addEventListener("click", () => {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const debts = parseFloat(document.getElementById("debts").value);

    // Validate inputs
    if (isNaN(income) || isNaN(expenses) || isNaN(savings) || isNaN(debts)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculate score
    const financialScore = Math.max(
        0,
        Math.min(100, Math.round((savings - debts + (income - expenses) * 6) / 100))
    );

    // Display result
    const resultDiv = document.getElementById("health-score-result");
    resultDiv.innerHTML = `
        <p>Your Financial Health Score: <strong>${financialScore}</strong></p>
        ${financialScore < 50
            ? "<p>Consider reducing expenses and paying off debts to improve your score.</p>"
            : "<p>Great job! Keep saving and managing your finances wisely.</p>"
        }
    `;
});

// Manage Subscriptions (Placeholder for functionality)
document.getElementById("manage-subscriptions")?.addEventListener("click", () => {
    alert("Subscription management feature coming soon!");
});

// Debt Management Assistant (Placeholder for functionality)
document.getElementById("debt-management")?.addEventListener("click", () => {
    alert("Debt management assistant feature coming soon!");
});

// Personalized Offers (Dynamic Offer Loading)
document.addEventListener("DOMContentLoaded", () => {
    const offersDiv = document.getElementById("offers-list");
    if (offersDiv) {
        // Example offers
        const offers = [
            { title: "15% off at Café Nero", description: "Save on your next coffee." },
            { title: "£5 cashback at Tesco", description: "Earn cashback on groceries." },
            { title: "10% discount on energy bills", description: "Switch providers and save." },
        ];

        offers.forEach((offer) => {
            const offerItem = document.createElement("div");
            offerItem.classList.add("offer-item");
            offerItem.innerHTML = `
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
            `;
            offersDiv.appendChild(offerItem);
        });
    }
});

// Feedback Form Submission
document.getElementById("feedback-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;

    if (name && feedback) {
        alert(`Thank you for your feedback, ${name}!`);
        document.getElementById("feedback-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});


// Tax Optimizer: Calculate Tax Savings
document.getElementById("calculate-tax-savings")?.addEventListener("click", () => {
    const income = parseFloat(document.getElementById("annual-income").value);
    const pension = parseFloat(document.getElementById("pension-contributions").value);
    const isa = parseFloat(document.getElementById("isa-contributions").value);
    const otherAllowances = parseFloat(document.getElementById("other-allowances").value);

    // Validate inputs
    if (isNaN(income) || isNaN(pension) || isNaN(isa) || isNaN(otherAllowances)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Tax calculation logic
    const basicRateAllowance = 12570; // Personal allowance for basic rate
    const taxableIncome = Math.max(0, income - basicRateAllowance - pension - isa - otherAllowances);
    const basicRateTax = Math.min(37700, taxableIncome) * 0.2; // 20% tax on basic rate
    const higherRateTax = Math.max(0, taxableIncome - 37700) * 0.4; // 40% tax on higher rate
    const totalTax = basicRateTax + higherRateTax;

    const taxSavings = income - totalTax;

    // Display results
    const resultDiv = document.getElementById("tax-savings-result");
    resultDiv.innerHTML = `
        <p>Your estimated tax savings: <strong>£${(income - taxableIncome).toFixed(2)}</strong></p>
        <p>Your total taxable income: <strong>£${taxableIncome.toFixed(2)}</strong></p>
        <p>Estimated taxes payable: <strong>£${totalTax.toFixed(2)}</strong></p>
    `;
});
