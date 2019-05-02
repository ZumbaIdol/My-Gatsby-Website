import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout';
import Head from '../components/head'



const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I'm David, a full-stack developer living in beautiful Saint Louis.</h2>
      <p>Need a developer?  <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
