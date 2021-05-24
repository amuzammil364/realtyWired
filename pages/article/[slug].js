import React from "react";
import Head from "next/head";
import Singlearticle from "../../components/Singlearticle";
import Navigation from "../../components/Navigation";
import { useRouter } from 'next/router';

const Article = ( {articles} )=>{
    const router = useRouter();
    console.log(router);
    return(
        
        <>
        <Navigation categories = {articles.categories}/>
        
        <main id = "main_root">
        <Head>
            <meta property="og:url"                content={"http://localhost:3000/article/"+articles.article.id} />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content={articles.article.title} />
            <meta property="og:description"        content={articles.article.description} />
            <meta property="og:image"              content={"https://app.realtywired.show/public/uploads/"+articles.article.thumbnail} />
        </Head>
        <Singlearticle article = {articles.article}/>
        </main>
        
        </>
    )

}

export const getServerSideProps = async (context)=>{
    
     
    let response = await fetch("https://app.realtywired.show/public/api/v1/videos/latest");
    let categories = await response.json();
    
    let slug = context.params.slug;//basically id

    let response0 = await fetch(`https://app.realtywired.show/public/api/v1/videos/${slug}`);
    let article = await response0.json();  


    const articles = {
      categories,
      article
    }
  
    return{
        props: {
            articles
        }
    }
   }

export default Article;