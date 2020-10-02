import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <h1>KMS</h1>
      <Link to="/about">About me</Link><br></br>
      <Link to="/contact">Contact me</Link>
    </div>
  )
}
