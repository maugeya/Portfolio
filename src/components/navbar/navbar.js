import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navStyles from "./navbar.module.css"
import HamburgerMenu from "../burger/burger"
import Logo from "../logo/logo"

const Navbar = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    const handleSubMenuOpen = () => {
        setSubMenuOpen(true)
    }

    const handleSubMenuClose = () => {
        setSubMenuOpen(false)
    }

    const handleSubMenuClassName = (navStyles) => {
        if (!subMenuOpen) {
            return navStyles.subMenuHidden
        }
        return navStyles.subMenu
    }

    const handleTriangleIconPosition = (navStyles) => {
        if (!subMenuOpen) {
            return navStyles.triangleIcon
        }
        return navStyles.activeTriangleIcon
    }

    return (
        <div className={navStyles.navbar}>
            <AnchorLink to="/#jumbo">
                <Logo />
            </AnchorLink>
            <HamburgerMenu />
            <ul className={navStyles.navLinkList}>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#about">ABOUT</AnchorLink>
                </li>
                <li className={navStyles.navLinkListItem}  onMouseLeave={handleSubMenuClose} onMouseEnter={handleSubMenuOpen} >
                    <div className={navStyles.projectLinkContainer}>
                        <AnchorLink className={navStyles.navLink} to="/#projects">
                            PROJECTS
                        </AnchorLink>
                        <div className={navStyles.triangleIconContainer}>
                            <div className={handleTriangleIconPosition(navStyles)} />
                        </div>
                    </div>
                    <ul className={handleSubMenuClassName(navStyles)}>
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