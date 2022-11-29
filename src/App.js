import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./containers/global/Topbar";
import Dashboard from "./containers/pages/Dashboard";
import Team from "./containers/pages/Team";
import Contact from "./containers/pages/Contact";
import Invoices from "./containers/pages/Invoices";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./containers/global/Sidebar";
import UserForm from "./containers/pages/UserForm/UserForm";
import Calendar from "./containers/pages/Calendar/Calendar";
import FAQ from "./containers/pages/FAQ/FAQ";
import PageNotFound from "./containers/pages/PageNotFound/PageNotFound";
import Bar from "./containers/pages/Bar/Bar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<UserForm />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
