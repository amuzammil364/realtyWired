import React from "react";
import Categoryarticles from "../../components/Categoryarticles";
import Navigation from "../../components/Navigation";

const Category = ({articles})=>{
    // console.log(articles);
    return(
        <>
        <Navigation categories = {articles.categories}/>
        <main id = "main_root">
        <Categoryarticles articles = {articles.articless}/>
        </main>
        </>
    )

}



export const getServerSideProps = async (context)=>{
    
     
    let response = await fetch("https://app.realtywired.show/public/api/v1/videos/latest");
    let categories = await response.json();
    
    let slug = context.params.slug;//basically id

    let response0 = await fetch(`https://app.realtywired.show/public/api/v1/videos/by_category/${slug}`);
    let articless = await response0.json();  
    articless = articless.data;


    const articles = {
      categories,
      articless
    }
  
    return{
        props: {
            articles
        }
    }
   }

   export default Category;
