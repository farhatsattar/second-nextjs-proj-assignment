
import React from "react";
import Link from "next/link";





    function Home() {

      return (
        <div>

         <h1 className="font-bold"> welcome to home webpage!</h1>
         <br/>
         <Link href={'/HomePage'}>HomePage</Link>
          </div>
          )
    }
   export default Home;
    
  

