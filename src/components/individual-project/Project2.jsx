import { CardMedia, Container, Typography, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project2 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia
                sx={{ height: 500, width: '40%', marginLeft: '30%' }}
                component="img"
                image={image}
            />

            <CommonSection projectData={{ ...projectData, tools: null }} />

            <Typography sx={{ marginTop: 8 }} variant="h4">
                Project Description
            </Typography>

            <Typography sx={{ marginTop: 3 }} variant="body1" component="div">
                This is a simple neural network for binary classification I wrote from scratch. The network
                consists of:
                <ul>
                    <li style={{ marginBottom: '12px' }}>
                        An input layer which is a list of numbers that represent the features.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                        Zero or one hidden layer of customizable number of nodes.
                        <br />
                        Activation function: <strong>Leaky RELU = f(x) = max(0.01x, x)</strong>
                    </li>
                    <li>
                        An output layer which contains a single node that outputs 0 or 1.
                        <br />
                        Activation function:{' '}
                        <strong>Binary cross entropy = -[y * log(p) + (1 - y) * log(1 - p)]</strong>
                    </li>
                </ul>
            </Typography>

            <Typography sx={{ marginBottom: 30 }} variant="body1">
                Given a dataset, the model will split it into training and test set. The model will train on
                the training set, and then print out results on the test set.
            </Typography>
        </Container>
    )
}

export default Project2

