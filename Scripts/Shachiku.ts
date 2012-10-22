/// <reference path="jquery.d.ts" />

// Module。外部ファイルで使い場合はexportをつける
module MyNamespace {
    // Interface
    export interface IPushHankoable {
        pushHanko(reportName: string): void;
    }

    // クラス。外部ファイルで使う場合はexportをつける
    export class Shachiku implements IPushHankoable {
        // コンストラクタ
        constructor (private name: String) { }

        //ハンコ
        public pushHanko(reportName: string): void {
            var message = reportName + "に"
                 + this.name + "のハンコを押す。";
            console.log(message);
            $("#message").append("<div>" + message + "</div>");
        }
        private privateMethod(): void {
            console.log("privateMethod");
        }
        public static publicStaticMethod(): void {
            console.log("publicstaticMethod");
        }
        // Static member
        private static zangyo(): void {
            console.log('残業する。');
            $("#message").append("<div>残業する。</div>");
        }
    }
}
