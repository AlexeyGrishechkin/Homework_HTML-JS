
let books = document.querySelectorAll(".book");


books.forEach((item) => {
    item.onclick = getOrange;
});

function delOrange() {
    books.forEach(book => book.classList.remove('active'));
}

function getOrange() {
    delOrange()
    let data = this.getAttribute("data");
    document.querySelector(`.book[data="${data}"] `).classList.add("active");
}



