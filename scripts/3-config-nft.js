import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x4E953584EaaeB49a91D0456C7d6d4B4B180B92A5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Live The Portugal Life",
        description: "This NFT will give you access to the GVO DAO!",
        image: readFileSync("scripts/assets/altisbelem.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();