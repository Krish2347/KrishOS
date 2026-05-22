function fullscreen() {
    document.documentElement.requestFullscreen();
    document.getElementById('fullscreen_button').remove();
    let video = document.getElementById('startup_animation')
    video.style.display = 'Block';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.position = 'Fixed';
    document.getElementById('startup_container').style.background = 'Black';
    document.getElementById('welcome').remove();
    let logo = document.getElementById('logo')
    logo.style.display = 'Block'
    document.getElementById('loading').style.display = 'Block';
    document.getElementById('loading_message').style.display = 'Block';
    setTimeout(() => {
    window.location.href = "desktop.html";
    }, 5000);
}