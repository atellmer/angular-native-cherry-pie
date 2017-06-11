const platform = require('platform');

const PHONE = 'Phone';
const TABLET = 'Tablet';

export const isPhone = (): boolean => {
  if (platform.device.deviceType === PHONE) {
    return true;
  }

  return false;
};

export const isTablet = (): boolean => {
  if (platform.device.deviceType === TABLET) {
    return true;
  }

  return false;
};

export const renderDeviceTemplate = (phoneTemplUrl: string, tabletTemplUrl: string): string => {
  if (isPhone()) {
    return phoneTemplUrl;
  }

  if (isTablet()) {
    return tabletTemplUrl;
  }

  console.warn('Device: this unknow device type!');
  return null;
};
