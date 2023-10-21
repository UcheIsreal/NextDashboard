import Image from 'next/image'
import Barchat from "./components/Barchat";
import Header from "./components/Header";
import Recentorders from "./components/Recentorders";
import Topcards from "./components/Topcards";



export default function App({}) {
  return (
    <>
      <div>
       
        <Header />
        <Topcards />
        <div className="w-[82vw] sm:w-[80vw] mx-auto px-[60px] gap-2 sm:px-5 grid sm:grid-cols-3 grid-cols-1  ">
          <Barchat />
          <Recentorders />
        </div>
      </div>
    </>
  );
}