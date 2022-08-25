import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";

export default function Footer() {
    return (
        <div className="container">
            <footer className="footer-container">
                <hr />
                <div className="justify-content-center">
                    <p className="text-center text-muted">
                        Copyright © 2022 Big Ticket Productions
                    </p>
                </div>
            </footer>
        </div>
    );
}
