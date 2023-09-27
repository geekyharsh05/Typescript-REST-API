import express from 'express';
import { PostController } from '../controllers/post.controller';

export const router = express.Router();

router.get('/', PostController.addPost);
router.post('/', PostController.getPosts);
router.get('/:id', PostController.getPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
