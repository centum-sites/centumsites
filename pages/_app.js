import '../styles/globals.css'
import '../styles/_mixins.scss'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
