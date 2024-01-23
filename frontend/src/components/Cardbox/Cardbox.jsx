import React from 'react'
import './cardbox.css'
import Indicator from '../Indicator/Indicator'

function Cardbox({ data }) {
    return (
        <div className='cardBox'>
            {
                data.map((info, idx) => <Indicator key={idx} name={info.name} number={info.number} Icon={info.icon} />)
            }
        </div>
    )
}

export default Cardbox