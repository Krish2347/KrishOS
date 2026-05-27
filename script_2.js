let button = document.getElementById('sign-in');
let loading = document.getElementById('loading_bar');
setTimeout(() => {
button.style.display = 'Block';
loading.remove();
}, 6500);
let temp = document.getElementById('temp');
function launch() {
    document.documentElement.requestFullscreen();
    button.remove();
    document.getElementById('desktop_container').style.display = 'Block'
}