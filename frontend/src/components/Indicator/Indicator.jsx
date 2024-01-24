import { Link } from "react-router-dom"
import './indicator.css';

function Indicator({ Icon, number, name }) {
    return (
        <Link to={'/api'}>
            <div className="card">
                <div>
                    <h3 className="numbers">{number}</h3>
                    <small className="cardName">{name}</small>
                </div>

                <div className="iconBx">
                    <Icon />
                </div>
            </div>
        </Link>
    )
}

export default Indicator