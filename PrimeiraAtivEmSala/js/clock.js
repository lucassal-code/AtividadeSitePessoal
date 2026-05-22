//relógio

setInterval(() => {
    const time = new Date();
    document.body.innerHTML = time.toLocaleDateString();
}, 1000);