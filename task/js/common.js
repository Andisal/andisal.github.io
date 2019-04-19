const button = document.querySelector('.button-case');
const hiddenItems = document.querySelectorAll('.item-hide');


button.addEventListener('click', () => {
    const textButton = button.innerText === 'See more ' ? 'See less ' : 'See more ';
    button.innerHTML = button.innerHTML.replace(button.innerText, textButton )
    toggleElemetns()
})

const toggleElemetns = () => {
    hiddenItems.forEach((item) => {
        if(item.className.indexOf('item-shower') === -1) {
            item.className = item.className + ' item-shower'
        }
        else {
            item.className = item.className.replace(' item-shower', '')
        }
    });
}