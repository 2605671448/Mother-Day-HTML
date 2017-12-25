/**
 * create by 1715
 * */
;(function($){
    $.fn.extend({
        pop:function(jsonData, popTime){        //popTime保留，未用
            var main = this;
            //弹幕最小相对高度
            var eleMinTop = parseInt(this.height() / 7);
            //弹幕最大相对高度
            var eleMaxTop = parseInt(this.height() / 2);

            //弹幕随机时间集合
            var randomTimeArr = [];
            //弹幕随机高度集合
            var randomHeightArr = [];
            for(var i = 0; i < jsonData.length; i++){
                //随机每条弹幕信息的出现时间
                randomTimeArr.push(i * 2000 + parseInt(Math.random() * 1000));
                //随机每条弹幕信息出现的top值
                randomHeightArr.push(parseInt(Math.random() * (eleMaxTop - eleMinTop)) + eleMinTop + 'px');
            }
            //构造每条弹幕的div块，赋予其对应的top值
            $.each(jsonData, function(index, item){
                var popID = 'pop' + index;
                var popItem = $('<div class="pop1715" id="' + popID + '" style="top:' + randomHeightArr[index] + '">' + item.mesContent + '</div>');
                main.append(popItem);

                //匿名函数摆脱setInterval所执行的函数无法穿参的问题
                setTimeout('setInterval(function(){goPop("' + popID + '")}, 20)', randomTimeArr[index]);
            });

            //每隔5秒自动清除过期弹幕
            setInterval(removePass, 5000);
            function removePass(){
                console.log("I am");
                var pops = $('.pop1715');
                $.each(pops, function(index, item){
                    if(parseInt($(item).css('left')) < -400){
                        $(item).remove();
                    }
                })
            }
        }
    })
})(jQuery);

//滚动函数
function goPop(popID){
    var pop = $('#' + popID);
    pop.css('left', parseInt(pop.css('left')) - 4);
}

