import app from "./src/index.js";
import conf from "./src/conf/conf.js";

const PORT = conf["PORT"];

app.listen(PORT,()=>{
    console.log("Server Up on "+PORT);
})