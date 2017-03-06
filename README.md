# Github Responsive Width Layout - Chrome Extension

Chrome extension which makes GitHub.com respond to changes of the browser width. It overwrites GitHub.com css rules related to width so that the content of GitHub.com can fit a narrow browser screen.

Please let me know via [Twitter](https://twitter.com/PiotrBerebecki) or GitHub issues if you have ideas how the extension could be improved.

**GitHub.com without the Chrome extension**:

![GitHub without extension](https://raw.githubusercontent.com/PiotrBerebecki/graphics/master/github-without-responsive-width-layout-extension.gif)

**GitHub.com with the Chrome extension**:

![GitHub with extension](https://raw.githubusercontent.com/PiotrBerebecki/graphics/master/github-with-responsive-width-layout-extension.gif)


## How can I install it?

At the moment the extension can be installed within 30 seconds by following the steps below. If feedback from the users is positive the extension will be added to the Chrome Web Store.

![Installation](https://raw.githubusercontent.com/PiotrBerebecki/graphics/master/github-responsive-width-layout-installation.png)

1. Clone this repo
1. In chrome go to this url: “chrome://extensions”
1. Check “Developer mode”
1. Click “Load unpacked extension” or simply drag the “github-responsive-width-layout” folder onto the page to load up the extension. You should immediately see the extension show up in chrome toolbar.


## How does it work?

The extensions includes `github-responsive-width-layout.css` file which will overwrite some of the GitHub styles related to width.

For example, the existing style:


```css
.container {
  width: 980px;
  ...
  ...
}
```

has been replaced with:

```css
.container {
  width: 99% !important;
  max-width: 980px !important;
  ...
  ...
}
```

That's it :smiley: no other magic required.
