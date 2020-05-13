import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navStyles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={navStyles.navbar}>
            <div>LOGO</div>
            <ul className={navStyles.navLinkList}>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#aboutMe">ABOUT</AnchorLink>
                </li>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navSubMenu} to="/#projects">
                        PROJECTS
                    </AnchorLink>
                </li>
                <li className={navStyles.navLinkListItem}>
                    <AnchorLink className={navStyles.navLink} to="/#contact">CONTACT</AnchorLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar