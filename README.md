# Github Responsive Width Layout - Chrome Extension

Chrome extension which makes GitHub.com respond to changes of the browser width. It overwrites GitHub.com css rules related to width so that the content of GitHub.com can fit a narrow browser screen.

Please let me know via GitHub issues if you have ideas how the extension could be improved.

**GitHub.com without the Chrome extension**:

![GitHub without extension](https://raw.githubusercontent.com/PiotrBerebecki/graphics/master/github-without-responsive-width-layout-extension.gif)

**GitHub.com with the Chrome extension**:

![GitHub with extension](https://raw.githubusercontent.com/PiotrBerebecki/graphics/master/github-with-responsive-width-layout-extension.gif)


## How can I install it?

The extension can be installed from the Chrome Web Store: [https://chrome.google.com/webstore/detail/github-responsive-width-l/eneihknacbphgmbibidldblpadjcfifk](https://chrome.google.com/webstore/detail/github-responsive-width-l/eneihknacbphgmbibidldblpadjcfifk)


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
