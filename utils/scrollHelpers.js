export const scrollToSection = (section, scrollRef) => {
    if (!scrollRef?.current) return;
  
    const sectionIndexMap = {
      hero: 0,
      about: 1,
      skills: 2,
    };
  
    const pageIndex = sectionIndexMap[section];
    const pageHeight = window.innerHeight;
  
    scrollRef.current.scrollTo({
      top: pageIndex * pageHeight,
      behavior: "smooth",
    });
  };
  