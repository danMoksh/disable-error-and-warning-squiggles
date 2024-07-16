// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "disable-error-squiggles" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('disable-error-squiggles.toggleErrorWarningColors', async () => {
        const configuration = vscode.workspace.getConfiguration();
        const currentCustomizations = configuration.get('workbench.colorCustomizations');
        
        const newCustomizations = {
            "editorError.background": "#ffffff00",
            "editorError.border": "#ffffff00",
            "editorError.foreground": "#ffffff00",
            "editorWarning.background": "#ffffff00",
            "editorWarning.border": "#ffffff00",
            "editorWarning.foreground": "#ffffff00",
        };

        if (JSON.stringify(currentCustomizations) === JSON.stringify(newCustomizations)) {
            // Remove customizations
            await configuration.update('workbench.colorCustomizations', {}, vscode.ConfigurationTarget.Global);
        } else {
            // Add customizations
            await configuration.update('workbench.colorCustomizations', newCustomizations, vscode.ConfigurationTarget.Global);
        }

        vscode.window.showInformationMessage('Toggled error and warning color customizations.');
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
