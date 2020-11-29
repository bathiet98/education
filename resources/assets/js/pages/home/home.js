import'owl.carousel'
var Home = {
    init : function ()
    {
        console.log('init home')
        this.runBanner()

    },

    runBanner()
    {
        $('.js-banner').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    }
}

$(function (){
    Home.init();
})
