import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Allarticles from "../components/Allarticles";
import Navigation from "../components/Navigation";

export default function Home({articles}) {
  return (
    <>
    <Navigation categories = {articles.categories}/>
    <main id = "main_root">
    <div className={styles.container}>
      <Head>
        <title>Realtywired - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Allarticles articles = {articles}/>

      
    </div>
  </main>

    </>
  )
}

export const getStaticProps = async ()=>{
  const response0 = await fetch("https://app.realtywired.show/public/api/v1/videos/by_type/2");
  const topvideo = await response0.json();
  const topVideo = topvideo[0];

  const response1 = await fetch("https://app.realtywired.show/public/api/v1/videos/latest");
  const catVideos = await response1.json();
 
  const response2 = await fetch("https://app.realtywired.show/public/api/v1/videos/latest");
  const categories = await response2.json();

  const articles = {
    topVideo,
    catVideos,
    categories
  }

  return{
      props: {
          articles
      }
  }
 }