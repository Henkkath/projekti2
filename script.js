const buttonElement = document.querySelector('#Hae');
const inputElement = document.querySelector('#inputValue');



buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log('Value: ', value);
    console.log('Mitäää, tää toimii oikeesti!!');
}