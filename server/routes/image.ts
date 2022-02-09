import { Router } from 'express';
import { generateUploadURL } from '../services/s3';

const router = Router();

router.get('/s3upload', async (req, res) => {
  // Gets pre-signed url from S3
  const url = await generateUploadURL();
  res.send(url);
});

export default router;
