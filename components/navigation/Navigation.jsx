import React from 'react';
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link href="/" >
                    <a class="navbar-brand">NextJS example</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item m-4">
                            <Link href="/" >
                                <a class="navbar-link">Home</a>
                            </Link>
                        </li>

                        <li class="nav-item m-4">
                            <Link href="/about-us" >
                                <a class="navbar-link">About Us</a>
                            </Link>
                        </li>
                        
                        <li class="nav-item m-4">
                            <Link href="/contact-us" >
                                <a class="navbar-link">Contact Us</a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;