function showPage(pageId) {
    const currentPage = document.querySelector('.container:not(.hidden)');
    if (currentPage) {
        currentPage.classList.add('hidden');
    }
    const newPage = document.getElementById(pageId);
    newPage.classList.remove('hidden');
    newPage.style.opacity = 0; // Mulai dengan opacity 0
    setTimeout(() => {
        newPage.style.transition = "opacity 0.5s ease-in-out";
        newPage.style.opacity = 1; // Fade in
    }, 10);
}

function goBack() {
    const currentPage = document.querySelector('.container:not(.hidden)');
    if (currentPage) {
        currentPage.style.opacity = 0; // Mulai dengan opacity 0
        setTimeout(() => {
            currentPage.classList.add('hidden');
            document.getElementById('home').classList.remove('hidden');
            document.getElementById('home').style.opacity = 0; // Mulai dengan opacity 0
            setTimeout(() => {
                document.getElementById('home').style.transition = "opacity 0.5s ease-in-out";
                document.getElementById('home').style.opacity = 1; // Fade in
            }, 10);
        }, 500); // Tunggu animasi selesai sebelum menyembunyikan
    }
}