# Disable Error and Warning Squiggles

A VS Code Extension to disable the error and warning squiggles in VS Code. I wanted to disable these annoying squiggles while I write pseudocode (before transforming it into an actual working code), to my surprise I couldn't find an extension that does this for all the languages (This feature was only built-in in the C/C++ extension) so here I am :)

![x-screenshot](x-screenshot.png)
Unrelatable to me now, that I am using this extension :P

## Overview

The **Disable Error and Warning Squiggles** extension allows you to toggle the visibility of error and warning squiggles in your Visual Studio Code editor. This can be useful when you want a cleaner look while coding or presenting.

## Features

- Toggle error and warning squiggles on and off 

## How to use the extension? 

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
