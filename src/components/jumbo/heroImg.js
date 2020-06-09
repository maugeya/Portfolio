import React, { useState } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import ange_1 from "../../images/heroImg/ange_1.png"
import ange_2 from "../../images/heroImg/ange_2.png"
import ange_3 from "../../images/heroImg/ange_3.png"
import ange_4 from "../../images/heroImg/ange_4.png"
import ange_5 from "../../images/heroImg/ange_5.png"
import jumboStyles from "./jumbo.module.css"

const HeroImg = () => {
  const [items, set] = useState([{
    src: ange_1,
    key: 'ange_1',
  },
  {
    src: ange_2,
    key: 'ange_2',
  },
  {
    src: ange_3,
    key: 'ange_3',
  },
  {
    src: ange_4,
    key: 'ange_4',
  },
  {
    src: ange_5,
    key: 'ange_5',
  }])
  
  const transitions = useTransition(items, item => item.key, {
    from: { marginLeft: '-100px', transform: 'translateY(-110%)', opacity: 0},
    enter: {height: '100vh', marginLeft: '-100px', transform: 'translateY(0%)', opacity: 1},
    leave: { marginLeft: '-100px', transform: 'translateY(-110%)', opacity: 0},
    config:{mass:50, tension:50, friction:50, clamp: true},
    trail: 250,
  })

  return (
    <div className={jumboStyles.imageContainer}>
      {transitions.map(({ item, props, key }) =>
        <animated.img className="angePics" src={item.src} key={key} style={props}></animated.img>
      )}
    </div>
  )

}

export default HeroImg
