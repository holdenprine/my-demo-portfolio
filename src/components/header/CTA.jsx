import React from 'react'
// import CV from '../../assets/cv'
const CTA = () => {
    return (
        <div className="cta">
            {/* TODO: in href apply link to pdf of Resume */}
            {/* BLOCKER: FILE UNABLE TO BE DOWNLOADED */}
            <a href="src/assets/software-dev-resume-holden-prine.jpg" download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    )
}

export default CTA
