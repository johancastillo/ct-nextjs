import React from 'react';
import Link from 'next/link'


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/" >
                    <a className="navbar-brand">NextJS example</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item m-4">
                            <Link href="/" >
                                <a className="navbar-link">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item m-4">
                            <Link href="/about-us" >
                                <a className="navbar-link">About Us</a>
                            </Link>
                        </li>
                        
                        <li className="nav-item m-4">
                            <Link href="/contact-us" >
                                <a className="navbar-link">Contact Us</a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;