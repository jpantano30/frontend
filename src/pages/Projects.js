// import { useState, useEffect } from 'react'
// const Projects = (props) => {
//   const [projects, setProjects] = useState(null)

//   const getProjectsData = async () => {
//     const response = await fetch(props.URL + 'projects')
//     const data = await response.json()
//     setProjects(data)
//   }
//   //eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => getProjectsData(), [])

//   const loaded = () => {
//     return projects.map((project) => {
//       return(  
//       <div>
//         <h1>{project.name}</h1>
//         <img src={project.image} alt={project.name} />
//         <a href={project.git}>
//           <button>Github</button>
//         </a>
//         <a href={project.live}>
//           <button>live site</button>
//         </a>
//       </div>
//       )
//     })
//   }



//   return projects ? loaded() : <h1>Loading...</h1>
// }
// export default Projects



import { useState, useEffect } from "react"
import "../App.css"
const Projects = (props) => {
  const [projects, setProjects] = useState(null)

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects")
    
    const data = await response.json()
    setProjects(data)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getProjectsData()}, [])

  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ))
  }

  return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects