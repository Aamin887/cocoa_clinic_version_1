import { Link } from "react-router-dom"
import './indicator.css'
function Indicator({ Icon, number, name }) {
    return (
        <Link to={'/api'}>
            <div className="card">
                <div>
                    <div className="numbers">{number}</div>
                    <div className="cardName">{name}</div>
                </div>

                <div className="iconBx">
                    <Icon />
                </div>
            </div>
        </Link>
    )
}

export default Indicator