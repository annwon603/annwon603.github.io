import Link from "next/link";
import {Space_Mono} from 'next/font/google';

const space_mono = Space_Mono({
    subsets: ['latin'],
    style: ['italic' , 'normal'],
    preload: true,
    weight: ['400','700'],

})

const NavLink = ({href, title}) => {
    return (
        <Link 
            href={href}
            className = {`${space_mono.className} block py-2 pl-3 pr-4 text-[#A99DCF] hover:text-[#2E2C39] sm:text-sm rounded`}
        >
            {title}
        </Link>
    );

};

export default NavLink;