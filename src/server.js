import express from "express";
import bodyParser from "body-parser"; //Lấy tham số mà phía clients sử dụng cho chúng ta: query
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config(); //giúp chạy process.env

let app = express();

//config app

app.use(bodyParser.json()); //Cấu hính tham số
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;  //Port = undefined thì port 8080

app.listen(port, () => {
  //Callback
  console.log("NodeJs is running on the port :" + port);
})