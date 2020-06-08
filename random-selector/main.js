/*
window.onload=function(){
    //document.write("Hello JS");
};
*/
//當網頁準備好，就做裡面的動作
$(document).ready(function(){
    //按按鈕有反應
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#radom-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",images[randomChildNumber]);
        //alert("Hi");
        //$("H1").text("Hello");
        //$("H1").text($("li:first").text());
    });
});