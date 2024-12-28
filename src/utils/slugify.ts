export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // Remove non-word chars
    .replace(/[\s_-]+/g, '-')    // Replace spaces and underscore with hyphen
    .replace(/^-+|-+$/g, '');    // Remove leading/trailing hyphens
};
  