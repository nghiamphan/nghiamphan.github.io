import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Link,
    Tooltip,
    Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import projects from '../db/projects.json'

const ProjectCard = ({ projectData }) => {
    const { title, description, image, github, github_2, deployment } = projectData

    return (
        <Card sx={{ display: 'flex', marginBottom: 3, cursor: 'pointer' }}>
            <CardContent sx={{ width: '90%' }} onClick={() => console.log('clicked')}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    title={description}
                    dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
                />
                <CardActions sx={{ marginTop: 1 }}>
                    <Link href={github} target="_blank">
                        <Tooltip title="GitHub">
                            <GitHubIcon />
                        </Tooltip>
                    </Link>
                    {github_2 && (
                        <Link href={github_2} target="_blank">
                            <Tooltip title="GitHub">
                                <GitHubIcon />
                            </Tooltip>
                        </Link>
                    )}
                    {deployment && (
                        <Link href={deployment} target="_blank">
                            <Tooltip title="Deployment">
                                <LaunchIcon />
                            </Tooltip>
                        </Link>
                    )}
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
    const oddProjects = projects.filter((_, index) => index % 2 === 0)
    const evenProjects = projects.filter((_, index) => index % 2 !== 0)

    return (
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
    )
}

export default ProjectList

