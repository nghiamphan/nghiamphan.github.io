import { useTheme } from '@emotion/react'
import { CardMedia, Container, Link, Tooltip, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Project4 = ({ projectData }) => {
    const { title, description, image, github, deployment } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia sx={{ height: 500 }} component="img" image={image} />

            <Typography sx={{ marginY: 3 }} color="text.primary" variant="h4">
                {title}
            </Typography>

            <Typography sx={{ marginBottom: 2 }} variant="body1">
                {description}
            </Typography>

            <Typography sx={{ marginBottom: 2 }} variant="body1">
                GitHub:{'\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 '}
                <Link href={github} target="_blank">
                    <Tooltip title="GitHub">
                        <GitHubIcon sx={{ verticalAlign: 'top' }} />
                    </Tooltip>
                </Link>
            </Typography>

            <Typography sx={{ marginBottom: 2 }} variant="body1">
                Deployment:{'\u00A0 '}
                <Link href={deployment} target="_blank">
                    <Tooltip title="Deployment">
                        <LaunchIcon sx={{ verticalAlign: 'top' }} />
                    </Tooltip>
                </Link>
            </Typography>

            <Typography variant="body1">Front end:</Typography>
            <ul>
                <li>React: Use JSX to write React components.</li>
                <li>React-Redux: Manage data from a central “store”.</li>
                <li>Axios: Make requests to and receive responses from the server.</li>
                <li>React-Router: Manage navigation.</li>
                <li>React-Hook-Form: Manage data input and validation for forms.</li>
            </ul>

            <Typography variant="body1">Back end:</Typography>
            <ul>
                <li>Nodejs/Express: Handle requests to the server.</li>
                <li>MongoDB: The database is hosted on MongoDB Atlas cloud service.</li>
                <li>
                    Mongoose: Translate between Javascript objects and their representation in
                    MongoDB,provide schema validation.
                </li>
                <li>JSON Web Token: Encrypt and decrypt tokens used for token based authentication.</li>
                <li>Bcrypt: Generate the password hashes.</li>
                <li>Dotenv: Configure environment variables.</li>
                <li>Jest/Supertest: For writing backend tests.</li>
            </ul>
        </Container>
    )
}

export default Project4

