import React from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav bg-color-dark">
            <li className="nav-item" style={{ margin: '10px' }}>
                <Link to="/" style={{ color: 'dark' }}>
                    Home
                </Link>
            </li>
            <li className="nav-item" style={{ margin: '10px' }}>
                <Link to="/documentation" style={{ color: 'dark' }}>
                    Documentation
                </Link>
            </li>
            <li className="nav-item" style={{ margin: '10px' }}>
                <Link to="/about" style={{ color: 'dark' }}>
                    About
                </Link>
            </li>
			{books.map((book) => (
				<li className="nav-item" style={{ margin: '10px' }}>
					<Link to={`/book/${book.slug}`} style={{ color: 'dark' }}>
						{book.title}
					</Link>
            </li>
		))}
        </ul>
    </nav>
	)
}



export default Navbar