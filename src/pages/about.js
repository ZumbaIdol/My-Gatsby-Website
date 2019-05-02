import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I'm 56 years old, I play piano, drums, and bass guitar, I am a superhero fanatic, estoy aprendiendo español (I'm learning Spanish), and I also teach Zumba Fitness®. </p>
      <p>Wanna hit me up?  <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage