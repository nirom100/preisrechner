let total = 0;

function calculateTotal(item, price) {
  total = total + price;
  addItemToList(item, price);
  updateSumView(total);
  console.log("total price: " + total + "€");
}

function resetSum() {
  total = 0;
  updateSumView(total);
  resetList();
}

function resetList() {
  const list = document.getElementById("order-list");
  list.replaceChildren();
}

function inHouse() {
  alert("Bestellung für Vor Ort abgeschlossen! Gesamtbetrag: " + total + " €");
  resetSum();
}

function delivery() {
  if (total < 20) {
    alert(
      "Mindestbestellwert für Lieferung: 20,00€. Aktueller Betrag: " +
        total +
        " €",
    );
  } else {
    total = total + 2.5;
    alert(
      "Bestellung für Lieferung abgeschlossen! Gesamtbetrag: " + total + " €",
    );
    resetSum();
  }
}

function addItemToList(item, price) {
  const list = document.getElementById("order-list");
  const p = document.createElement("p");
  p.textContent = item + " - " + price + " €";
  list.appendChild(p);
  list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
}

function updateSumView(sum) {
  document.getElementById("totalsum").innerHTML = sum + " €";
}
