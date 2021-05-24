import React from "react";
import Link from "next/link";

const Footer = ()=>{

    return(
        <footer className="bg-danger p-5 mt-5">
            <div className="text-center text-white container">
                <h6>©2021 RealtyWired.show all rights reserved | <Link href="/privacy-policy">Privacy policy</Link></h6>
            </div>
        </footer>
    );

}
export default Footer