import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Menu from "@/components/Menu";
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

      <section
        id="menu"
        className="md:max-w-5xl max-w-[85%] pt-20   mx-auto  flex sm:flex-row flex-col items-center"
      >
        <div className="sm:w-1/2 aspect-square overflow-hidden">
          <img
            className=" aspect-square group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 object-cover "
            src={"menu.jpg"}
            alt=""
          />
        </div>
        <div className="h-full sm:w-1/2  flex flex-col p-6 sm:px-6 px-0 items-center justify-center">
          <div>
          <h2 className="home-heading">Menu</h2>
            <p className="md:text-xl my-2">
              Discover a world of tender, smoked meats and bold flavors, where
              each bite tells the story of traditional barbecue artistry. From
              succulent brisket to spicy pulled pork, our menu is a celebration
              of all things smoky and delicious.
            </p>
            <Link href={"/menu"}>
              <button className="home-button">
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="catering"
        className="md:max-w-5xl max-w-[85%] pt-20   mx-auto  flex sm:flex-row-reverse flex-col items-center"
      >
        <div className="sm:w-1/2 aspect-square overflow-hidden">
          <img
            className=" aspect-square group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 object-cover "
            src={"catering.jpg"}
            alt=""
          />
        </div>
        <div className="h-full sm:w-1/2 sm:text-right flex flex-col p-6 sm:px-6 px-0 items-center justify-center">
          <div>
            <h2 className="home-heading">
              Catering Services
            </h2>
            <p className="md:text-xl my-2">
              We provide catering services for a wide range of events, spanning
              from birthday celebrations to corporate meetings.
            </p>
            <Link href={"/contact"}>
              <button className="home-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="local"
        className="md:max-w-5xl max-w-[85%] pt-20   mx-auto  flex sm:flex-row flex-col items-center"
      >
        <div className="sm:w-1/2 aspect-square overflow-hidden">
          <img
            className=" aspect-square group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 object-cover "
            src="local.jpg"
            alt=""
          />
        </div>
        <div className="h-full sm:w-1/2  flex flex-col p-6 sm:px-6 px-0 items-center justify-center">
          <div>
          <h2 className="home-heading">
              Locally Owned{" "}
            </h2>
            <p className="md:text-xl my-2">
              locally owned and deeply rooted in our community, where every dish
              is a celebration of our shared spirit and tradition, offering an
              authentic and heartwarming dining experience
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
