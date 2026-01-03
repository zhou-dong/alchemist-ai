import { type PlanetThemeProps } from '../PlanetTheme';
import { MercuryBackground } from './MercuryBackground';

export const mercuryThemeProps: PlanetThemeProps = {
    baseColor: { r: 184, g: 160, b: 130 },
    primary: { r: 184, g: 160, b: 130, a: 1 },
    secondary: { r: 164, g: 140, b: 110, a: 1 },
    accent: { r: 199, g: 175, b: 145, a: 1 },
    highlight: { r: 209, g: 185, b: 155, a: 1 },
    shadow: { r: 144, g: 120, b: 90, a: 0.4 },
    background: MercuryBackground,
};

export { MercuryBackground };

