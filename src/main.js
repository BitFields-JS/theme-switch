

window.customElements.define('theme-switch', ThemeSwitch);


export class ThemeSwitch extends HTMLElement {
	/*
		Custom elements based theme switcher

		How to:
			1. Add class name to your html tag:
			<html class="theme-blue-yellow"></html>

			2. Define theme in your CSS:
			.theme-blue-yellow {
				--primary-color: #33cccc;
				--secondary-color: #cccc33;
				--background-color: #051414;
			}

			3. Add this custom element to your HTML
			<theme-switch
				themes="theme-blue-yellow theme-dark-silver theme-deep-purple" default="theme-blue-yellow"
				key="my-themes">
				<button id="theme-switch" onclick="parentNode.switch()">Toggle Theme</button>
			</theme-switch>
	*/
	constructor() {
		super();
		this.themes = this.getAttribute('themes').split(' ');
		this.defaultTheme = this.getAttribute('default');
		localStorage.setItem(this.getAttribute('key'), this.getAttribute('default') || '');
		this.switch();
	}
	
	switch() {
		let themeName = localStorage.getItem(this.getAttribute('key'));
		let index = this.themes.indexOf(themeName);
		let length = this.themes.length;
		
		index += 1;
		if (index >= length) {
			index = 0;
		}
		
		localStorage.setItem(this.getAttribute('key'), this.themes[index]);
		document.querySelector(':root').className = this.themes[index];
	}
}
