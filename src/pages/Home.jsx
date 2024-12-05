import React from "react";
import "./css/home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="text-white fw-bold">VividPR</Navbar.Brand>{" "}
          {/* Bold and white brand */}
          <Nav className="ms-auto">
            {" "}
            {/* Use ms-auto to push Nav to the right */}
            <Nav.Link href="#about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#team" className="text-white">
              Team
            </Nav.Link>
            <Nav.Link href="#profile" className="text-white">
              Blog
            </Nav.Link>
            <Nav.Link href="#blog" className="text-white">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main className="d-flex flex-column align-items-center justify-content-center full-page w-100">
        <div className="row w-75 text-center">
          <div className="col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center align-items-center">
            <h2 style={{ fontSize: "2.5rem" }}>Welcome to VividPR</h2>{" "}
            {/* Increased font size */}
            <p style={{ fontSize: "1.25rem" }}>
              VividPR is a site to download open source projects, tools, and
              resources. We provide a central hub for open source enthusiasts to
              find and share projects. Files downloaded from this site are 100%
              secure.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="/open-source.png"
              alt="VividPR Logo"
              className="img-fluid"
              style={{ maxWidth: "100%" }} // Corrected style attribute
            />
          </div>
        </div>
      </main>
      <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 bg-dark text-white">
        <p className="mb-2 mb-md-0">Website made by VividTeam</p>
        <div>
          <a href="#GitHub" className="text-white me-3">
            GitHub
          </a>
          <a href="#Telegram" className="text-white">
            Telegram
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
