let pc = document.querySelector(".pc");

pc.addEventListener("click", (e) => {
  let disk = e.target.children[0];
  disk.classList.toggle("hidden");
});
