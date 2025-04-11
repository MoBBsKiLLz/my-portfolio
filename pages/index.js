import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import useIsMobile from "../utils/useIsMobile";
import MenuToggle from "../components/MenuToggle";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="relative">
      {/* Always-visible menu toggle */}
      <MenuToggle />

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
          <RightColumn includeMobileIntro={isMobile} />
        </div>
      </div>
    </div>
  );
}
