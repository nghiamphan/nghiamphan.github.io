import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ProjectCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="green iguana" height="140" image="/public/vite.svg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

const ProjectList = () => {
    return (
        <div>
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default ProjectList

