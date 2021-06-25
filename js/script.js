$(document).ready(function(){
    $('.block-carousel .owl-carousel').owlCarousel( {
        items: 1,
        nav: true,
        rewind: true,
    }) 
});

$(document).ready(function(){
    $('.block-slider-carousel').owlCarousel( {
        items: 2,
        nav: true,
        rewind: true,
        dots: false,
        responsive : {
            768 : {
                items: 4
            }
        }

    }) 
});;
$(document).ready(function() {
    $(".footer-top > div:not(.footer-logo) .footer-text-title").on('click', function(){
        if($(window).width() < 768) {
            $(this).parent().toggleClass("open");
        }
    })

    $(".block-blog-sidebar-wrapper .block-blog-sidebar-title").on('click', function(){
        if($(window).width() < 768) {
            $(this).parent().toggleClass("open");
        }
    })
});;
$(document).ready(function() {
    $('select').niceSelect();
  });;
$(document).ready(function(){
    $(document).on('submit', "form", function(e){
        e.preventDefault();
        results = $(this).serialize();
        $.post( 'https://www.test.com/', results, function(data) {
        })
          .done(function() {
            alert( "Успешно отправлено" );
          })
          .fail(function() {
            alert("Информация отправлена, но получена ошибка. Отправленная информация выведена в консоль");
            console.log(results);
          })
    });
});;
$(document).ready(function(){
    $(".like:not(.mobile)").on("click", function(){
        if( $(this).hasClass("liked") ) {
            $(this).removeClass("liked");
            $(this).text("Like this");
        } else {
            $(this).addClass("liked");
            $(this).html('liked <i class="fas fa-heart" style="color: red"></i>');
        }
    });
    $(".like.mobile").on("click", function(){
        if( $(this).hasClass("liked") ) {
            $(this).removeClass("liked");
        } else {
            $(this).addClass("liked");
        }
    });
});;
$(document).ready(function(){
    let dates = [];
    dates[0] = new Date(2021,0,15);
    dates[1] = new Date(2021,4,5);
    dates[2] = new Date(2020,10,25);
    dates[3] = new Date(2021,3,7);
    dates[4] = new Date(2020,12,19)
    dates[5] = new Date(2021,0,2)
    dates[6] = new Date(2020,0,7)
    dates[7] = new Date(2021,5,5);
    dates[8] = new Date(2020,2,15);
    dates[9] = new Date(2021,0,15);


    function format(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' +(d <= 9 ? '0' + d : d)+ '-' + (m<=9 ? '0' + m : m) + '-'  + y ;
    }
    $('.article-header-date, .popular-article-date').each(function(i){
        $(this).text(format(dates[i]));
    });
});;
$(document).ready(function(){
    $(document).on('click', '.block-cases-menu-link:not(.active)', function(){
        console.log($(this));
        console.log($('.block-cases-menu-link').eq(1));
        if ($(this).is($('.block-cases-menu-link').eq(0))) {
            $('.block-case-blocks').css("flex-direction", "");
            $('.block-case-item').fadeIn();
            $('.block-cases-menu-link').removeClass("active");
            $(this).addClass("active");
        } else if ($(this).is($('.block-cases-menu-link').eq(1))) {
            $('.block-case-item').show();
            $('.block-case-blocks').css("flex-direction", "row");
            $('.block-case-item').eq(0).fadeOut("fast");
            $('.block-case-item').eq(4).fadeOut("fast");
            $('.block-case-item').eq(5).fadeOut("fast");
            $('.block-case-item').eq(6).fadeOut("fast");
            $('.block-cases-menu-link').removeClass("active");
            $(this).addClass("active");
        } else if ($(this).is($('.block-cases-menu-link').eq(2))) {
            $('.block-case-item').show();
            $('.block-case-blocks').css("flex-direction", "row");
            $('.block-case-item').eq(1).fadeOut("fast");
            $('.block-case-item').eq(2).fadeOut("fast");
            $('.block-case-item').eq(3).fadeOut("fast");
            $('.block-case-item').eq(5).fadeOut("fast");
            $('.block-cases-menu-link').removeClass("active");
            $(this).addClass("active");
        }   else if ($(this).is($('.block-cases-menu-link').eq(3))) {
            $('.block-case-item').show();
            $('.block-case-blocks').css("flex-direction", "row");
            $('.block-case-item').eq(0).fadeOut("fast");
            $('.block-case-item').eq(1).fadeOut("fast");
            $('.block-case-item').eq(2).fadeOut("fast");
            $('.block-case-item').eq(3).fadeOut("fast");
            $('.block-case-item').eq(4).fadeOut("fast");
            $('.block-cases-menu-link').removeClass("active");
            $(this).addClass("active");
        }
    });
});;
$(document).ready(function(){
    
    function indexOfCI(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      
        return a.indexOf(b);
      }

    $(".block-blog-search").on("input keydown", function() {
        let str = $(this).val();
        console.log(str);
        if (!str) {
            $('.block-blog-popular-article, .block-blog-article').fadeIn();
        } else {
            $('.block-blog-popular-article, .block-blog-article').each(function(){
                let text = $(this).find("*").text();
                    
                    if(indexOfCI(text, str) >= 0) {
                    $(this).fadeIn();
                } else {
                    $(this).fadeOut();
                }
            });
        }   
    });
});
;

