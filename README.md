# Disable Error Squiggles

## Overview

The **Disable Error Squiggles** extension allows you to toggle the visibility of error and warning squiggles in your Visual Studio Code editor. This can be useful when you want a cleaner look while coding or presenting.

## Features

- Toggle error and warning squiggles on and off 

## Usage

1. Install the extension.
2. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
3. Type `Toggle Error and Warning Squiggles` and press `Enter`.

This will toggle the error and warning squiggles in your editor.

## How does it work?

This extension updates the `workbench.colorCustomizations` settings in your `settings.json` file. It sets the following properties:

```json
{
    "editorError.background": "#ffffff00",
    "editorError.border": "#ffffff00",
    "editorError.foreground": "#ffffff00",
    "editorWarning.background": "#ffffff00",
    "editorWarning.border": "#ffffff00",
    "editorWarning.foreground": "#ffffff00"
}
