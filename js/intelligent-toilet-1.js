$(function () {
    //头部最右边
    $(".site-assistant").hover(function () {
        $(".assistant-switch").find('img').attr('src', '../images/WGY/icon-assistant-close.jpg');
        $('.site-assistant').find('.lists').stop().show(300);
        $('.site-assistant .lists li').stop().hover(function () {
            $(this).find('div').show(300);

        }, function () {
            $('.site-assistant .lists li>div').stop().hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
                $('.site-assistant .lists li').stop().hover(function () {
                    $(this).find('div').show(300);
                }, function () {
                    $(this).find('div').hide();
                });
            });
            $(this).find('div').hide();
        });
    }, function () {
        $(".assistant-switch").find('img').attr('src', '../images/WGY/icon-assistant-open.jpg');
        $('.site-assistant .lists').stop().hide(300);
    });

    //导航栏，明星、产品、技术

    $('.header nav ul li').stop().hover(function () {
        $(this).find('a').css('color', '#0d396c');
    }, function () {
        $(this).find('a').css('color', '#fff');
    });
    $('.submenu').hover(function () {
        var index = $(this).parent('li').index();
        // console.log(index);
        $('.docker-container').show();
        $('.logo a img').attr('src', '../images/WGY/theme-dark-logo.png');
        $('.header nav ul li a').css('color', '#666');
        // console.log($('.docker-container-item:eq(0)'));
        // console.log($('.docker-container-item:eq(1)'));

        if (index == 1) {
            $('.docker-container-item:eq(0)').stop().slideDown(300).siblings().hide();

        } else if (index == 2) {
            $('.docker-container-item:eq(1)').stop().slideDown(300).siblings().hide();
        } else {
            $('.docker-container-item:eq(2)').stop().slideDown(300).siblings().hide();
        };
        $('.docker-container-item').hover(function () {
            $('.docker-container').show();
            $('.logo a img').attr('src', '../images/WGY/theme-dark-logo.png');
            $('.header nav ul li a').css('color', '#666');
        }, function () {
            $('.docker-container').hide();
            $('.logo a img').attr('src', '../images/WGY/theme-bright-logo.png');
            $('.header nav ul li a').css('color', '#fff');
        });

    }, function () {
        $('.docker-container').hide();
        $('.logo a img').attr('src', '../images/WGY/theme-bright-logo.png');
        $('.header nav ul li a').css('color', '#fff');

    })

    //点击框
    $('.filter-property ul li a span').click(function () {
        $(this).parent('a').toggleClass('on');
    });
    // 清除
    $('.control-clear').click(function () {
        $(this).css({ 'text-decoration': 'none', 'color': '#898989' })
        $('.filter-property ul li a').removeClass('on');
    });
    // 下拉列表
    $('.control-property>span').click(function () {
        // $(this).addClass('glyphicon glyphicon-plus');
        if ($(this).hasClass('glyphicon glyphicon-minus')) {
            $(this).attr('class', 'glyphicon glyphicon-plus');
            $(this).parent('a').nextAll('ul').slideUp(600);
        } else {
            $(this).attr('class', 'glyphicon glyphicon-minus');
            $(this).parent('a').nextAll('ul').slideDown(600);
        };
    });
    // 主体hover事件
    $('.product-item .product-item-img').hover(function () {
        $(this).nextAll('.product-item-templete').fadeIn(1000);
        $(this).nextAll('.product-item-templete').hover(function () {
            $(this).stop().fadeIn(1000);
            $(this).find('.templete-img>img').css('transform', 'scale(1.16)');
        }, function () {
            $(this).stop().fadeOut(100);
        })
    })

    // 分页
    $('.pagination li').click(function () {
        $('html').stop().animate({
            'scrollTop': 584
        }, 100);
        var pageIndex = $(this).index();
        if (pageIndex == 1) {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).prev().addClass('active');
        } else if (pageIndex == 2 || pageIndex == 3) {
            $(this).addClass('active').siblings().removeClass('active');
        } else if (pageIndex == 4) {
            $(this).addClass('active').not('.pagination li:eq(5)').siblings().removeClass('active');
            $(this).next().addClass('active');
        };
    });



    // 左书名号
    $('.pagination li:eq(0)').click(function () {
        $('.pagination li').each(function (index, value) {
            if ($(value).hasClass('active')) {
                if (index == 2) {
                    $('.pagination li:eq(1)').addClass('active').siblings().removeClass('active');
                    $('.pagination li:eq(0)').addClass('active');
                    $('.hot-and-new').show();
                    $('.product-list .col-md-12').show().nextAll('.product-list .col-md-4').show().prevAll('.product-list .col-md-4').show();
                } else if (index == 3) {
                    $('.pagination li').eq(index - 1).addClass('active').siblings().removeClass('active');
                    $('.hot-and-new').hide();
                    $('.product-list .col-md-12').hide().prevAll('.col-md-4').show().nextAll('.col-md-4').show();

                } else if (index == 4) {
                    $('.pagination li').eq(index - 1).addClass('active').siblings().removeClass('active');
                    $('.hot-and-new').hide();
                    $('.product-list .col-md-12').hide().nextAll('.col-md-4').hide().prevAll('.col-md-4').show();

                }
            };
        });
    });
    // 右书名号
    $('.pagination li:eq(5)').click(function () {
        $('.pagination li').each(function (index, value) {
            if ($(value).hasClass('active')) {
                console.log(index);
                if (index == 0 || index == 1) {
                    $('.pagination li').eq(2).addClass('active').siblings().removeClass('active');
                };
                if (index == 2) {
                    $('.pagination li').eq(2).addClass('active').siblings().removeClass('active');
                };
                if (index == 3) {
                    $('.pagination li').eq(3).addClass('active').siblings().removeClass('active');

                };
            };
        });
    });
    $('.pagination li:eq(2)').click(function () {
        $('.hot-and-new').hide();
        $('.product-list .col-md-12').hide().prevAll('.col-md-4').show().nextAll('.col-md-4').show();
    });
    $('.pagination li:eq(3)').click(function () {
        $('.hot-and-new').hide();
        $('.product-list .col-md-12').hide().nextAll('.col-md-4').hide().prevAll('.col-md-4').show();
    });
    $('.pagination li:eq(4)').click(function () {
        $('.hot-and-new').hide();
        $('.product-list .col-md-12').hide().prevAll('.col-md-4').hide().nextAll('.col-md-4').hide()
        $('.product-list .col-md-4:last').show();
    });
    $('.pagination li:eq(1)').click(function () {
        $('.hot-and-new').show();
        $('.product-list .col-md-12').show().nextAll('.product-list .col-md-4').show().prevAll('.product-list .col-md-4').show();

    });

    // 下拉列表
    $('#selOrder').on('change', function () {
        var valueStr = $(this).val();
        if (valueStr == "byName") {
            $('.product-list .col-md-12').hide();
            $('.hot-and-new').show();
        } else if (valueStr == "default") {
            $('.product-list .col-md-12').show();
            $('.hot-and-new').show();
        } else {
            $('.hot-and-new').hide();
            $('.product-list .col-md-12').hide()
        }
    })

    // 页脚
    $('.social-wechat').hover(function () {
        $('.social-wechat-pop').stop().slideDown(500);
    }, function () {
        $('.social-wechat-pop').stop().hide(200);
    });

    //回到顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('.go-top').show(300);
        } else {
            $('.go-top').hide(300);
        };
        $('.go-top').click(function () {
            $('html').stop().animate({
                'scrollTop': 0
            }, 1000);
        });
    })
})