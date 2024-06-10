import * as fs from "node:fs";
import path from "node:path";

const blocksHost = process.env.BLOCKS_HOST

export const blocks = {
  head: "",
  top: ""
}

const loadBlocks = async () => {
  try {
    const newBlocks = blocksHost ?
        await fetch(blocksHost, {method: "POST"}).then(r=>r.json()) :
        JSON.parse(fs.readFileSync(path.join("..", "common", "blocks.json"), 'utf8'))
    Object.assign(blocks, newBlocks)
  } catch (e) {
    console.log(e)
  }
}

loadBlocks().then(() => setInterval(() => loadBlocks(), 5000))

