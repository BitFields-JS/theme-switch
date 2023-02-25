class ThemeSwitch extends HTMLElement {
	/*
		Custom elements based theme switcher

		# How to

			## Define theme in your CSS:
			.theme-blue-yellow {
				--primary-color: #33cccc;
				--secondary-color: #cccc33;
				--background-color: #051414;
			}
			
			more themes here...

			## Add this custom element to your HTML

			<theme-switch
				themes="theme-blue-yellow theme-dark-silver theme-deep-purple" default="theme-blue-yellow"
				storage-key="my-themes">
				<button id="theme-switch" onclick="parentNode.dispatch()">Toggle Theme</button>
			</theme-switch>
	*/
	constructor() {
		super();
		this.themes = this.getAttribute('themes').split(' ');
		this.changeThemeEvent = new Event('theme-change');
		let savedThemeName = localStorage.getItem(this.getAttribute('storage-ley'));
		if (savedThemeName !== undefined) {
			document.querySelector(':root').className = savedThemeName;
		} else {
			this.switch();
		}
	}
	
	dispatch() {
		this.dispatchEvent(this.changeThemeEvent);
	}

	switch() {
		let themeName = document.querySelector(':root').className;
		let index = this.themes.indexOf(themeName) || 0;
		let length = this.themes.length;

		index += 1;
		if (index >= length) {
			index = 0;
		}

		document.querySelector(':root').className = this.themes[index];
		localStorage.setItem(this.getAttribute('storage-key'), this.themes[index]);
	}
}

window.customElements.define('theme-switch', ThemeSwitch);

(function initThemeSwitch() {
	let themeSwitch = document.getElementsByTagName('theme-switch')[0];
	themeSwitch.addEventListener('theme-change', function onThemeChange(event) {
		this.switch();
	});

})();
