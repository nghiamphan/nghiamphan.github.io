import { CardMedia, Container, Link, ThemeProvider, Typography, createTheme, useTheme } from '@mui/material'
import CommonSection from './CommonSection'

const Project1 = ({ projectData }) => {
    const { image } = projectData
    const theme = useTheme()

    const typographyTheme = createTheme({
        typography: {
            allVariants: {
                marginBottom: 15,
            },
            h5: {
                marginTop: 30,
            },
        },
    })

    return (
        <Container sx={{ color: theme.palette.text.secondary }}>
            <CardMedia
                sx={{ height: 500, width: '32%', marginLeft: '34%' }}
                component="img"
                image={image}
            />

            <CommonSection projectData={projectData} />

            <ThemeProvider theme={typographyTheme}>
                <Typography variant="h5">Problem</Typography>
                <Typography variant="body1">
                    Implement a transformer to reverse a sequence of integers.
                    <br />
                    For example: If the input sequence is [3, 5, 4, 2, 1], the transformer should return [1,
                    2, 4, 5, 3].
                </Typography>

                <Typography variant="h5">Model</Typography>
                <Typography sx={{ marginBottom: 30 }} variant="body1">
                    I experimented with an encoder-only model and with different variants of the vanilla
                    transformer. For detailed model design, data generation, and experiment results, please
                    refer to the{' '}
                    <Link
                        href="https://github.com/nghiamphan/transformer/blob/main/README.md"
                        target="_blank"
                    >
                        README file in the GitHub repository.
                    </Link>
                </Typography>
            </ThemeProvider>
        </Container>
    )
}

export default Project1

