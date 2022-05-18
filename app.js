const eventBtn = document.getElementById('btns').children[1];
const eventbar = document.getElementById('Events');

const homeBar = document.getElementById('Home');
const homeBtn = document.getElementById('btns').children[0];


eventBtn.addEventListener('click', () => {
    // alert('hi');
    homeBar.className = 'hid';
    eventbar.className = 'show';
})

homeBtn.addEventListener('click', () => {
    homeBar.className = '';
    eventbar.className = ''
})