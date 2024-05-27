import fs from 'node:fs'
import path from 'node:path'

export const blocks = {
  get head() {
    return fs.readFileSync(path.join("..", "common", "blocks", "head.html"), 'utf8')
  },
  get top() {
    return fs.readFileSync(path.join("..", "common", "blocks", "top.html"), 'utf8')
  }
}
