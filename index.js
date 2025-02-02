function updateLayout() {
    const content = document.getElementById('content');
    const screenWidth = document.documentElement.clientWidth;

    content.innerHTML = '';

    if (screenWidth < 820) {
        content.innerHTML = `
            <p>We're here<span class="last"></span></p>
            <p>to <span></span> make</p>
            <p><span class="first"></span> healthy living</p>
            <p>effortless, so you</p>
            <p>can<span></span>live longer</p>
            <p>and happier<span class="last"></span></p>
        `;
    } else {
        content.innerHTML = `
            <p>We're here<span></span>to make</p>
            <p>healthy<span></span>living effortless,</p>
            <p>so you can<span></span>live longer</p>
            <p>and happier<span class="last"></span></p>
        `;
    }
}

window.onload = updateLayout;
window.onresize = updateLayout;