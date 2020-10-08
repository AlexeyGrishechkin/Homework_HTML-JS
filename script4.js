let index = 0;
let btn = document.querySelector('.btn')
btn.onclick = () => {
    index = index +1
    const red = document.querySelector('.red')
    const yellow = document.querySelector('.yellow')
    const green = document.querySelector('.green')
switch (index) {
    case 1:
        red.style.background = 'gray';
        yellow.style.background = 'yellow';
        break;
    case 2:
        green.style.background = 'green'
        yellow.style.background = 'gray';
        break;
    case 3:
        red.style.background = 'red';
        green.style.background = 'gray';
        index = 0;
        break;
}
};

