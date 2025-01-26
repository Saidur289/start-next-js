'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    if(!pathname.includes('dashboard')){
        return (
        
            <div>
              <nav className='flex justify-center ' >
                 <ul className='flex justify-between w-1/2'>
                     <li><Link href={'/'}>Home</Link></li>
                     <li><Link href={'/services'}>Services</Link></li>
                     <li><Link href={'/about'}>About</Link></li>
                     
                     
                 </ul>
                 
                 </nav>    
            </div>
             
         ); 
    }
    else{
        return <></>
    }
   
};

export default Navbar;