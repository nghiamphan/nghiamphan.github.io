import { CardMedia, Container, Typography, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project4 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia sx={{ height: 500 }} component="img" image={image} />

            <CommonSection projectData={projectData} />

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

