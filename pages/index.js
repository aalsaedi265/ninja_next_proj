import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'

export default function Home() {
  return (
    <div >
      <Navbar/>
   <h1>The World</h1>
      <Footer/>
    </div>
  )
}
