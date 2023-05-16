import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router(); 

// Tất cả các route sẽ viết ở đây
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCrud);
    router.post('/post-crud', homeController.postCrud);
    router.get('/get-crud', homeController.displayGetCrud);
    router.get('/edit-crud', homeController.getEditCrud);
    router.post('/put-crud', homeController.putCrud);
    return app.use("/", router);
}

module.exports = initWebRoutes;