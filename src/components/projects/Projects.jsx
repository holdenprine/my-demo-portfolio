import React from 'react'
import './projects.css'
import IMG1 from '../../assets/MTB-img.jpg'
import IMG2 from '../../assets/better-text-game-image.jpg'
import IMG3 from '../../assets/blog-post-rails.jpg'

const Projects = () => {
    return (
        <div>
            {/* TODO: */}
            {/* Projects Go here -> Wildlife Tracker, Textbased game, maybe Blog post rails project, This website!!! -> Have descriptions for each */}
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container project_container">
                
                {/* FOR FUTURE IMPLEMENTATION -> DYNAMIC PROJECT POPULATION */}
                {/* EXAMPLE */}
                {/* var projectArray = [
                    {
                        id: 1,
                        image: IMG1,
                        title: "Wildlife Tracker",
                        github:"insert Link",
                        demo: "insert live demo"
                    }
                    more items to be inserted
                ] */}
                {/* USE THIS FUNCTION:
                    projectArray.map(({id, image, title, github, demo}) => {
                        return (
                            insert article template and replace variables accordingly
                        )
                    })

                */}
                
                <article className ="project_item">
                    <div className="project_item-image">
                        <img src={IMG1} alt="MTB Site" />
                    </div>  
                          {/* Change to another project, something not shit */}
                        <h3>Victorise - MTB Fantasy League</h3>
                        {/* insert project url here - Wildlife Tracker */}
                        <div className="project_item-cta">
                            <a href="https://www.mtbfantasyleague.com/#/home" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Site</a>
                        </div>
                </article>

                <article className ="project_item">
                    <div className="project_item-image">
                        <img src={IMG2} alt="Text Based Game: Ogre The Moon" />
                    </div>    
                        <h3>Funny Command Line Game</h3>
                        <div className="project_item-cta">
                            <a href="https://github.com/sanjuel/ogre-the-moon" className="btn" target='_blank' rel='noreferrer'>Github</a>
                            <a href="https://github.com/holdenprine" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                </article>

                <article className ="project_item">
                    <div className="project_item-image">
                        <img src={IMG3} alt="Müd Müzik - React in Rails" />
                    </div>    
                        <h3>Müd Müzik - Site</h3>
                        <div className="project_item-cta">
                            <a href="https://github.com/capstone-capos-2022-echo/mood-music" className="btn" target='_blank' rel='noreferrer'>Github</a>
                            <a href="https://mud-muzik.herokuapp.com/" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                </article>
            </div>
        </section>
        </div>
    )
}

export default Projects
