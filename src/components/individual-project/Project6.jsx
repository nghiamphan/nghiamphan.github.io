import { CardMedia, Container, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project6 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia
                sx={{ height: 500, width: '70%', marginLeft: '15%' }}
                component="img"
                image={image}
            />

            <CommonSection projectData={projectData} />
        </Container>
    )
}

export default Project6

