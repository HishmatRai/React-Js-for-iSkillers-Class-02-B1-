import React from "react";
import { Link } from 'react-router-dom';
import FunNavbar from './../../../components/funcom/funnavbar'
function Webd(props) {
    return (
        <div>
            <h1>Web Development</h1>
            <ol>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/webd">Web Development</Link>
                </li>
            </ol>

            <ul>
                <li>
                    <button onClick={() => props.history.push("/contact")}>Contact</button>
                </li>
                <li>
                    <button onClick={() => props.history.push("/webd")}>Web Development</button>
                </li>
            </ul>

            <FunNavbar history={props.history} />
        </div>
    )
}
export default Webd