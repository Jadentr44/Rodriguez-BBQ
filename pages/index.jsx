import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <div style={{backgroundImage:'url(https://memphisbbqco.com/wp-content/uploads/2020/09/MemphisBBQCo.jpg)'}} className="w-screen md:aspect-[16/8] aspect-[9/6] bg-red-300 bg-fixed bg-center bg-cover bg-no-repeat max-h-screen"></div> */}
      <div>
        <img
          className=" max-h-screen w-full object-center object-cover"
          src="https://memphisbbqco.com/wp-content/uploads/2020/09/MemphisBBQCo.jpg"
          alt=""
        />
      </div>
      <section className="max-w-5xl mx-auto mt-8">
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5 px-4">
          <Card name={"ribs"} price={12.99} />
          <Card name={"ribs"} price={12.99} />
          <Card name={"ribs"} price={12.99} />
        </div>
      </section>
      <section className="md:max-w-5xl max-w-[85%]  group mx-auto mt-8 grid sm:grid-cols-2">
        <div className="w-full aspect-square overflow-hidden">
          <img
            className=" aspect-square group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 object-cover "
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/407566919_10160557919843725_5411074778462714366_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=kVCOHt7MqCwAX-Qz2in&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDOXzZiNhljuiONr2tl9OTSAbX6Sxu9WV_N5DeHdoy2rg&oe=65B880D5"
            alt=""
          />
        </div>
        <div className="h-full  flex flex-col p-6 items-center justify-center">
          <div>
            <h3 className="md:text-4xl text-2xl font-semibold">Catering Services</h3>
            <h4 className="md:text-xl my-2">
            We provide catering services for a wide range of events, spanning from birthday celebrations to corporate meetings
            </h4>
            <button className="px-4 py-1 border-2 rounded-md md:text-lg">
              Contact
            </button>
          </div>
        </div>
      </section>
      

<footer className="bg-white rounded-lg  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="logo.jpg" className="h-12" alt="Flowbite Logo" />
               
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Rodriguez BBQ. All Rights Reserved.</span>
    </div>
</footer>


    </main>
  );
}
