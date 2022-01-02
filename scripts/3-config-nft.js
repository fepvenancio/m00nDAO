import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x334f37b59bd0222208f758dF47D41Cd56b477065",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Spacecraft",
        description: "This NFT will give you access to m00nDAO!",
        image: readFileSync("scripts/assets/spaceship.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()