import Veggie from "../components/Veggie/Veggie";
import Popular from "../components/Popular/Popular";
import {motion} from 'framer-motion';


function Home() {
  return (
    <motion.div animate={{opactity: 1}} inital={{opacity:0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <Veggie/> 
        <Popular/>
    </motion.div>
  )
}

export default Home;