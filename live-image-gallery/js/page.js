const chk = document.getElementById('chk');

if(chk) {
    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

if(floating_btn) {
    floating_btn.addEventListener('click', () => {
        social_panel_container.classList.toggle('visible')
    });
}
if(close_btn) {
    close_btn.addEventListener('click', () => {
        social_panel_container.classList.remove('visible')
    });
}