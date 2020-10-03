import React from 'react'
import Header from '../header'
import Footer from '../footer'
import '../../styles/reset.scss'

export default (props) => (
    <div>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
)