/// <reference path="jquery.d.ts" />

// Module�B�O���t�@�C���Ŏg���ꍇ��export������
module MyNamespace {
    // Interface
    export interface IPushHankoable {
        pushHanko(reportName: string): void;
    }

    // �N���X�B�O���t�@�C���Ŏg���ꍇ��export������
    export class Shachiku implements IPushHankoable {
        // �R���X�g���N�^
        constructor (private name: String) { }

        //�n���R
        public pushHanko(reportName: string): void {
            var message = reportName + "��"
                 + this.name + "�̃n���R�������B";
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
            console.log('�c�Ƃ���B');
            $("#message").append("<div>�c�Ƃ���B</div>");
        }
    }
}
