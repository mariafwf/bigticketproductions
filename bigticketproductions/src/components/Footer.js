import React from "react";

export default function Footer() {
    return (
        <div className="container">
            <footer className="footer-container">
                <hr className="mt-4 mb-3" />
                <div className="row justify-content-center mt-3 pt-2">
                    <p className="text-center text-muted">
                        Copyright © 2022 Big Ticket Productions <br />
                        Developed by
                        <a className="footer-link text-muted" href="https://github.com/mariafwf" target="_blank" rel="noreferrer">
                            Maria Figueiredo
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
