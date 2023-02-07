# Custom elements based theme switcher

		## How to

			### Define theme in your CSS:
			.theme-blue-yellow {
				--primary-color: #33cccc;
				--secondary-color: #cccc33;
				--background-color: #051414;
			}

			### Add this custom element to your HTML

			<theme-switch
				themes="theme-blue-yellow theme-dark-silver theme-deep-purple" default="theme-blue-yellow"
				key="my-themes">
				<button id="theme-switch" onclick="parentNode.dispatch()">Toggle Theme</button>
			</theme-switch>


			### Add your way of saving the theme name to preserve it on next page load

			themeSwitch.addEventListener('theme-change', function onThemeChange(event) {
				// change the theme and save current theme as state to localStorage to backend etc.
				// replace default function with your own
				this.switch((themeName) => localStorage.setItem('andromeda-web', themeName));
			});
