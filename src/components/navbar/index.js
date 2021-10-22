import React from "react";
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Navbar Component</h1>
                    <ul>
                        <li>
                            <button onClick={() => this.props.history.push("/")}>Home</button>
                        </li>
                        <li>
                            <button onClick={() => this.props.history.push("/about")}>About</button>
                        </li>
                    <li>
                        <button >Contact</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;