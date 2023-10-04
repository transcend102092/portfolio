$(function(){
    // alert('con')

    $('.main_link > ul > li').mouseenter(function(){
        
        $(this).stop().addClass('on')
    })

    $('.main_link > ul > li').mouseleave(function(){
        $(this).stop().removeClass('on')
    })
})