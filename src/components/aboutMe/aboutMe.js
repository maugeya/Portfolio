import React from 'react'
import aboutMeStyles from './aboutMe.module.css'

const AboutMe = () => (
    <div id="about" className={`section ${aboutMeStyles.aboutMeContainer}`}>
        <h2 className="splitSectionHeader">About me</h2>
        <div className={aboutMeStyles.content}>
        <p>
            A little bit about me...I've always been interested in computers but I was a chef for 8 years before re-skilling to become a software engineer.
            My interest started as a hobby but I now work as a fullstack engineer, with a little bit of mobile development thrown in as well.
        </p>
        <p>
            I love the problem solving element to my role and the chance to be continually learning new skills and putting them into practise.
            I keep the end user in mind when working and add meaningful input as to what I feel could help the product across teams.
        </p>
        <p>
            I believe in intuitive websites, making it easy for the end user to get the most out of a site and have a passion for building simple yet stylish products.
        </p>
        <p>
            Check out my projects and contact me if you like what you see!
        </p>
        </div>
        
            
        
    </div>
)

export default AboutMe
    