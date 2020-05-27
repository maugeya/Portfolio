import React from "react"
import aboutMeStyles from "./aboutMe.module.css"

const AboutMe = () => (
    <div id="about" className={`section ${aboutMeStyles.aboutMeContainer}`}>
        <h2 className="sectionHeader">About me</h2>
        <div className={aboutMeStyles.content}>
        <p>
            I've always been interested in computers but was a chef for 8 years before re-skilling to become a software engineer.
            My interest started as a hobby but I now work as a fullstack engineer after seeing others code within my household.
        </p>
        <p>
            I love the problem solving element to my role and the chance to be continually learning new skills and putting them into practise.
        </p>
        </div>
        
            
        
    </div>
)

export default AboutMe
    