'use strict';

//---------------Animation--------------------------------------------------------------------------------
let wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();

//----------Slider-------------------------------------------------------------------------
$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        variableWidth: true,
        // adaptiveHeight: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1507,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });


    //------------Magnific PopUp---------------------------------------------------

    $('.product-image').magnificPopup({
        type: 'image'
    });

    //------------Menu Open---------------------------------------------------------

    let burger = $('.burger');
    let subMenu = $('.sub-menu');
    let menuClose = $('.sub-menu-close');

    burger.on('click', function (e) {
        subMenu.show();
    })

    menuClose.on('click', function (e) {
        subMenu.hide();
    })

    //---------------Scroll to Block---------------------------------------------------------

    let scrollToBlock = $('.go-to-scroll');
    let consultBlock = $('#consultation');

    scrollToBlock.on("click", function (e) {
        consultBlock[0].scrollIntoView({behavior: "smooth", block: "center"})
    });

    //--------------Show Dop Projects--------------------------------------------------------

    let seeMore = $('.more-projects');
    seeMore.on("click", function (e) {
        $('.dop-projects').show();
        seeMore.hide();
    });

    //-------------Checkbox--------------------------------------------------------

    let checkbox = $('#checkbox');
    let tick = $('.bird-style:before');

    checkbox.click(function (e) {
        let checkStatus = $(this).prop('checked');
        if (checkStatus) {
            tick.show();
        } else {
            tick.hide();
        }
    })

    //------------Go To Pop Up ----------------------------------------------------

    let OpenPopUp = $('.go-to-pop-up');
    let PopUp = $('.pop-up');
    let PopUpClose = $('.pop-up-close');
    let successPopUpClose = $('.success-close-pop-up');
    let successPopUpBlock = $('.success-pop-up');

    OpenPopUp.on('click', function (e) {
        PopUp.show();
    })

    PopUpClose.on('click', function (e) {
        PopUp.hide();
    })

    successPopUpClose.click(function (e) {
        successPopUpBlock.hide();
    })

    //-------------Techno Block----------------------------------------------------
    let techCircle1 = $('.tech-circle-1');
    let techCircle2 = $('.tech-circle-2');
    let techCircle3 = $('.tech-circle-3');
    let techCircle4 = $('.tech-circle-4');
    let techCircle5 = $('.tech-circle-5');

    let adapHoverItem1 = $('.adaptive-hover-item-1');
    let adapHoverItem2 = $('.adaptive-hover-item-2');
    let adapHoverItem3 = $('.adaptive-hover-item-3');
    let adapHoverItem4 = $('.adaptive-hover-item-4');
    let adapHoverItem5 = $('.adaptive-hover-item-5');

    techCircle1.click(function (e) {
        adapHoverItem1.show();
        adapHoverItem2.hide();
        adapHoverItem3.hide();
        adapHoverItem4.hide();
        adapHoverItem5.hide();
    })
    techCircle2.click(function (e) {
        adapHoverItem2.show();
        adapHoverItem1.hide();
        adapHoverItem3.hide();
        adapHoverItem4.hide();
        adapHoverItem5.hide();
    })
    techCircle3.click(function (e) {
        adapHoverItem3.show();
        adapHoverItem1.hide();
        adapHoverItem2.hide();
        adapHoverItem4.hide();
        adapHoverItem5.hide();
    })
    techCircle4.click(function (e) {
        adapHoverItem4.show();
        adapHoverItem1.hide();
        adapHoverItem3.hide();
        adapHoverItem2.hide();
        adapHoverItem5.hide();
    })
    techCircle5.click(function (e) {
        adapHoverItem5.show();
        adapHoverItem1.hide();
        adapHoverItem3.hide();
        adapHoverItem4.hide();
        adapHoverItem2.hide();
    })

    //--------------AJAX------------------------------------------------------------
    let loader = $('.loader');
    let hasError = false;
    let button = $('#submit');
    let name = $('#name');
    let phone = $('#phone');
    let popUpName = $('#pop-up-name');
    let popUpPhone = $('#pop-up-phone')
    let popUpButton = $('.pop-up-button');
    let thxForOrder = $('.thx-for-order');
    let errVal = $('.err-val');
    phone.inputmask({"mask": "+999 (999) 99-99"});
    popUpPhone.inputmask({"mask": "+999 (999) 99-99"});


    button.click(function (e) {
        hasError = false;
        if (!name.val()) {
            name.next().show();
            name.addClass('err-br');
            hasError = true;
        } else {
            name.removeClass('err-br');
            errVal.hide();
        }
        if (!phone.val()) {
            phone.next().show();
            phone.addClass('err-br');
            hasError = true;
        } else {
            phone.removeClass('err-br');
            errVal.hide();
        }
        if (!hasError) {
            sendForm();
        }
    })


    function sendForm() {
        loader.show();
        $.ajax({
            method: "post",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val()}
        }).done(function (serverAnswer) {
            loader.hide();
            if (Object.values(serverAnswer)['0'] === 1) {
                $('.title-block').hide();
                $('.form-block').hide();
                thxForOrder.show();
            } else {
                alert('Повторите заявку!');
            }
        });
    }


    popUpButton.click(function (e) {
        hasError = false;
        if (!popUpName.val()) {
            popUpName.next().show();
            popUpName.addClass('err-br');
            hasError = true;
        } else {
            popUpName.removeClass('err-br');
            errVal.hide();
        }
        if (!popUpPhone.val()) {
            popUpPhone.next().show();
            popUpPhone.addClass('err-br');
            hasError = true;
        } else {
            popUpPhone.removeClass('err-br');
            errVal.hide();
        }
        if (!hasError) {
            sendFormPopUp();
        }
    })

    function sendFormPopUp() {
        loader.show();
        $.ajax({
            method: "post",
            url: "https://testologia.site/checkout",
            data: {name: popUpName.val(), phone: popUpPhone.val()}
        }).done(function (serverAnswer) {
            loader.hide();
            if (Object.values(serverAnswer)['0'] === 1) {
                $('.pop-up').hide();
                successPopUpBlock.show();
            } else {
                alert('Повторите заявку!');
            }
        });
    }

});





