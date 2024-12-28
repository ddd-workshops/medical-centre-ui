import { useParams } from "react-router-dom";

// 'ID-slugA-slugB' => ID
export const useSlugRoute = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
      throw new Error('URL slug is required');
  }
  const id = slug.split('-')[0];

  return id
}
