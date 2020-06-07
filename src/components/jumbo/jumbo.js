import React from "react"
import jumboStyles from "./jumbo.module.css"
import ange_1 from "../../images/heroImg/ange_1.png"
import ange_2 from "../../images/heroImg/ange_2.png"
import ange_3 from "../../images/heroImg/ange_3.png"
import ange_4 from "../../images/heroImg/ange_4.png"
import ange_5 from "../../images/heroImg/ange_5.png"

const Jumbo = () => (
    <div id="jumbo" className="section">
        <div className={jumboStyles.jumboContainer}>
          <div className={jumboStyles.jumboText}>
            <h1>Hello,<br /> I'm <span className={jumboStyles.nameSpan}>Angela</span>, <br />a Software Engineer.</h1>
          </div>
          <div className={jumboStyles.angeImageContainer}>
            <img className={jumboStyles.angeImage} src={ange_1}/>
            <img className={jumboStyles.angeImage}  src={ange_2}/>
            <img className={jumboStyles.angeImage}  src={ange_3}/>
            <img className={jumboStyles.angeImage}  src={ange_4}/>
            <img className={jumboStyles.angeImage}  src={ange_5}/>
          </div>
        </div>
    </div>
)

export default Jumbo