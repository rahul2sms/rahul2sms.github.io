import * as React from "react";
import { Link } from 'gatsby';
import { Container, Nav, Navbar } from "react-bootstrap";

export default function LayoutPreLogin(props) {

    return <section className='min-vh-100 d-flex flex-column'>
        {/* <header className="bg-primary py-4 text-center text-white h1 mb-0">
            RAHUL JAISWAL
        </header> */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <section className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <Navbar expand={'lg'}>
                    <Container fluid={true}>
                        <Navbar.Brand href="/">
                            <span className="text-danger h3">&#9813;</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="mainNavigation" className='w-auto rounded' />
                        <Navbar.Collapse id="mainNavigation" className='flex-grow-0'>
                            <Nav>
                                <Nav.Link href='/TextToSpeech' className='fw-bold'>Text To Speech</Nav.Link>
                                <Nav.Link href='/SpeechToText' className='fw-bold'>Speech To Text</Nav.Link>
                                <Nav.Link href='/AboutMe' className='fw-bold'>About Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </nav>

        <main className={`container flex-grow-1 ${props.className || ''}`}>
            {props.children}
        </main>
        <footer className="d-flex flex-column bg-dark p-3 text-end text-white">
            <span className="small">Developed and maintained by</span>
            <i className="h5">Rahul Jaiswal</i>
        </footer>
    </section>
}