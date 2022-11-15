import logo from "../assets/react.svg"
/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

export default function Navbar() {
    return (
    <nav className="">
        <div className="nav">
            <div>
                <img className="react-img" src={logo} alt="react logo"/>
                <h1>ReactFacts</h1>
            </div>
            <p>React Course - Project 1</p>
        </div>
    </nav>
    )
}