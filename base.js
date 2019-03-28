if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
};


$(function() {

    // // iframe弹出层
    // $(document).on("click","[layerIframe]",function() {

    //     var _title = $(this).attr("layerTitle");
    //     var _url = $(this).attr("layerIframe");
    //     layer.open({
    //         type: 2,
    //         title: _title,
    //         area: ['86%', '80%'],
    //         content: [_url, 'no']
    //     });

    // });



    // nav
    $(".navList>li").on("mouseover", function() {

        $(this).children(".navSub").show();
        $(this).children("a").addClass("hover");

    });

    $(".navList>li").on("mouseleave", function() {

        $(this).children("a").removeClass("hover");
        $(this).children(".navSub").hide();

    });


    /*  -----
        -----选项卡
        -----name ：[ jsTab="tab"]
        -----obj ：[jstab="block"]
        -----opr : [jstab="title"] > [jstab="t"]
        -----ctn : [jstab="box"] > [jstab="b"]
        -----checkedClass : "act"
    ----- */
    $('[jsTab="tab"]').each(function() {

        var _this = $(this);

        _this.find('[jsTab="b"]:not(:eq(0))').hide();
        _this.find('[jsTab="b"]:eq(0)').show();
        _this.find('[jsTab="t"]:eq(0)').addClass('act');
        _this.find('[jsTab="t"]').hover(function() {

            var _obj = $(this).parents('[jsTab="tab"]');
            var _index = $(this).index();

            $(this).addClass('act').siblings('[jsTab="t"]').removeClass('act');
            _obj.children('[jsTab="box"]').children('[jsTab="b"]').stop().hide();
            _obj.children('[jsTab="box"]').children('[jsTab="b"]').eq(_index).stop().show();

        },function(){});

    });



    

    $('[jsTab2="tab"]').each(function(){

        var _this = $(this);

        _this.find('[jsTab2="b"]:not(:eq(0))').hide();
        _this.find('[jsTab2="b"]:eq(0)').show();
        _this.find('[jsTab2="t"]:eq(0)').addClass('act');
        _this.find('[jsTab2="t"]').hover(function() {

            var _obj = $(this).parents('[jsTab2="tab"]');
            var _index = $(this).index();

            $(this).addClass('act').siblings('[jsTab2="t"]').removeClass('act');
            _obj.children('[jsTab2="box"]').children('[jsTab2="b"]').stop().hide();
            _obj.children('[jsTab2="box"]').children('[jsTab2="b"]').eq(_index).stop().show();

        },function(){});

    });


    /*  -----
        -----选项卡
        -----name ：[ jsTab="tabSelf"]
        -----obj ：[jstab="block"]
        -----opr : [jstab="title"] > [jstab="t"]
        -----ctn : [jstab="box"] > [jstab="b"]
        -----checkedClass : "act"
    ----- */

    // $('[jsTab="tabSelf"]').each(function(){ 

    //     var _this = $(this);
    //     _this.find('[jsTab="b"]').hide();
    //     _this.find('[jsTab="t"]').eq(0).addClass("act");
    //     _this.find('[jsTab="t"]').eq(0).find('[jsTab="b"]').show();
    //     _this.find('[jsTab="t"]').on('mouseover', function() {

    //         $(this).find('[jsTab="b"]').show();
    //         $(this).addClass("act").siblings('[jsTab="t"]').removeClass("act");
    //         $(this).siblings('[jsTab="t"]').find('[jsTab="b"]').hide();

    //     });

    // });

    /*  -----
        -----选项卡
        -----name ：[ jsTab="tabNav"]
        -----obj ：[jstab="block"]
        -----opr : [jstab="title"] > [jstab="t"]
        -----ctn : [jstab="box"] > [jstab="b"]
        -----checkedClass : "act"
    ----- */

    // $('[jsTab="tabNav"] [jsTab="b"]').hide();
    // $('[jsTab="tabNav"] [jsTab="t"]').on('mouseover', function() {

    //      var _obj = $(this).parents('[jsTab="tabNav"]');
    //      var _index = $(this).index();

    //      $(this).addClass('hover').siblings('[jsTab="t"]').removeClass('hover');
    //      _obj.children('[jsTab="box"]').children('[jsTab="b"]').hide();
    //      _obj.children('[jsTab="box"]').children('[jsTab="b"]').eq(_index).show();

    //  })

    //  $('[jsTab="tabNav"]').on('mouseleave', function() {
    //      $(this).find('[jsTab="b"]').hide();
    //      $(this).find('[jsTab="t"]').removeClass('hover');

    //  });

    /*  -----
        -----滚动到目标位置
        -----obj ：scrollObj="**"
        -----opr : scrollTo="**"
    ----- */
    // $(document).on("click",'[scrollTo="header"]',function() {
    //     var _gidTop = $('[scrollObj="header"]').position().top;
    //     $("html,body").animate({
    //         scrollTop: _gidTop
    //     }, 500);

    // });



    /*  -----
        -----表单清空
        -----obj ：jsForm="form"
        -----opr : jsForm="reset"
    ----- */
    // $('[jsForm="reset"]').on("click",function(){

    //     $(this).parents('[jsForm="form"]').find('input[type=text],textarea').val("");

    // });

    /*  -----
        -----窗口滚动到一定位置执行一些操作
        -----obj ：jsFloat="form"
        -----opr : jsForm="reset"
    ----- */

    // if( $("[jsFloatPos]").attr("jsFloatPos") == "top" ){
    //    var _posT = $("[jsFloatPos]").position().top ;
    //    $(window).scroll(function(){

    //        if( $(window).scrollTop() >= _posT ){

    //             $('[jsFloatPos="top"]').addClass("jsFloatPosTop");

    //        }else{

    //            $('[jsFloatPos="top"]').removeClass("jsFloatPosTop");
    //        }

    //    });

    // }



    /*  -----
        ----- 页面滚动到相应位置，响应对应导航
        -----obj ：jsFloatNav="nav"
        -----opr : jsFloatNav="**"
        -----gid : jsFloatNavGid="**"
        -----activeClass : "act"
    ----- */
    // if( $('[jsFloatNav]').attr("jsFloatNav") == "nav" ){

    //     var _navArry =[];
    //     var _navArryTop =[];
    //     var _jsFloatNav = $('[jsFloatNav="nav"]').find('[jsFloatNav]');
    //     var _jsFloatNavH = $('[jsFloatNav="nav"]').height();


    //     for (var i = 0; i < _jsFloatNav.length; i++) {

    //         _navArry[i] = _jsFloatNav.eq(i).attr("jsFloatNav"); 
    //         _navArryTop[i] = $('[jsFloatNavGid='+ _navArry[i] +']').position().top - _jsFloatNavH;

    //     }

    //     _jsFloatNav.on("click",function(){
    //             var _index = $(this).index();
    //             $("body,html").animate({scrollTop: _navArryTop[_index] },500);
    //         });

    //     $(window).scroll(function(){

    //         for (var i = 0; i < _navArry.length; i++) {

    //             if( $(window).scrollTop() >= _navArryTop[i]){

    //                 _jsFloatNav.eq(i).addClass("act").siblings().removeClass("act");
    //             }

    //         }

    //     });

    // }

    $('[layerType="video"]').on("click",function(){

        var _ctn = $(this).attr("layerC");
        var _title = $(this).attr("layerT");
        layerVideo(_title,_ctn);

    })


});
function layerVideo(_t,html) {

    layer.open({
        title: _t,
        btn:false,
        shadeClose:true,
        area: ['1000px', '600px'],
        content:html
    });

}