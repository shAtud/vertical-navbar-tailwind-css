import Navbar from "../components/Navbar";
import Image from "next/image";
export default function Home() {  
 
  return (
  <div className="flex  items-center justify-center  w-screen min-h-screen">
     <Image
          src = '/bg.jpg'
          layout = 'fill'
          className="bg-fixed"
      />
     <Navbar/>
            
    
    </div>
  )
}
