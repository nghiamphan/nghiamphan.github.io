import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Box } from '@mui/material'

import projects from '../db/projects.json'
import Project4 from './individual-project/Project4'

const ProjectDetail = () => {
    const nagivate = useNavigate()

    const { id } = useParams()
    const projectData = projects.find((project) => project.id === Number(id))

    useEffect(() => {
        if (!projectData) {
            nagivate('/')
        }
    }, [nagivate, projectData])

    const component = getComponent(id, projectData)

    return <Box sx={{ marginTop: 15 }}>{component}</Box>
}

const getComponent = (id, projectData) => {
    switch (id) {
        case '4':
            return <Project4 projectData={projectData} />
    }
}

export default ProjectDetail

