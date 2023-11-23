import BlueRectangle from "./assets/blue-rect";
import RedRectangle from "./assets/red-rect";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="w-full h-full bg-secondary-dark flex items-center justify-between">
      <div className="flex-1">
        <RedRectangle className="w-full h-full" />
      </div>
      <motion.div initial={{width: 0, opacity: 0}} transition={{duration: 1}} animate={{width: 'auto', opacity: 1}} className="font-jetmono text-center text-white whitespace-nowrap flex flex-col items-center justify-center">
        <div className="text-8xl leading-[1.3]">DevsUnify</div>
        <div className="text-2xl leading-[1.3]">A community for developers.</div>
      </motion.div>
      <div className="flex-1">
        <BlueRectangle className="w-full h-full" />
      </div>
    </div>
  );
}

export default App;
