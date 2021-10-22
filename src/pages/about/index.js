import React from "react";
import { Link } from 'react-router-dom';
import {
    Navbar
} from './../../components'
class About extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>About Page</h1>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ol>
                <ul>
                    <li>
                        <button onClick={() => this.props.history.push("/")}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => this.props.history.push("/about")}>About</button>
                    </li>
                </ul>

                <Navbar history={this.props.history} />
            </div>
        )
    }
}

export default About;