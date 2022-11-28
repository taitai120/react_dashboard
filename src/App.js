import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./containers/global/Topbar";
import Dashboard from "./containers/Dashboard";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./containers/global/Sidebar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
            <div className="app">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </ColorModeContext.Provider>
    );
}

export default App;
