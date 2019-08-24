$(function() {
    $.ajax({
        type: "get",
        url:"data/draws.json",
        dataType: "json",
        success: function(data) {
        	// var userId = sessionStorage.getItem("userId");
            for (var i = data.draws.length-1;i>=0;i--) {
                $("#sPic").append("<a href='drawsStory.html?uid="+data.draws[i].drawsId+"' target='_parent'><figure class='picture'><img src='"+data.draws[i].drawsSIcon+"' ><figcaption><h4>"+data.draws[i].drawsTitle+"</h4></figcaption></figure></a>");
                $("#bPic").append("<div><div class='b-pic'><img src='"+data.draws[i].drawsBIcon+"' ></div><p class='b-text b-title'>"+data.draws[i].drawsTitle+"</p><p class='b-text'>"+data.draws[i].drawsInfo+"</p></div>");
            }
        },
        error: function() {
            alert("没有成功获取数据");
        }
    });
});