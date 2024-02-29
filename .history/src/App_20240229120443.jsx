import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import RTL from "components/RTL";
import useSettings from './components/hooks/useSettings';
import { createCustomTheme } from './components/theme';
import './i18n'

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
