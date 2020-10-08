let area = null;
let text = document.querySelector('.text')

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.code == 'KeyE') {
        e.preventDefault();
        Edit()
    }
})

function Edit() {
    area = document.createElement('textarea')
    area.className = 'edit'
    area.value = text.innerHTML

    area.onkeydown = function (e) {
        if (e.ctrlKey && e.code == 'KeyS') {
            e.preventDefault();
            this.blur()

        }
    };

    area.onblur = function () {
        editSave()
    }

    text.replaceWith(area)
    area.focus()
}

function editSave() {
    text.innerHTML = area.value
    area.replaceWith(text)
}