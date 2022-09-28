const lables = document.querySelectorAll('.form-control label')

lables.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span>${letter}</span>`)
        .join('')
})