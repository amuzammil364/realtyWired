import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <Footer/>
  </>
}

MyApp.getInitialProps = async (appContext)=>{

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const response = await fetch("https://app.realtywired.show/public/api/v1/videos/latest");
  const categories = await response.json();

 
   return { ...appProps, categorie: categories }; 
 }

 export default MyApp