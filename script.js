console.log("TR Roti Canai");

function showPage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('page-' + pageId).classList.add('active');

    const carousel = document.getElementById("carouselCanai");
    const judul = document.getElementById("judulKeunggulan");

    if(pageId === "home"){
        carousel.style.display = "block";
        judul.style.display = "block";
    }else{
        carousel.style.display = "none";
        judul.style.display = "none";
    }

    window.scrollTo(0,0);
}

document.addEventListener("DOMContentLoaded", function () {
    showPage("home");
});
