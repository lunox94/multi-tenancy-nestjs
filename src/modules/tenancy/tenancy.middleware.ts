import { TENANT_HEADER } from './consts';
import { Request, Response, NextFunction } from 'express';

export function tenancyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tenantId = req.headers[TENANT_HEADER] as string | undefined;

  if (tenantId) {
    req.tenantId = tenantId;
  }

  next();
}
