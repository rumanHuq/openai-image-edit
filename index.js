//@ts-check
import OpenAI from 'openai';
import fs from "fs";
import { createMask } from "./createMask.js";
const openai = new OpenAI({
  apiKey: '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', // This is the default and can be omitted
});


async function main() {
  // if you don't have any mask
  // createMask()
  const image = fs.createReadStream("1024x1024.png");
  const mask = fs.createReadStream("rgba_mask.png");
  const response = await openai.images.edit({
    image,
    mask,
    prompt: "make it neon",
    n: 1,
    size: "1024x1024",
  });
  console.log(response.data[0].url);
}
main();
