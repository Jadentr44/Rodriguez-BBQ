import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main>
    <Navbar />
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
      
   </main>
  );
}
