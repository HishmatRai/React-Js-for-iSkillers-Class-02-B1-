import React from "react";
function FunNavbar(props) {
    return (
        <div>
            <h1>Function component navbar</h1>
            <ul>
                <li>
                    <button onClick={() => props.history.push("/contact")}>Contact</button>
                </li>
                <li>
                    <button onClick={() => props.history.push("/webd")}>Web Development</button>
                </li>
            </ul>
        </div>
    )
}
export default FunNavbar