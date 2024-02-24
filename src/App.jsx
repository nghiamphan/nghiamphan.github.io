import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Switch,
    ThemeProvider,
    Toolbar,
    createTheme,
} from '@mui/material'

import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'

const App = () => {
    const [darkMode, setDarkMode] = useState(
        window.localStorage.getItem('darkMode') !== null
            ? window.localStorage.getItem('darkMode') === 'true'
            : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    })

    const handleDarkModeChange = (event) => {
        setDarkMode(event.target.checked)
        window.localStorage.setItem('darkMode', event.target.checked)
    }

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar>
                    <Toolbar>
                        <Box sx={{ display: 'inline-flex', flexGrow: 1 }}>
                            <Link to="/">
                                <Button sx={{ color: 'white' }}>Home</Button>
                            </Link>
                        </Box>
                        Dark Mode
                        <Switch checked={darkMode} onChange={handleDarkModeChange} />
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/" element={<ProjectList />} />
                    <Route path="/:id" element={<ProjectDetail />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App

