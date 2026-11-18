const amount = document.getElementById("amount");
const notice = document.getElementById("notice");
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-amount]").forEach(button => {
  button.addEventListener("click", () => { amount.value = button.dataset.amount; });
});
document.getElementById("continue").addEventListener("click", () => {
  const value = Number(amount.value);
  if (!Number.isFinite(value) || value < 2) {
    notice.textContent = "Enter at least $2.00. The payment provider's current minimum must be checked before accepting a payment.";
    return;
  }
  notice.textContent = "Preview only: payment creation is not connected. No QR code or payment address has been generated, and you must not send funds.";
});
