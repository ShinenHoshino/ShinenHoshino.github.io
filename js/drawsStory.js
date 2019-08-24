var i = getQueryString('uid');
var max = 0;
$(function() {
    $.ajax({
        type: "get",
        url:"data/draws.json",
        dataType: "json",
        success: function(data) {
            var haveThisDraw=false;
            max = data.draws.length;
            for(j=0;j<data.draws.length;j++){
                if(i==data.draws[j].drawsId){
                    haveThisDraw=true;
                    $("#bPic").append("<img class='b-pic' src='"+data.draws[j].drawsBIcon+"''>");
                    $("#bTitle").append(data.draws[j].drawsTitle);
                    $("#bStory").append(data.draws[j].drawsInfo);
                }
            }
            if(haveThisDraw==false){
                window.setTimeout("alert('图片被吃了……')",100);
            } 
        },
        error: function() {
            alert("没有成功获取数据");
        }    
    });
});

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return (r[2]); 
        return null; 
}

function toLeft() {
    if (i<max) {
        i++;
        window.location.href="drawsStory.html?uid="+i;
    }else{
        window.setTimeout("alert('这是最新的了>_<')",100);
    }
};

function toRight() {
    var i= getQueryString('uid');
    if (i>1) {
        i--;
        window.location.href="drawsStory.html?uid="+i;
    }else{
        window.setTimeout("alert('再早的就拿不出手了>_<')",100);
    }
    
};



