import express from "express"

let viewEngine = (app) => {
    app.use(express.static("./src/public")); // sử dụng express và cấu hình static cho nó
    app.set("view engine", "ejs");    // set view engine là ejs
    app.set("views","./src/views");                //set đường link sử dụng view engine

}

module.exports = viewEngine;