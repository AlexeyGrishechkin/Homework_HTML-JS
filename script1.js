const input = document.querySelector("input");
input.onkeypress = (e) => {
  // if (e.keyCode >= 48 && e.keyCode <= 57) {
  //   return false;
  // } else {
  //   e.preventDefault();
  //   input.value += e.key;
  // }
  console.log(e.keyCode);
};
