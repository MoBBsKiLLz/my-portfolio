export const getProjectImageClasses = (type) => {
  // Mobile apps look better with less padding since they're centered
  const mobilePadding = type === "mobile" ? "p-4 sm:p-6 md:p-8" : "p-2 sm:p-4";
  
  return {
    padding: mobilePadding,
    objectFit: "object-contain",
  };
};