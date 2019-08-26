$(function() {
    $.ajax({
        type: "get",
        url:"data/timeLine.json",
        dataType: "json",
        success: function(data) {
        	// var userId = sessionStorage.getItem("userId");
            for (var i = 0;i < data.timeLine.length;i++) {
                $("#tLine").append("<div class='oneYear'><div class='year'>"+data.timeLine[i].timeLineYear+"</div><div class='story'><p>"+data.timeLine[i].timeLineInfo+"</p></div></div>");
            }
        },
        error: function() {
            alert("没有成功获取数据");
        }
    });
});