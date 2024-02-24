import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'

const theme = createTheme({
    palette: {
        mode:
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light',
    },
})

const useStyles = makeStyles({
    '@global': {
        body: {
            backgroundColor: theme.palette.background.default,
        },
    },
})

const App = () => {
    useStyles()
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<ProjectList />} />
                    <Route path="/:id" element={<ProjectDetail />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App

