import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'

const ProjectCard = ({ projectData }) => {
    const { title, description, image } = projectData

    return (
        <Card sx={{ display: 'flex', marginBottom: 3, cursor: 'pointer' }}>
            <CardContent onClick={() => console.log('clicked')}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardMedia sx={{ minWidth: 150, width: 150 }} component="img" alt="/vite.svg" image={image} />
        </Card>
    )
}

const ProjectList = () => {
    const projectData = {
        title: 'Vite',
        description:
            'A build tool that aims to provide a faster and leaner development experience for modern web projects',
        image: '/vite.svg',
    }
    const projects = [1, 2, 3]
    const oddProjects = projects.filter((_, index) => index % 2 === 0)
    const evenProjects = projects.filter((_, index) => index % 2 !== 0)

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                {oddProjects.map((_, index) => (
                    <ProjectCard key={index} projectData={projectData} />
                ))}
            </Container>

            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                {evenProjects.map((_, index) => (
                    <ProjectCard key={index} projectData={projectData} />
                ))}
            </Container>
        </Box>
    )
}

export default ProjectList

