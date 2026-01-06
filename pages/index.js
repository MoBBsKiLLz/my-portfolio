import Head from "next/head";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import MenuToggle from "../components/MenuToggle";
import useIsMobile from "../utils/useIsMobile";
import { useEffect } from "react";

export default function Home() {
  const isMobile = useIsMobile();

  useEffect(() => {
    // On mobile, scroll to top (intro section) on initial load
    if (isMobile) {
      const mainContainer = document.getElementById("main-scroll-container");
      if (mainContainer) {
        mainContainer.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  }, [isMobile]);

  return (
    <div className="relative">
      <Head>
        <title>Freelance frontend user interface developer, Phoenix AZ - Miguel Zepeda</title>
        <meta name="description" content="Portfolio site of Miguel Zepeda, a freelance frontend UI developer based in Phoenix, AZ." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/circlepaw.png" />
      </Head>

      {/* Page Layout */}
      <div className="flex flex-col lg:flex-row h-screen lg:h-full">
        {/* Desktop-only LeftColumn */}
        {!isMobile && (
          <div className="hidden lg:block lg:w-[50%]">
            <LeftColumn />
          </div>
        )}

        {/* RightColumn with conditional mobile intro */}
        <div className="w-full lg:w-[50%]">
          <RightColumn includeMobileIntro={isMobile} />
        </div>
      </div>

      {/* Always visible MenuToggle */}
      <MenuToggle />
    </div>
  );
}