// utils/skinDescriptions.js
// import skinDescriptions from "./skinDescriptions.json";

let skinDescriptions = {};

fetch("/api/result")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    skinDescriptions = data;
    // console.log("Skin descriptions fetched successfully");
    // console.log(skinDescriptions);
  })
  .catch((error) => {
    console.error("Failed to fetch skin descriptions:", error);
  });

export const getSkinDescription = (skinType) => {
  return skinDescriptions[skinType] || {};
};
