import LightTheme from './light';
import DarkTheme from './dark';
import { useCallback, useState } from 'react';
import { IThemeMode } from './model';

export const useThemeMode = (): (IThemeMode | VoidFunction)[] => {
    const [theme, setTheme] = useState<IThemeMode>(LightTheme);

    const toggleTheme: () => void = useCallback(() => {
        if (theme.id === 'light') {
            setTheme(DarkTheme);
        } else {
            setTheme(LightTheme);
        }
    }, [theme]);

    return [theme, toggleTheme];
}