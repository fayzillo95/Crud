import fs from "fs"
import path from "path"

let Io = {
    fsileReader(){
        return JSON.parse(fs.readFileSync(path.join(proxess.cwd(),"src","database","users.json")))
    }
}