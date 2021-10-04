$(function() {
    //头部最右边
    $(".site-assistant").hover(function(){
        $(".assistant-switch").find('img').attr('src','../images/WGY/icon-assistant-close.jpg');
        $('.site-assistant').find('.lists').stop().show(300);
        $('.site-assistant .lists li').stop().hover(function(){
            $(this).find('div').show(300);
           
        },function(){
            $('.site-assistant .lists li>div').stop().hover(function(){
                $(this).show();
            },function(){
                $(this).hide();
                $('.site-assistant .lists li').stop().hover(function(){
                    $(this).find('div').show(300);
                },function(){
                    $(this).find('div').hide();
                })
            })
            $(this).find('div').hide();
        })
    },function(){
        $(".assistant-switch").find('img').attr('src','../images/WGY/icon-assistant-open.jpg');
        $('.site-assistant .lists').stop().hide(300);
    })

    //导航栏，明星、产品、技术
  
    $('.header nav ul li').stop().hover(function(){
        $(this).find('a').css('color','#0d396c');
    },function(){
        $(this).find('a').css('color','#fff');
    })
    $('.submenu').hover(function(){
        var index = $(this).parent('li').index();
        // console.log(index);
        $('.docker-container').show();
        $('.logo a img').attr('src','../images/WGY/theme-dark-logo.png');
        $('.header nav ul li a').css('color','#666');
        // console.log($('.docker-container-item:eq(0)'));
        // console.log($('.docker-container-item:eq(1)'));
        
            if(index == 1){
                $('.docker-container-item:eq(0)').stop().slideDown(300).siblings().hide();
                
            }else if(index == 2){
                $('.docker-container-item:eq(1)').stop().slideDown(300).siblings().hide();
            }else{
                $('.docker-container-item:eq(2)').stop().slideDown(300).siblings().hide();
            }
            $('.docker-container-item').hover(function(){
                $('.docker-container').show();
                $('.logo a img').attr('src','../images/WGY/theme-dark-logo.png');
                $('.header nav ul li a').css('color','#666');
            },function(){
                $('.docker-container').hide();
                $('.logo a img').attr('src','../images/WGY/theme-bright-logo.png');
                $('.header nav ul li a').css('color','#fff');
            })
       
    },function(){
        $('.docker-container').hide();
        $('.logo a img').attr('src','../images/WGY/theme-bright-logo.png');
        $('.header nav ul li a').css('color','#fff');
        
    })
    // 主体-------
    $('.toggle-mask').hover(function(){
        $(this).find('.mask').stop().fadeIn(500);
    },function(){
        $(this).find('.mask').stop().fadeOut(500);
    })

    // 页脚
    $('.social-wechat').hover(function(){
        $('.social-wechat-pop').stop().slideDown(500);
    },function(){
        $('.social-wechat-pop').stop().hide(200);
    })

    //回到顶部
    $(window).scroll(function(){
        if($(window).scrollTop()>70){
            $('.go-top').show(300);
        }else{
            $('.go-top').hide(300);
        };
        $('.go-top').click(function(){
            $('html').stop().animate({
                'scrollTop': 0
            }, 1000);
        })
    })
});