import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import GlobalStyle from './theme/GlobalStyle';
import { useThemeMode } from './theme/useThemeMode';

const App: FC = () => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <ThemeProvider theme={{
      ...theme,
      toggleTheme
    }}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
