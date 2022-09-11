import React from 'react'
import './projects.css'
import IMG1 from '../../assets/wildlife-tracker-img.jpg'
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
                        <img src={IMG1} alt="Wildlife Tracker: Western Oregon" />
                    </div>    
                        <h3>Wildlife Tracker</h3>
                        {/* insert project url here - Wildlife Tracker */}
                        <div className="project_item-cta">
                            <a href="https://github.com/holdenprine" className="btn" target='_blank'>Github</a>
                            <a href="https://github.com/holdenprine" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>

                <article className ="project_item">
                    <div className="project_item-image">
                        <img src={IMG2} alt="Text Based Game: Ogre The Moon" />
                    </div>    
                        <h3>Terminal Game</h3>
                        {/* insert project url here - Wildlife Tracker */}
                        <div className="project_item-cta">
                            <a href="https://github.com/holdenprine" className="btn" target='_blank'>Github</a>
                            <a href="https://github.com/holdenprine" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>

                <article className ="project_item">
                    <div className="project_item-image">
                        <img src={IMG3} alt="Blog/Post Demo - Rails" />
                    </div>    
                        <h3>Blog/Post Demo</h3>
                        {/* insert project url here - Wildlife Tracker */}
                        <div className="project_item-cta">
                            <a href="https://github.com/holdenprine" className="btn" target='_blank'>Github</a>
                            <a href="https://github.com/holdenprine" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>
            </div>
        </section>
        </div>
    )
}

export default Projects
