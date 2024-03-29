import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Box } from '@mui/material'

import projects from '../db/projects.json'
import Project1 from './individual-project/Project1'
import Project2 from './individual-project/Project2'
import Project3 from './individual-project/Project3'
import Project4 from './individual-project/Project4'
import Project5 from './individual-project/Project5'
import Project6 from './individual-project/Project6'

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

    return <Box sx={{ marginTop: 10 }}>{component}</Box>
}

const getComponent = (id, projectData) => {
    switch (id) {
        case '1':
            return <Project1 projectData={projectData} />
        case '2':
            return <Project2 projectData={projectData} />
        case '3':
            return <Project3 projectData={projectData} />
        case '4':
            return <Project4 projectData={projectData} />
        case '5':
            return <Project5 projectData={projectData} />
        case '6':
            return <Project6 projectData={projectData} />
    }
}

export default ProjectDetail

