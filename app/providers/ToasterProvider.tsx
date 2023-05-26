'use client';

import { Toaster } from "react-hot-toast";

//since its a foreign lib its better to put in a separate folder
//if we directly use the toaster inside our clientOnly comp we ll get error, coz we re importing a comp which req useEffect, and it req atleast 1 parent which is client

const ToasterProvider = () => {
  return ( 
    <Toaster />
   );
}
 
export default ToasterProvider;
