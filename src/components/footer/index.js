import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.scss'

export default (props) => (
    <footer className={styles.footer}>
        <p>Developed by Kathleen Stickel</p>
        <Link to="https://github.com/kstick9210">Find me on GitHub</Link>
    </footer>
)