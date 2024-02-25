import { CardMedia, Container, Typography, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project6 = ({ projectData }) => {
    const { image, tools } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia
                sx={{ height: 500, width: '70%', marginLeft: '15%' }}
                component="img"
                image={image}
            />

            <CommonSection projectData={projectData} />

            <Typography variant="h6">
                Tools:{' '}
                <Typography variant="body1" component="span">
                    {tools}
                </Typography>
            </Typography>
        </Container>
    )
}

export default Project6

