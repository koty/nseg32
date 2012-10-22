$(window).bind('load', function () {
    var koty = new MyNamespace.Shachiku("koty");
    koty.pushHanko("○○詳細設計書");
    MyNamespace.Shachiku.zangyo();
});
