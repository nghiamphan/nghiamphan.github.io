import { useNavigate } from 'react-router'
import { Box, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { DeploymentLink, GitHubLink } from './individual-project/CommonSection'
import projects from '../db/projects.json'

const SelfIntroduction = () => {
    return (
        <Box sx={{ marginLeft: '20%', marginRight: '20%' }}>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
                Hi, welcome to my portfolio!
            </Typography>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
                I leverage my expertise in Python and its powerful machine learning libraries such as
                PyTorch and scikit-learn to design and customize intricate architectures like neural
                networks and transformers. My passion lies in extracting actionable insights from raw data,
                ultimately driving meaningful decisions and innovation.
            </Typography>
            <Typography sx={{ marginBottom: 2 }} variant="body1">
                I also possess experience across the full software development stack, encompassing frontend
                (React) and backend (Spring Boot, Node.js) development, along with proficiency in relational
                (PostgreSQL, MySQL) and non-relational (MongoDB) databases.
            </Typography>
            <Typography sx={{ marginBottom: 5 }} variant="body1">
                GitHub page: <GitHubLink github="https://github.com/nghiamphan" />
            </Typography>
        </Box>
    )
}

const ProjectCard = ({ projectData }) => {
    const navigate = useNavigate()
    const { id, title, description, tools, image, github, deployment } = projectData

    return (
        <Card
            sx={{ display: 'flex', marginBottom: 3, cursor: 'pointer' }}
            onClick={() => navigate(`/${id}`)}
        >
            <CardContent sx={{ width: '90%' }}>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
                />

                <Typography
                    variant="body2"
                    sx={{ marginTop: 2 }}
                    color="text.disabled"
                    dangerouslySetInnerHTML={{ __html: tools.replace(/\n/g, '<br />') }}
                />

                <CardActions sx={{ marginTop: 1 }} onClick={(event) => event.stopPropagation()}>
                    <GitHubLink github={github} />
                    {deployment && <DeploymentLink deployment={deployment} />}
                </CardActions>
            </CardContent>

            <CardMedia
                sx={{ width: 200, height: 250 }}
                component="img"
                alt="Error displaying image"
                image={image}
            />
        </Card>
    )
}

const ProjectList = () => {
    projects.sort((a, b) => a.priority - b.priority)
    const oddProjects = projects.filter((_, index) => index % 2 === 0)
    const evenProjects = projects.filter((_, index) => index % 2 !== 0)

    return (
        <Box sx={{ marginTop: 10 }}>
            <SelfIntroduction />
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    {oddProjects.map((data, index) => (
                        <ProjectCard key={index} projectData={data} />
                    ))}
                </Container>

                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    {evenProjects.map((data, index) => (
                        <ProjectCard key={index} projectData={data} />
                    ))}
                </Container>
            </Box>
        </Box>
    )
}

export default ProjectList

