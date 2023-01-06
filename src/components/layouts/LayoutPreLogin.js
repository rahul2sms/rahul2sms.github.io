import * as React from "react";
import { Link } from 'gatsby';

export default function LayoutPreLogin(props) {

    return <>
        <header className="bg-primary py-4 text-center text-white h1 mb-0">
            RAHUL JAISWAL
        </header>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <section className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutMe" className="nav-link">AboutMe</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <span id="navbar-text" class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </section>
        </nav>

        <main className="container min-vh-100">
            {props.children}
        </main>
        <footer className="d-flex flex-column bg-dark p-3 text-end text-white fixed-bottom">
            <span className="small">Developed and maintained by</span>
            <i className="h5">Rahul Jaiswal</i>
        </footer>
    </>
}