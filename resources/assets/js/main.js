jQuery.fn.toggleFlexbox = function() {
    var elm = $(this[0]);
    if(elm.css('display') === "none"){
        elm.css('display', '-webkit-flex');
        $('.Menu').css({'height':'100%'});
        $('.Menu__container').css({'flex-direction':'column'});
        $('.Menu__logo').css({'justify-content':'center','align-items':'center'});
        return;
    }else{
        elm.slideUp('fast');
        $('.Menu').css({'height':'auto'});
        $('.Menu__container').css({'flex-direction':'row'});
        $('.Menu__logo').css({'justify-content':'center','align-items':'flex-start'});
        return;
    }
};
jQuery.fn.flexboxDown = function() {
    var elm = $(this[0]);
        elm.css('display', '-webkit-flex');
        return;
};
jQuery.fn.flexboxUp = function() {
    var elm = $(this[0]);
    elm.slideUp('fast');
    $('.Menu').css({'height':'auto'});
    $('.Menu__container').css({'flex-direction':'row'});
    $('.Menu__logo').css({'justify-content':'center','align-items':'flex-start'});
    return;
};
jQuery(window).resize(function(){
    $windowWidth = $(window).width();
    if($windowWidth<760) {
        $('.Menu__elements').flexboxUp();
    }
    else {
        $('.Menu__elements').flexboxDown();
    }
    });
jQuery(document).ready(function($) {
    $windowWidth = $(window).width();
    $('#Menu__collapse').click(function(event) {
        $('.menu-item').slideToggle('slow');
        $('.menu-item').css({'display':'flex'})
    });
    $('#submitContactForm').submit(function(event) {
        event.preventDefault();
        var that=$(this);
        $.post(myAjax.ajaxurl,
            that.serialize(),
            function(result){
                console.log(result);
                alert('your message was sent');
            }
        );
        console.log('Enviado');
    });
    $('.Menu__toogler').click(function(){
        $('.Menu__elements').toggleFlexbox();
    });

//    Effects
    $('.Menu__element a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 1500);
        if($windowWidth<760){
            $('.Menu__elements').flexboxUp();
        }
        return false;
    });
    // init controller

});
$(window).on("load", function() {
    // Position initial imagenmovil
    var imagenInicial=$('.Flex.Flex__imageContainer').eq(0),
        imagenHorizontal=$('.Flex__imageContainer--vertical'),
        imagenInicialTopPosition=imagenInicial.offset().top+imagenInicial.height()*0.75,
        imagenInicialLeftPosition=imagenHorizontal.offset().left+(imagenHorizontal.width()/1.9);


    $('.imagenmovil').css({'left':imagenInicialLeftPosition,'top':imagenInicialTopPosition});
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: (0.5)
        }
    });
    var lastAnimationImage= $('.Flex .Flex__imageContainer').eq(2);
    var lastAnimationImageBottomPosition=lastAnimationImage.offset().top+lastAnimationImage.height()-50;
    var animationHeight=lastAnimationImageBottomPosition-imagenInicialTopPosition;
    console.log(animationHeight);
    var firstAnimation = new TimelineMax(),

        elementTextRight=$('.Flex--no-margin-top').eq(0),
        cochinoContenedor=$('.Flex__imageContainer').eq(0),
        heightCochino=$('.Flex .Flex__imageContainer img').eq(0).height(),
        startHeight=($windowWidth<760)?heightCochino-40:1;

    firstAnimation.insert(TweenMax.fromTo(cochinoContenedor,3,{height:startHeight,opacity:0},{height:heightCochino,opacity:1}))
        .insert(TweenMax.from(elementTextRight,3,{'margin-top':0}));
    var scene1= new ScrollMagic.Scene({triggerElement: "#PrimerPaso", duration: heightCochino})
        .setTween(firstAnimation)
        //.addIndicators()
        .addTo(controller);

    var secondAnimation= new TimelineMax(),
        duration=$('#Nosotros').height();
    objetive=$('.Flex__imageContainer img').eq(1);
    secondAnimation.insert(TweenMax.from(objetive,1,{opacity:0}))
        .insert(TweenMax.from('.imagenmovil',1,{opacity:0}));
    var scene2= new ScrollMagic.Scene({triggerElement: "#Nosotros", duration: duration})
        .setTween(secondAnimation)
        //.addIndicators({indent:2})
        .addTo(controller);
    //
    //
    var thirdAnimation= new TimelineMax(),
        duration=$('#Nosotros2').height()-300,
        objetivo=$('.Flex__imageContainer--vertical'),
        maxWidth=$('.Flex__imageContainer--vertical img').width();
    console.log(maxWidth);
    thirdAnimation.insert(TweenMax.fromTo(objetivo,1,{width:1},{width:maxWidth}));
    //thirdAnimation.insert(TweenMax.from('.imagenmovil',1,{opacity:0}));
    var scene3= new ScrollMagic.Scene({triggerElement: "#Nosotros2", duration: duration})
        .setTween(thirdAnimation)
        //.addIndicators()
        .addTo(controller);
    //
    ////
    var permanentAnimation= new TimelineMax(),
        imagenFinalLeftPosition=imagenInicialLeftPosition*2/2.5;
    permanentAnimation.insert(TweenMax.to('.imagenmovil',1,{top:lastAnimationImageBottomPosition,left:imagenFinalLeftPosition,rotation: 360}));
    var permanentScene= new ScrollMagic.Scene({triggerElement: "#Nosotros", duration: animationHeight})
        .setTween(permanentAnimation)
        //.addIndicators({name: "Permanent",indent:1})
        .addTo(controller);

});