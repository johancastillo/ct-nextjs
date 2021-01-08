import React from 'react';
import Link from 'next/link'

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            
            <li>
                <Link href="/about-us">About</Link>
            </li>

            <li>
                <Link href="/contact-us">Contact</Link>
            </li>
        </ul>
    )
}

export default Navigation;