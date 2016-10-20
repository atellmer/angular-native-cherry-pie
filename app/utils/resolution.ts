const platform = require('platform');


export class Resolution {
	private width: number = platform.screen.mainScreen.widthDIPs;

	public isPhone(): boolean {
		if (this.width > 360) {
			return false;
		}
		return true;
	}

	public isTablet(): boolean {
		return !this.isPhone();
	}
}
