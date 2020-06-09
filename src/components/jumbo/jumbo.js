import React from "react"
import jumboStyles from "./jumbo.module.css"
import HeroImg from "./heroImg"

const Jumbo = () => (
    <div id="jumbo" className="section">
        <div className={jumboStyles.jumboContainer}>
          <div className={jumboStyles.jumboText}>
            <h1>Hello,<br /> I'm <span className={jumboStyles.nameSpan}>Angela</span>, <br />a Software Engineer.</h1>
          </div>
          <div className={jumboStyles.angeImageContainer}>
            <HeroImg />
          </div>
        </div>
    </div>
)

export default Jumbo