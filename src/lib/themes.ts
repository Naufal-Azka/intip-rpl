export const themes = {
    default: {
        primary: '#ffffff',
        secondary: '#F8F8F8',
        accent: '#D9D9D9',
        highlight: '#86C96C',
        background: '#BAD1B2',
    },
    lavender: {
        primary: '#5d4e60',
        secondary: '#826c7f',
        accent: '#a88fac',
        highlight: '#d4b2d8',
        background: '#efcefa',
    }
} as const;

export type ThemeType = keyof typeof themes;