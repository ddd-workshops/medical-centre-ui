import { Router } from 'express';
import type { Request, Response } from 'express';
import { promises as fs } from 'fs';
import path from 'path';

export const cmsRouter = Router();

interface CMSPageContent {
  slug: string;
  lastUpdated: string;
  content: string;
}

const CMS_DIR = path.join(__dirname, 'cms');

async function getPageContent(slug: string): Promise<CMSPageContent | null> {
  try {
    const filePath = path.join(CMS_DIR, `${slug}.md`);
    const stats = await fs.stat(filePath);
    const content = await fs.readFile(filePath, 'utf-8');

    return {
      slug,
      lastUpdated: stats.mtime.toISOString(),
      content
    };
  } catch (error) {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(CMS_DIR);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    return [];
  }
}

cmsRouter.get('/pages/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params;
  const page = await getPageContent(slug);

  if (!page) {
    return res.status(404).json({ message: 'Page not found' });
  }

  return res.json(page);
});

// New endpoint to list all available pages
cmsRouter.get('/pages', async (req: Request, res: Response) => {
  const slugs = await getAllSlugs();
  const pages = await Promise.all(
    slugs.map(async slug => await getPageContent(slug))
  );
  
  return res.json(pages.filter((page): page is CMSPageContent => page !== null));
});
