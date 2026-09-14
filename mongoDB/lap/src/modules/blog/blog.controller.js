import {Router} from 'express';
import express from 'express';



const router = Router();

router.get('/', (req, res) => {
  res.json({msg:'Blog page'});
});

export default router;