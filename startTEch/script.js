document.addEventListener("DOMContentLoaded", function () {
    console.log("StartTech Website Loaded Successfully!");

    let btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("mouseover", function () {
            btn.style.transform = "scale(1.1)";
        });
        btn.addEventListener("mouseout", function () {
            btn.style.transform = "scale(1)";
        });
    });
});
