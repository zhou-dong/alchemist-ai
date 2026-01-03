import type { PlanetThemeProps, RgbaColor } from '../PlanetTheme';
import { VenusBackground } from './VenusBackground';

// Venus's characteristic reddish-brown colors
export const venusBaseColor = { r: 139, g: 69, b: 19 };
export const venusPrimary: RgbaColor = { r: venusBaseColor.r, g: venusBaseColor.g, b: venusBaseColor.b, a: 1 };
export const venusSecondary: RgbaColor = { r: venusBaseColor.r + 21, g: venusBaseColor.g + 13, b: venusBaseColor.b + 26, a: 1 };
export const venusAccent: RgbaColor = { r: venusBaseColor.r - 38, g: venusBaseColor.g - 19, b: venusBaseColor.b - 5, a: 1 };
export const venusHighlight: RgbaColor = { r: venusBaseColor.r + 41, g: venusBaseColor.g + 31, b: venusBaseColor.b + 31, a: 1 };
export const venusShadow: RgbaColor = { r: venusBaseColor.r, g: venusBaseColor.g, b: venusBaseColor.b, a: 0.4 };

export const venusThemeProps: PlanetThemeProps = {
    baseColor: venusBaseColor,
    primary: venusPrimary,
    secondary: venusSecondary,
    accent: venusAccent,
    highlight: venusHighlight,
    shadow: venusShadow,
    background: VenusBackground,
};

export { VenusBackground };

