import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import App from "next/app";

function MyApp({ Component, pageProps }) {
 
 const closeModal =(e)=>{
  let RW_video_modal = document.getElementById('RW_video_modal');
  RW_video_modal.classList.remove('active');
  let player = e.target.parentNode.childNodes[1];
  console.log(player);
  player.pause();
}
 return <>
  <Component {...pageProps} />
  <div className = "RW_video_modal" id = "RW_video_modal">
        <button id = "modal_video_close" onClick = {closeModal}>x</button>
          <video id = "modal_video" width="" height="" controls>
              <source id = "modal_video_source" src="" type="video/mp4"/>
          </video>                                                    
    </div>

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