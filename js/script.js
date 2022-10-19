
// ==> bg nav-bar
let about = $("#properties").offset().top;


$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > about - 50) {
        console.log("equal");
        $('#main-nav').css("backgroundColor", "rgba(51,51,51,1)")
        $('#main-nav').css("padding-top", "0")
        $('#btnUp').fadeIn(1000)
    }
    else {
        console.log("noteq");
        $('#main-nav').css("backgroundColor", "transparent")
        $('#main-nav').css("padding-top", "5px")
        $('#btnUp').fadeOut(1000)
    }
})

/*---------------------------------------------------*/

// ==> carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/*---------------------------------------------------*/

// ===> aHref func
$("a[href^='#']").click(function (e) {

    let aHref = $(e.target).attr("href")

    let SectionLink = $(aHref).offset().top;
    console.log(SectionLink);

    $("html , body").animate({ scrollTop: SectionLink }, 200);

})

/*---------------------------------------------------*/

// ===> btnup func
$("#btnUp").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 300);
})

/*---------------------------------------------------*/


