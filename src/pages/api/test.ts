import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = { id: 1, usename: 'example' };
  const token = jwt.sign(user, 'ABC');

  if (!req.headers['authorization']) {
    res.setHeader('Authorization', `bearer ${token}`);
    res.status(403).json({ token });
  }

  res.status(200).json({ token });
}