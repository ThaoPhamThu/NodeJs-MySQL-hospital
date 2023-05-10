import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router(); 

// Tất cả các route sẽ viết ở đây
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    return app.use("/", router);
}

module.exports = initWebRoutes;