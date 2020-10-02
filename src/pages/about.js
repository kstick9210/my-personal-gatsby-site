import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I love React</p>
            <Link to="/contact">Contact</Link>
        </Layout>
    )
}