import { useState, useEffect } from 'react'
import "../App.css"
const About = (props) => {
  const [about, setAbout] = useState(null)
  const getAboutData = async () => {
    const response = await fetch(props.URL + 'about')
    const data = await response.json()
    setAbout(data)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getAboutData()}, [])

  const loaded = () => {
    return (
      <div>
        <h1>{about.name}</h1>
        <img src={about.headshot} alt={about.name} />
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    )
  }
  return about ? loaded() : <h1>Loading...</h1>
}
export default About