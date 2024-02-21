import { ThemeProvider, createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ProjectList from './components/ProjectList'

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
        <ThemeProvider theme={theme}>
            <ProjectList />
        </ThemeProvider>
    )
}

export default App

