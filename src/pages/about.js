import React from 'react'
import { Link } from 'gatsby'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>I love React</p>
            <Link to="/contact">Contact</Link>
        </div>
    )
}