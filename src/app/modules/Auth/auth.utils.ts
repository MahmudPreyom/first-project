import jwt from 'jsonwebtoken';
import config from '../../config';

export const createToken = (
  JwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(JwtPayload, secret, {
    expiresIn,
  });
};
