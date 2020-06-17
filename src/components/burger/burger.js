import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import burgerStyles from './burger.module.css'

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
                <span className={burgerStyles.burgerSpanFirst}></span>
                <span className={burgerStyles.burgerSpanSecond}></span>
                <span className={burgerStyles.burgerSpanLast}></span>
            </label>
            <nav>
                <ul className={burgerStyles.burgerList}>
                    <li className={burgerStyles.burgerListItem}>
                        <Link to="/#about" onClick={handleOpenMenu} className={burgerStyles.burgerListLink}>ABOUT</Link>
                    </li>
                    <li className={burgerStyles.burgerListItemWithSubMenu}>
                        <Link className={burgerStyles.burgerListLink} to="/#projects"  onClick={handleOpenMenu}>PROJECTS</Link>
                        <ul className={burgerStyles.burgerListSubMenu}>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-1" onClick={handleOpenMenu} className={burgerStyles.burgerSubMenuLink}>PROJECT 1</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-2" onClick={handleOpenMenu} className={burgerStyles.burgerSubMenuLink}>PROJECT 2</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-3" onClick={handleOpenMenu} className={burgerStyles.burgerSubMenuLink}>PROJECT 3</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-4" onClick={handleOpenMenu} className={burgerStyles.burgerSubMenuLink}>PROJECT 4</AnchorLink>
                            </li>
                            <li className={burgerStyles.burgerListSubMenuItem}>
                                <AnchorLink to="/project-5" onClick={handleOpenMenu} className={burgerStyles.burgerSubMenuLink}>PROJECT 5</AnchorLink>
                            </li>
                        </ul>
                    </li>
                    <li className={burgerStyles.burgerListItem}>
                        <Link to="/#contact" onClick={handleOpenMenu} className={burgerStyles.burgerListLink}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 

export default HamburgerMenu