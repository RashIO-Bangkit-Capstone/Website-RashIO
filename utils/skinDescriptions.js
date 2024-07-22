// utils/skinDescriptions.js
import skinDescriptions from "./skinDescriptions.json";

export const getSkinDescription = (skinType) => {
  return skinDescriptions[skinType] || {};
};
