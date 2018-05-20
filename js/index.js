$(function() {
    function Index() {
        this.init();
    }
    Index.prototype = {
        constructor:Index,
        init:function(){
            this.drawAxisLine();
        },
        drawAxisLine:function(){
            console.log();
            if ($('.dataList:last-child').hasClass('waitingAdopt')) {
                $('.dataList:last-child').children('.lines').css('height','0.8rem');
            }
        }

    }
    var index = new Index();
})