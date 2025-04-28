import Head from "next/head";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import MenuToggle from "../components/MenuToggle";
import useIsMobile from "../utils/useIsMobile";
import { useRef } from "react";

export default function Home() {
  const isMobile = useIsMobile();
  const scrollRef = useRef();

  return (
    <div className="relative">
      <Head>
        <title>Freelance frontend user interface developer, Phoenix AZ - Miguel Zepeda</title>
        <meta name="description" content="Portfolio site of Miguel Zepeda, a freelance frontend UI developer based in Phoenix, AZ." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/animal.png" />
      </Head>

      {/* Page Layout */}
      <div className="flex flex-col lg:flex-row h-screen lg:h-full">
        {/* Desktop-only LeftColumn */}
        {!isMobile && (
          <div className="hidden lg:block lg:w-[50%]">
            <LeftColumn />
          </div>
        )}

        {/* RightColumn always visible */}
        <div className="w-full lg:w-[50%]">
        <RightColumn includeMobileIntro={isMobile} scrollRef={scrollRef} />
        </div>
      </div>

      {/* Always visible MenuToggle */}
      <MenuToggle />
    </div>
  );
}
