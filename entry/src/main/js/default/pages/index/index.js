// import router from '@ohos.router';
import prompt from '@system.prompt';
import fetch from '@system.fetch';

export default {
    data: {
        // dialogList: ['你好，欢迎使用智AI，有什么想要提问的吗？'],
        dialogList: ['测试数据'],
        inputText:'',
    },
    onInit() {
    },
    test(){
        prompt.showToast({
            message:this.inputText
        })
    },
    addDialogList(){
        this.dialogList.push(this.inputText)
        this.getDialogData()
        this.inputText = '';
    },
    clearDialogList(){
        this.dialogList = []
    },
    inputChange(value){
        this.inputText = value.value
    },
    getDialogData(){
        fetch.fetch({
            url: 'https://zezege.dev.fbkjapp.com/api/zpu',
            method: 'POST',
            success: function(response) {
                console.info("fetch success");
                this.dialogList.push('SUCCESS ' + JSON.stringify(response))
            },
            fail: function(err) {
                console.info("fetch fail");
                this.dialogList.push('err ' + JSON.stringify(err))
            }
        });
    },
}
