import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { CMSPageContent } from '../../http/cmsService';
import { cmsService } from '../../http/cmsService';
import { styles } from '../../ui-library/DesignEnums';

interface CMSContentProps {
  slug: string;
}

export const CMSContent = ({ slug }: CMSContentProps) => {
  const [pageContent, setPageContent] = useState<CMSPageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const content = await cmsService.getPageContent(slug);
        setPageContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${styles.ACCENT.border}`}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.ALERT.text} p-4 rounded-lg bg-red-50 border border-red-200`}>
        {error}
      </div>
    );
  }

  if (!pageContent) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-4">
        Last updated: {new Date(pageContent.lastUpdated).toLocaleDateString()}
      </div>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({children}) => <h1 className="text-4xl font-bold text-gray-800 mb-6">{children}</h1>,
          h2: ({children}) => <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">{children}</h2>,
          p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
          ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>,
          li: ({children}) => <li className="ml-4">{children}</li>,
          img: ({src, alt}) => (
            <div className="my-6">
              <img 
                src={src} 
                alt={alt} 
                className="w-full rounded-lg shadow-lg object-cover h-[400px]" 
              />
            </div>
          ),
        }}
      >
        {pageContent.content}
      </ReactMarkdown>
    </div>
  );
};