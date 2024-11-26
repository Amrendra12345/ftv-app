import Image from "next/image";

const Footer = (props) => {
  return (
    <footer className="w-full bg-gray-50 pt-4 mt-auto">
       <div className="container mx-auto">
           <div className="w-full flex sm:flex-col">
              <Image src={"/img/logo.webp"}  width={180} height={45} alt="fast track visa"/>
           </div>
       </div>
       <div className="w-full bg-gray-300 py-2">
         <p className="text-center text-gray-800 text-sm font-semibold">© 2024 Fast Track Visa. All rights reserved.</p>
       </div>
    </footer>

  );

}

export default Footer;
