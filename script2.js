let btn = document.querySelector('.btn')
btn.onclick = () => {
    let modalWindow = document.querySelector('.modal').classList.remove('hidden')
};

let btnClose = document.querySelector('.btn-close')
btnClose.onclick = () => {
    let modalClose = document.querySelector('.modal').classList.add('hidden')
}