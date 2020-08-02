$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        prevArrow: "<img src='img/leftArrow.png' class='prev' alt='1'>",
        nextArrow: "<img src='img/rightArrow.png' class='next' alt='2'>",
        infinite: true,
    });
    $(".navigation_Header ul li a").mPageScroll2id({
        scrollSpeed:1500,
        scrollEasing: String,
    })
    $(".NavTopArrow").mPageScroll2id({
        scrollSpeed: 1500,
        scrollEasing: String,
    })
    $('.img_BtnF').on("click",function(){
        $('.text_SlideF').slideToggle(100);
        $('.headtextAboutUsF').toggleClass('active');
        $('.AboutUsClickImgF').toggleClass('activePlus');
    })
    $('.img_BtnS').on("click", function(){
        $('.text_SlideS').slideToggle(100);
        $('.headtextAboutUsS').toggleClass('active');
        $('.AboutUsClickImgS').toggleClass('activePlus');
    })
    $('.img_BtnT').on("click", function(){
        $('.text_SlideT').slideToggle(100);
        $('.headtextAboutUsT').toggleClass('active');
        $('.AboutUsClickImgT').toggleClass('activePlus');
    })

    $('.PortfolioIllustration').addClass('active');
    $('.PortfolioDigitalArt').removeClass('active');
    $('.PortfolioWebdesign').removeClass('active');
    $('.PortfoliollustrationBlock').addClass('active_Block');
    $('.PortfolioDigitalArtBlock').removeClass('active_Block');
    $('.PortfolioWebdesignBlock').removeClass('active_Block');

    $('.PortfolioIllustration').on("click",()=>{
        $('.PortfolioIllustration').addClass('active');
        $('.PortfolioDigitalArt').removeClass('active');
        $('.PortfolioWebdesign').removeClass('active');
        $('.PortfoliollustrationBlock').addClass('active_Block');
        $('.PortfolioDigitalArtBlock').removeClass('active_Block');
        $('.PortfolioWebdesignBlock').removeClass('active_Block');
    });

    $('.PortfolioDigitalArt').on("click", () => {
        $('.PortfolioIllustration').removeClass('active');
        $('.PortfolioDigitalArt').addClass('active');
        $('.PortfolioWebdesign').removeClass('active');
        $('.PortfoliollustrationBlock').removeClass('active_Block');
        $('.PortfolioDigitalArtBlock').addClass('active_Block');
        $('.PortfolioWebdesignBlock').removeClass('active_Block');
    });

    $('.PortfolioWebdesign').on("click", () => {
        $('.PortfolioIllustration').removeClass('active');
        $('.PortfolioDigitalArt').removeClass('active');
        $('.PortfolioWebdesign').addClass('active');
        $('.PortfoliollustrationBlock').removeClass('active_Block');
        $('.PortfolioDigitalArtBlock').removeClass('active_Block');
        $('.PortfolioWebdesignBlock').addClass('active_Block');
    });

    $('.sliderMiddle').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: 4000,
        dots: true,
        infinite: true,
    });

    $('.FineUsHere .body .send_messageBtn').on('click',function(){
        $('.FineUsHere .body .FineUsHereForm').show();
        $('.FineUsHere .body .send_messageBtn').css({"opacity":"0.7"});

    });
    $('.FineUsHere .body .FineUsHereForm .CloseCross').on('click',()=>{
        $('.FineUsHere .body .FineUsHereForm').hide();
        $('.FineUsHere .body .send_messageBtn').css({ "opacity": "1" });
    });

    $(".mobile_menuIcon").on('click',()=>{
        $('.header .navigation_Header .content ul').toggleClass('show_mobileMenu');
        if ($('.header .navigation_Header .content ul').hasClass('show_mobileMenu')) {
            $('.header .navigation_Header .mobile_menuIcon img').attr("src", "img/menuActive.png");
            $('.ReadAboutCreativia').css({"z-index":"1"})
        } else {
            $('.header .navigation_Header .mobile_menuIcon img').attr("src", "img/menu.png");
            $('.ReadAboutCreativia').css({ "z-index": "5" })
        };
    });

    $('header.header .present .ReadAboutCreativia').on("click", function(){
        $('header.header .present .Under_preview').toggleClass("AboudCreativiaActiveText");
        if ($('header.header .present .Under_preview').hasClass('AboudCreativiaActiveText')){
            $('header.header .present .ReadAboutCreativia').css({"margin-bottom":"25px"});
            $('header.header .present .ReadAboutCreativia').text('Close');
        }else{
            $('header.header .present .ReadAboutCreativia').text('Read about it');
            $('header.header .present .ReadAboutCreativia').css({ "margin-bottom": "127px" });
        }
    });
})
//Form
$('#SubmitButton').on('click',()=>{
    if ($('#Name').val() == "") {
        $("#ErrorsMessage").text("Please, write your name");
        return false;
    } else if ($('#Email').val() == "") {
        $("#ErrorsMessage").text("Please, write your email");
        return false;
    } else if ($('#Subject').val() == "") {
        $("#ErrorsMessage").text("Please, write subject");
        return false;
    } else if ($('#Message').val().length < 5) {
        $("#ErrorsMessage").text("Please, write more text");
        return false;
    }
    $("#ErrorsMessage").text("");
    $.ajax({
        url:"ajax/main.php",
        type:'post',
        cache:false,
        data: $('#form_container input,textarea').serialize(),
        errors:function(){
            $('#ErrorsMessage').text('An error has occurred');
        },
        dataType:"html",
        beforeSend:function(){
            $('#SubmitButton').prop("disabled",true);
            $('#ErrorsMessage').text('Your message is sending...');
            $('#SubmitButton').addClass('beforeSendFormBtn');
        }
    }).done(function(){
        $('#form_container').trigger("reset");
        $('#SubmitButton').removeClass('beforeSendFormBtn');
        $("#SubmitButton").prop("disabled", false);
    })
    
})