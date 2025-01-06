import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useState, useEffect } from 'react';
import { styles } from '../../ui-library/DesignEnums/MessageType';

export const SwaggerDocs = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/swagger.yaml')
      .catch(() => setError('Failed to load API documentation'));
  }, []);

  return (
    <div className={`${styles.ACCENT.background} min-h-screen p-4`}>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className={`text-2xl font-bold ${styles.ACCENT.textDark} mb-4`}>API Documentation</h1>
        {error ? (
          <div className={styles.ALERT.text}>{error}</div>
        ) : (
          <SwaggerUI url="/swagger.yaml" />
        )}
      </div>
    </div>
  );
};