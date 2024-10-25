const main = document.querySelector(".main");
const items = document.querySelectorAll(".product");
const basket = document.getElementById("basket");
const button = document.createElement("a");
button.textContent = "Оплатить корзину";
button.className = "button";
button.href = "https://lavka.yandex.ru/";
let countOfItemsInBasket = 0;

items.forEach((item) => {
    item.setAttribute('draggable', true);

    item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
        console.log(event.target.id, typeof event.target.id);
        event.dataTransfer.effectAllowed = "move";
    });
});

basket.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
});

basket.addEventListener("drop", (event) => {
    event.preventDefault(); 
    const id = event.dataTransfer.getData("text/plain");
    const draggedItem = document.getElementById(id);
    
    if (draggedItem) {
        basket.appendChild(draggedItem);
        countOfItemsInBasket++;
        if (countOfItemsInBasket > 2) {
            main.appendChild(button);
        }
    } else {
        console.error("No element found");
    }
});

