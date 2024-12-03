// Map toggling functionality
function showCashbackMap() {
    const map = document.getElementById("map");
    map.src = "assets/map-static.png";
}

function showSustainableMap() {
    const map = document.getElementById("map");
    map.src = "assets/map-static.png";
}

// Navigate to Offers Page
function navigateToOffers() {
    window.location.href = "offers.html";
}

// Handle "Send to Savings" Button
document.getElementById("send-to-savings").addEventListener("click", () => {
    alert("£150 sent to your savings account!");
});
