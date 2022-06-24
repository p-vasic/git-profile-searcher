import { DefaultTheme } from "styled-components"

export interface IThemeMode {
    id: 'light' | 'dark'
    bgColor: string
    cardColor: string
    inputColor: string
    textColor: string
}

export interface GlobalThemeProps extends DefaultTheme, IThemeMode {
    toggleTheme: () => void
}
