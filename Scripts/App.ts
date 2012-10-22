/// <reference path="Shachiku.ts" />
/// <reference path="jquery.d.ts" />

$(window).bind('load', () =>{
    var koty = new MyNamespace.Shachiku("koty");
    koty.pushHanko("○○詳細設計書");

    //ちなみにprivate static メソッドも呼べてしまう。。。
    MyNamespace.Shachiku.zangyo();
});