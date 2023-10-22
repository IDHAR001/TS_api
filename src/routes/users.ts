import {Router} from "express";

const router: Router = Router();

// /users/reg
router.get("/reg", () => {
    console.log("reg request");
    
})

export default router;