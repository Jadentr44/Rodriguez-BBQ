import "@/styles/globals.css";
import { Bubblegum_Sans,Tinos } from "next/font/google";
const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400"],
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --bubblegumSans: ${bubblegumSans.style.fontFamily};
          --tinos: ${tinos.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
