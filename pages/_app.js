import "../styles/globals.css"
import Layout from "./../components/Layout"
import Transition from "./../components/Transition"
import MetaData from "../components/MetaData"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Sora } from "@next/font/google"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout fontSora={sora}>
      <MetaData />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="flex-1">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
