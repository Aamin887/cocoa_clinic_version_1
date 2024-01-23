import { Link } from "react-router-dom"
import './indicator.css'
function Indicator({ Icon, number, name }) {
    return (
        <Link to={'/api'}>
            <div class="card">
                <div>
                    <div class="numbers">{number}</div>
                    <div class="cardName">{name}</div>
                </div>

                <div class="iconBx">
                    <Icon />
                </div>
            </div>
        </Link>
    )
}

export default Indicator