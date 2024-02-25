/* eslint-disable react/no-unescaped-entities */
import { CardMedia, Container, Link, ThemeProvider, Typography, createTheme, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project5 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    const typographyTheme = createTheme({
        typography: {
            allVariants: {
                marginBottom: 15,
            },
            h5: {
                marginTop: 30,
            },
            h6: {
                marginTop: 30,
            },
        },
    })

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia
                sx={{ height: 500, width: '70%', marginLeft: '15%' }}
                component="img"
                image={image}
            />
            <CommonSection projectData={projectData} />

            <ThemeProvider theme={typographyTheme}>
                <Typography variant="h4">Project Description</Typography>

                <Typography variant="h5">App Structure & Navigation</Typography>
                <Typography variant="h6">Screen 1: Home Screen</Typography>
                <Typography variant="body1">
                    On startup, use expo-location to automatically show weather data for the user's current
                    spot.
                </Typography>

                <Typography variant="h6">Screen 2: Search & Display Weather</Typography>
                <Typography variant="body1" component="div">
                    Enable users to look up and see weather details for any specified city.
                    <br />
                    Features:
                    <ul>
                        <li>Input field for city names.</li>
                        <li>Show weather info for searched locations.</li>
                        <li>
                            "Save Location" button to keep locations in a list for easy access later (Seen
                            in Screen 3).
                        </li>
                        <li>Disable saving if more than 4 cities are saved.</li>
                    </ul>
                </Typography>

                <Typography variant="h6">Screen 3: Saved Locations</Typography>
                <Typography variant="body1" component="div">
                    Display a list of locations saved by the user.
                    <br />
                    Features:{' '}
                    <ul>
                        <li>Fetch and display the weather data of the saved locations.</li>
                        <li>
                            Click on a city will navigate to the Home Screen that will display the weather
                            data of that city in detail.
                        </li>
                        <li>"Remove" button that allows deleting a city from the saved list.</li>
                    </ul>
                </Typography>

                <Typography variant="h5">Data Fetching</Typography>
                <Typography variant="body1">
                    Use the{' '}
                    <Link href="https://open-meteo.com/en/docs/" target="_blank">
                        Open Meteo API
                    </Link>{' '}
                    for accessing weather and geocoding data for both the user's current and searched
                    locations.
                </Typography>

                <Typography variant="h5"> Location Services</Typography>
                <Typography variant="body1">
                    Integrate expo-location to obtain the user's current location for the first screen.
                </Typography>

                <Typography variant="h5">Data Storage</Typography>
                <Typography variant="body1">
                    Use expo-sqlite to store and manage the list of saved locations.
                </Typography>

                <Typography variant="h5">User Interface</Typography>
                <Typography sx={{ marginBottom: 30 }} variant="body1">
                    Use React Native Paper.
                </Typography>
            </ThemeProvider>
        </Container>
    )
}

export default Project5

