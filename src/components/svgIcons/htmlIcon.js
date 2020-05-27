import React from "react"
import styles from "./techIcon.module.css"

const HtmlIcon = () => {
    return (
        <div className={styles.iconContainer}>
            <svg className={styles.techIconSvg} viewBox="0 0 128 128">
                <path className={styles.techIconPath}  d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
            </svg>
        </div>
    )
}

export default HtmlIcon