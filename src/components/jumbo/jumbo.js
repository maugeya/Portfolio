import React from "react"
import jumboStyles from "./jumbo.module.css"

const Jumbo = () => (
    <div id="jumbo" className="section">
        <div className={jumboStyles.jumboContainer}>
          <div className={jumboStyles.jumboText}>
            <h1>Hello,<br /> I'm <span>Angela</span>, <br />a Software Engineer.</h1>
          </div>
          <div className={jumboStyles.angeBackgroundImg} />
        </div>
    </div>
)

export default Jumbo