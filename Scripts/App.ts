/// <reference path="Shachiku.ts" />
/// <reference path="jquery.d.ts" />

$(window).bind('load', () =>{
    var koty = new MyNamespace.Shachiku("koty");
    koty.pushHanko("�����ڍא݌v��");

    //���Ȃ݂�private static ���\�b�h���ĂׂĂ��܂��B�B�B
    MyNamespace.Shachiku.zangyo();
});