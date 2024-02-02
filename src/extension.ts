// The module 'vscode' contains the VS Code extensibility API
// vscode 模块包含了 VS Code 插件 API
// Import the module and reference it with the alias vscode in your code below
// 导入 vscode 模块并用 vscode 别名使用
import * as vscode from 'vscode';

// This method is called when your extension is activated
// 本方法会在插件被启用的时候调用
// Your extension is activated the very first time the command is executed
// 每次该命令执行完毕则插件被启用
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // 使用控制台输出诊断信息 (console.log) 和错误 (console.error)。
    // This line of code will only be executed once when your extension is activated
    // 当插件被启用时，这行代码将只执行一次
    console.log('Congratulations, your extension "rustless" is now active!');

    // The command has been defined in the package.json file
    // 该命令被定义在 package.json 文件
    // Now provide the implementation of the command with registerCommand
    // 现在提供命令的实现，使用 registerCommand 方法注册
    // The commandId parameter must match the command field in package.json
    // commandId 参数一定要和 package.json 文件中的 command 相匹配
    let disposable = vscode.commands.registerCommand('rustless.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // 每次命令被执行时，下面的代码都会被执行
        // Display a message box to the user
        // 显示一个消息框
        let message = 'Hello World from rustless!';
        vscode.window.showInformationMessage(message);
    });

    context.subscriptions.push(disposable);

    let disposable2 = vscode.commands.registerCommand('rustless.helloWorld2', () => {
        vscode.window.showWarningMessage(`now: ${new Date()}`);
    });

    context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
// 本方法会在插件被禁用时调用
export function deactivate() {}
