import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useState, useEffect } from 'react';

export const SwaggerDocs = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/swagger.yaml')
      .catch(() => setError('Failed to load API documentation'));
  }, []);

  return (
    <div className="bg-green-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-4">API Documentation</h1>
        {error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <SwaggerUI url="/swagger.yaml" />
        )}
      </div>
    </div>
  );
};