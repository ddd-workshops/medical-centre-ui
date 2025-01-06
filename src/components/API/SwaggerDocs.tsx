import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { styles } from '../../ui-library/DesignEnums';

export const SwaggerDocs = () => {
  return (
    <div className={`${styles.ACCENT.background} min-h-screen p-4`}>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className={`text-2xl font-bold ${styles.ACCENT.textDark} mb-4`}>API Documentation</h1>
        <SwaggerUI url="/swagger.yaml" />
      </div>
    </div>
  );
};