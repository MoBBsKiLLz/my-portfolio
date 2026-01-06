export const getProjectAspectRatio = (type) => {
  const aspectRatios = {
    desktop: "aspect-video",        // 16:9 for desktop/web apps
    mobile: "aspect-[9/16]",        // 9:16 for mobile apps
    tablet: "aspect-[4/3]",         // 4:3 for tablet apps
    square: "aspect-square",        // 1:1 for square screenshots
  };
  
  return aspectRatios[type] || "aspect-video"; // Default to desktop
};

export const getProjectImageClasses = (type) => {
  // Mobile apps look better with less padding since they're centered
  const mobilePadding = type === "mobile" ? "p-4 sm:p-6 md:p-8" : "p-2 sm:p-4";
  
  return {
    padding: mobilePadding,
    objectFit: "object-contain",
  };
};