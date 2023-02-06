# Theme Switch

## Custom elements based theme switcher

## Example

1. Add class name to your html tag:

```html
<html class="theme-blue-yellow"></html>
```

2.Define themes in your CSS:

```css
   .theme-blue-yellow {
    --primary-color: #33cccc;
    --secondary-color: #cccc33;
    --background-color: #051414;
   }
   .theme-dark-silver {
        --primary-color: #ffffff;
        --secondary-color: #bbbbbb;
        --background-color: #303030;
    }
    .theme-deep-purple {
        --primary-color: #7a00dd;
        --secondary-color: #addd00;
        --background-color: #18002b;
    }
```

3.Add this custom element inside your body tag

```html
   <theme-switch
    themes="theme-blue-yellow theme-dark-silver theme-deep-purple" default="theme-blue-yellow"
    key="my-themes">
    <button id="theme-switch" onclick="parentNode.switch()">Toggle Theme</button>
   </theme-switch>
```
```js
let themeSwitch = document.getElementById('theme-switch');

	themeSwitch.addEventListener('theme-change', function onThemeChange(event) {
		// change the theme and save current theme as state to localStorage to backend etc.
      // extends ThemeSwitcher class for extra switching functionality, default is to rotate themes.
		this.defaultSwitcher();
	});
```
