import { Router } from 'express';
import type { Request, Response } from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import type { paths, ErrorResponse } from '../contract/types';

import type { CMSPageContent } from '../contract/types';

export const cmsRouter = Router();


const CMS_DIR = path.join(__dirname, 'cms');

async function getPageContent(slug: string): Promise<CMSPageContent | null> {
  const filePath = path.join(CMS_DIR, `${slug}.md`);
  const stats = await fs.stat(filePath);
  const content = await fs.readFile(filePath, 'utf-8');

  return {
    slug,
    lastUpdated: stats.mtime.toISOString(),
    content
  };
}

async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(CMS_DIR);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

cmsRouter.get('/pages/:slug', async (
  req: Request<paths['/cms/pages/{slug}']['get']['parameters']['path']>,
  res: Response<paths['/cms/pages/{slug}']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const { slug } = req.params;
  const page = await getPageContent(slug);

  if (!page) {
    return res.status(404).json({ message: 'Page not found' });
  }

  return res.json(page);
});

cmsRouter.get('/pages', async (
  _req: Request,
  res: Response<paths['/cms/pages']['get']['responses']['200']['content']['application/json']>
) => {
  const slugs = await getAllSlugs();
  const pages = await Promise.all(
    slugs.map(async slug => await getPageContent(slug))
  );
  
  return res.json(pages.filter((page): page is CMSPageContent => page !== null));
});
