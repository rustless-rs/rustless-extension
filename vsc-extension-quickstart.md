# Welcome to your VS Code Extension 欢迎来到你的 VS Code 插件

## What's in the folder

* This folder contains all of the files necessary for your extension.
* 此文件夹包含插件所需的所有文件。
* `package.json` - this is the manifest file in which you declare your extension and command.
* `package.json` - 这是配置插件和命令的清单文件。
  * The sample plugin registers a command and defines its title and command name. With this information VS Code can show the command in the command palette. It doesn’t yet need to load the plugin.
  * 示例插件注册一个命令并定义它的标题和命令名。有了这些信息，VS Code可以在命令面板中显示命令。它还不需要加载插件的命令。
* `src/extension.ts` - this is the main file where you will provide the implementation of your command.
* `src/extension.ts` - 这是主文件，你将在其中提供命令的实现。
  * The file exports one function, `activate`, which is called the very first time your extension is activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`.
  * 此文件导出一个 `activate` 函数, 该函数在每次你的插件被第一次激活（此示例中是执行了命令）的时候调用。在 `activate` 函数中，我们调用了 `registerCommand` 函数。
  * We pass the function containing the implementation of the command as the second parameter to `registerCommand`.
  * 我们将包含命令实现的函数作为第二个参数传递给 `registerCommand`。

## Setup 安装

* install the recommended extensions (amodio.tsl-problem-matcher, ms-vscode.extension-test-runner, and dbaeumer.vscode-eslint)
* 安装推荐的插件 (amodio.tsl-problem-matcher, ms-vscode.extension-test-runner, and dbaeumer.vscode-eslint)

## Get up and running straight away 执行

* Press `F5` to open a new window with your extension loaded.
* 按下 `F5` 打开一个加载了你的插件的新窗口。
* Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Hello World`.
* 按 (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) 进入命令模式，再键入 `Hello World` 运行你的命令。
* Set breakpoints in your code inside `src/extension.ts` to debug your extension.
* 在代码 `src/extension.ts` 里面设置断点来调试你的插件。
* Find output from your extension in the debug console.
* 在 debug 控制台看到你的插件的输出。

## Make changes 修改

* You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
* 在改变 `src/extension.ts` 里面的代码后，你可以在 debug 工具条中重启你的插件。
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.
* 你也可以重新加载 (`Ctrl+R` or `Cmd+R` on Mac) 带有你的插件的 VS Code 窗口来载入你的修改。

## Explore the API 导出的 API

* You can open the full set of our API when you open the file `node_modules/@types/vscode/index.d.ts`.
* 打开文件 `node_modules/@types/vscode/index.d.ts`，你可以看到我们提供的所有 API 集合。

## Run tests 运行测试

* Install the [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* 安装插件 [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* Run the "watch" task via the **Tasks: Run Task** command. Make sure this is running, or tests might not be discovered.
* 通过 **Tasks: Run Task** 命令运行 "watch" 任务. 确保该任务处于运行中，否则可能无法看到测试。
* Open the Testing view from the activity bar and click the Run Test" button, or use the hotkey `Ctrl/Cmd + ; A`
* 从活动栏打开测试视窗，单击"运行测试" 按钮，或使用 `Ctrl/Cmd + ; A` 快捷键。
* See the output of the test result in the Test Results view.
* 在测试结果视窗查看测试结果输出。
* Make changes to `src/test/extension.test.ts` or create new test files inside the `test` folder.
* 修改 `src/test/extension.test.ts` 文件或在 `test` 文件夹创建一个新的测试文件。
  * The provided test runner will only consider files matching the name pattern `**.test.ts`.
  * 提供的测试程序仅仅关联那些文件名是 `**.test.ts` 模式的文件.
  * You can create folders inside the `test` folder to structure your tests any way you want.
  * 你可以在 `test` 文件夹下任意创建文件夹来整理你的测试文件。

## Go further 更多

* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* 减小插件大小和缩小启动时间 [打包插件](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace.
* [发布插件](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) 在 VS Code 插件市场。
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
* 设置自动化构建 [持续集成](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
