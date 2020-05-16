import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import burgerStyles from "./burger.module.css"

const HamburgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const handleOpenMenu = () => {
        if (!menuIsOpen) {
            return setMenuIsOpen(true)
        }
        return setMenuIsOpen(false)
    }

    const handleChangeCheckbox = () => {
        // TODO: Handle this in a better way
        return
    }

    return (
        <div className={[burgerStyles.burgerMenu, burgerStyles.abc].join(' ')}>
            <input id="burger" type="checkbox" className={burgerStyles.menuInput} checked={menuIsOpen ? "checked": ""} onChange={handleChangeCheckbox}/>
            <label htmlFor="burger" onClick={handleOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav>
                <ul className={burgerStyles.burgerList}>
                    <li className={burgerStyles.burgerListItemWithSubMenu}>
                        <a  className={burgerStyles.burgerListLink} href="#">Projects</a>
                        <ul className={burgerStyles.burgerListSubMenu}>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-1" onClick={handleOpenMenu}>PROJECT 1</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-2" onClick={handleOpenMenu}>PROJECT 2</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-3" onClick={handleOpenMenu}>PROJECT 3</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-4" onClick={handleOpenMenu}>PROJECT 4</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-5" onClick={handleOpenMenu}>PROJECT 5</AnchorLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 

export default HamburgerMenu