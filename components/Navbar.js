import AboutIcon from "./AboutIcon";
import CategoriesIcon from "./CategoriesIcon";
import ContactIcon from "./ContactIcon";
import HomeIcon from "./HomeIcon";
import LogoutIcon from "./LogoutIcon";
import PostsIcon from "./PostsIcon";
import SearchIcon from "./SearchIcon";
import Image from "next/image";


const Navbar = props=>{
   
    return(
        <div className="w-fit sm:min-w-[200px] h-[90vh]  fixed left-[2px] top-[50%] translate-y-[-50%] bg-black/50 backdrop-blur-[3px] backdrop-saturate-50 rounded-[5px] flex flex-col sm:px-0 px-1">
            {/* user info */}
            <div className="flex w-[90%]   mx-auto  items-center space-x-2 py-2 ">
                <div className="w-[40px] h-[40px] rounded-[50%]  relative  ">
                    <Image src='/sh_atud.jpg' layout ='fill' className="absolute rounded-[50%]"/>
                </div>
                <div className="sm:flex flex-col text-white/80   space-y-0 hidden ">
                    <div className=" text-lg font-[700]">sh_atud</div>
                    <div className="text-[0.7em] text-white/90">subscribe@gmail.com</div>
                </div>
              

            </div>
            <hr className="text-gray-900 border-1 w-[100%]"/>
            {/* Searhbar */}
            <div className="sm:flex  text-white/80  w-[90%] mx-auto mt-2 bg-white/10 rounded-[15px] px-2 py-1  hidden  ">
                <SearchIcon className='w-6 h-6'/>
                <input className="w-[100px] flex-grow outline-none bg-transparent indent-2 placeholder-white/80 " placeholder="search ..."/>
            </div>
            {/* Links */}
            <ul className="mt-2 flex flex-col h-[100%] pb-2">
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group  relative">
              
                   <HomeIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline ">Home</span>
                     <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%]">Home</div>
                   
               </li>
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative">
                   <PostsIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline">Posts</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">Posts</div>
                   
               </li>
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative">
                   <CategoriesIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline">Categories</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">Categories</div>
                   
               </li>
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative">
                   <AboutIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline">About</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%] ">About</div>
                   
               </li>
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group relative">
                   <ContactIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline">Contact</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%]">Contact</div>
                   
               </li>
               <li className="flex text-white/80 items-center space-x-2  hover:bg-white/10   hover:cursor-pointer w-[90%] mx-auto rounded-[15px] p-2 group mt-auto relative">
                   <LogoutIcon className='w-7 group-hover:text-white'/>
                    <span className="text-sm group-hover:text-white font-[600] hidden sm:inline">Logout</span>
                    <div className="absolute group-hover:sm:hidden   hidden group-hover:inline text-white/90 right-[-10%] top-1/2 translate-y-[-50%] translate-x-[100%]">Logout</div>
                   
               </li>
              
            </ul>
           
        </div>
    )
}

export default Navbar;