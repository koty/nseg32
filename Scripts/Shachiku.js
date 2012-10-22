var MyNamespace;
(function (MyNamespace) {
    var Shachiku = (function () {
        function Shachiku(name) {
            this.name = name;
        }
        Shachiku.prototype.pushHanko = function (reportName) {
            var message = reportName + "に" + this.name + "のハンコを押す。";
            console.log(message);
            $("#message").append("<div>" + message + "</div>");
        };
        Shachiku.prototype.privateMethod = function () {
            console.log("privateMethod");
        };
        Shachiku.publicStaticMethod = function publicStaticMethod() {
            console.log("publicstaticMethod");
        }
        Shachiku.zangyo = function zangyo() {
            console.log('残業する。');
            $("#message").append("<div>残業する。</div>");
        }
        return Shachiku;
    })();
    MyNamespace.Shachiku = Shachiku;    
})(MyNamespace || (MyNamespace = {}));

