import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navStyles from "./navbar.module.css"
import HamburgerMenu from "../burger/burger"

const Navbar = () => {
    return (
        <div className={navStyles.navbar}>
            <AnchorLink to="/#jumbo">
                <div>LOGO</div>
            </AnchorLink>
            <HamburgerMenu />
            <ul className={navStyles.navLinkList}>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#about">ABOUT</AnchorLink>
                </li>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#projects">
                        PROJECTS
                    </AnchorLink>
                    <ul className={navStyles.subMenu}>
                        <li className={navStyles.subMenuListItems}>
                            <AnchorLink className={navStyles.navSubMenu} to="/project-1">
                                LGBT Clinic Search
                            </AnchorLink>
                        </li>

                        <li className={navStyles.subMenuListItems}>
                            <AnchorLink className={navStyles.navSubMenu} to="/project-2">
                                Project 2
                            </AnchorLink>
                        </li>
                        <li className={navStyles.subMenuListItems}>
                            <AnchorLink className={navStyles.navSubMenu} to="/project-3">
                                Project 3
                            </AnchorLink>
                        </li>
                        <li className={navStyles.subMenuListItems}>
                            <AnchorLink className={navStyles.navSubMenu} to="/project-4">
                                Project 4
                            </AnchorLink>
                        </li>
                        <li className={navStyles.subMenuListItems}>
                            <AnchorLink className={navStyles.navSubMenu} to="/project-5">
                                Project 5
                            </AnchorLink>
                        </li>
                    </ul>
                </li>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#contact">CONTACT</AnchorLink>
                </li>
            </ul>
        </div>
    )
    
}

export default Navbar