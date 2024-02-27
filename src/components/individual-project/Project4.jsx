import { CardMedia, Container, Typography, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project4 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia sx={{ height: 500 }} component="img" image={image} />

            <CommonSection projectData={{ ...projectData, tools: null }} />

            <Typography sx={{ marginTop: 8 }} variant="h4">
                Technologies
            </Typography>

            <Typography sx={{ marginTop: 3 }} variant="body1" component="div">
                Front end:
                <ul>
                    <li>React: Builds interactive user interfaces.</li>
                    <li>React-Redux: Manages application state.</li>
                    <li>Axios: Manage API requests</li>
                    <li>React-Router: Handles navigation between pages.</li>
                    <li>React-Hook-Form: Simplifies form handling and validation.</li>
                </ul>
            </Typography>

            <Typography sx={{ marginBottom: 30 }} variant="body1" component="div">
                Back end:
                <ul>
                    <li>Nodejs/Express: Handles server-side logic and API requests</li>
                    <li>MongoDB Atlas: Cloud-hosted database service.</li>
                    <li>Mongoose: Simplifies interaction with MongoDB and data validation.</li>
                    <li>JSON Web Token: Enables secure user authentication.</li>
                    <li>Bcrypt: Hashes passwords for secure storage.</li>
                    <li>Dotenv: Manages environment variables.</li>
                    <li>Jest/Supertest: Enables writing comprehensive backend tests.</li>
                </ul>
            </Typography>
        </Container>
    )
}

export default Project4

