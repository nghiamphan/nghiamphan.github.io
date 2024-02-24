import { useNavigate, useParams } from 'react-router'
import projects from '../db/projects.json'
import Project4 from './individual-project/Project4'
import { useEffect } from 'react'

const ProjectDetail = () => {
    const nagivate = useNavigate()

    const { id } = useParams()
    const projectData = projects.find((project) => project.id === Number(id))

    useEffect(() => {
        if (!projectData) {
            nagivate('/')
        }
    }, [nagivate, projectData])

    switch (id) {
        case '4':
            return <Project4 projectData={projectData} />
    }
}

export default ProjectDetail

