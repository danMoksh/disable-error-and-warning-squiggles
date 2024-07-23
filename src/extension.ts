import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "disable-error-squiggles" is now active!');

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
            await configuration.update('workbench.colorCustomizations', {}, vscode.ConfigurationTarget.Global);
        } else {
            await configuration.update('workbench.colorCustomizations', newCustomizations, vscode.ConfigurationTarget.Global);
        }

        vscode.window.showInformationMessage('Toggled error and warning color customizations.');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
