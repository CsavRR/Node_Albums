import {Router} from 'express'
import * as controller from '../controllers/albumsController.js';
const router = Router();

router.get("/", controller.getAllAlbums);
router.get("/:id", controller.getAlbumById);
router.post("/", controller.AddAlbum);
router.delete("/:id", controller.DeleteAlbum);
router.put("/:id", controller.ReplaceAlbum);
export default router;