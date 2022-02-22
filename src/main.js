import './style.css';
$(document).ready(function () {
        $(document).on("click", ".next", function () {
        const currentImg = $(".active")
        const nextImg = currentImg.next()
    
        if (nextImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            nextImg.addClass("active").css("z-index", 10)
        }
        })
    
        $(".prev").on("click", function () {
        const currentImg = $(".active")
        const prevImg = currentImg.prev()
    
        if (prevImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            prevImg.addClass("active").css("z-index", 10)
        }
        })
    })
    
    const button = document.getElementById("button");
    const text = document.getElementById("d1");

        document.getElementById("button").hide()
        $(button).hide();
        $(button).style.display = "none"
        text.style.display = "none";
    