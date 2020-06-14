import React from "react"
import techExpStyles from "./techExperience.module.css"
import PythonIcon from "../svgIcons/pythonIcon"
import HtmlIcon from "../svgIcons/htmlIcon"
import CssIcon from "../svgIcons/cssIcon"
import SassIcon from "../svgIcons/sassIcon"
import GitIcon from "../svgIcons/gitIcon"
import DockerIcon from "../svgIcons/dockerIcon"
import JavaScriptIcon from "../svgIcons/javascriptIcon"
import ReactIcon from "../svgIcons/reactIcon"
import ReduxIcon from "../svgIcons/reduxIcon"
import ReduxSagaIcon from "../svgIcons/reduxSagaIcon"
import DjangoIcon from "../svgIcons/djangoIcon"
import GraphQLIcon from "../svgIcons/graphQLIcon"
import JestIcon from "../svgIcons/jestIcon"
import MySQLIcon from "../svgIcons/mySqlIcon"
import JqueryIcon from "../svgIcons/jqueryIcon"

const TechExperience = () => {
    return (
        <div id="about" className={`section ${techExpStyles.techContainer}`}>
        <h2 className="splitSectionHeader">Tech experience</h2>
        <div className={techExpStyles.techIconContainer}>
            <HtmlIcon />
            <CssIcon />
            <SassIcon />
            <JavaScriptIcon />
            <JqueryIcon />
            <ReactIcon />
            <ReduxIcon />
            <ReduxSagaIcon />
            <PythonIcon />
            <DjangoIcon />
            <GraphQLIcon />
            <JestIcon />
            <MySQLIcon />
            <GitIcon />
            <DockerIcon />
        </div>
        

    </div>
    )
}

export default TechExperience