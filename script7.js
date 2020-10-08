let books = document.querySelectorAll(".book");

books.forEach((item) => {
  item.onclick = function (e) {
    let data = this.getAttribute("data");
    if (e.ctrlKey) {
      document
        .querySelector(`.book[data="${data}"] `)
        .classList.toggle("active");
    } else if (e.shiftKey) {
      let data1 = this.getAttribute("data");
      for (let i = 0; i < books.length; i++) {
        if (i >= data && i <= data1) {
          document
            .querySelectorAll(`.book[data="${i}"] `)
            .classList.toggle("active");
        }
      }
    } else {
      books.forEach((book) => book.classList.remove("active"));
      let data = this.getAttribute("data");
      document.querySelector(`.book[data="${data}"] `).classList.add("active");
    }
  };
});
