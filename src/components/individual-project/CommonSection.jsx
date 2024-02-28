import { Link, Tooltip, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const CommonSection = ({ projectData }) => {
    const { title, description, github, deployment, tools } = projectData
    return (
        <>
            <Typography sx={{ marginY: 3 }} color="text.primary" variant="h4">
                {title}
            </Typography>

            <Typography sx={{ marginBottom: 2 }} variant="body1">
                {description}
            </Typography>

            <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
                GitHub:{'\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 '}
                <GitHubLink github={github} />
            </Typography>

            {deployment && (
                <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
                    Deployment:{'\u00A0 '}
                    <DeploymentLink deployment={deployment} />
                </Typography>
            )}

            {tools && (
                <Typography sx={{ marginBottom: 8 }} className="Typo" variant="h6">
                    Tools:{' '}
                    <Typography variant="body1" component="span">
                        {tools}
                    </Typography>
                </Typography>
            )}
        </>
    )
}

const GitHubLink = ({ github }) => (
    <Link href={github} target="_blank">
        <Tooltip title="GitHub">
            <GitHubIcon sx={{ verticalAlign: 'top' }} />
        </Tooltip>
    </Link>
)

const DeploymentLink = ({ deployment }) => (
    <Link href={deployment} target="_blank">
        <Tooltip title="Deployment">
            <LaunchIcon sx={{ verticalAlign: 'top' }} />
        </Tooltip>
    </Link>
)

export default CommonSection
export { GitHubLink, DeploymentLink }

