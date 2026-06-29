import React from 'react';

export default function PDFViewer({ src, height = '600px' }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <iframe 
        src={src} 
        width="100%" 
        height={height}
        style={{ border: '1px solid #ddd', borderRadius: '4px' }}
        title="PDF Viewer"
      />
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <a 
          href={src} 
          download 
          style={{ 
            padding: '8px 16px', 
            background: '#3b82f6', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          📥 Télécharger le PDF
        </a>
      </div>
    </div>
  );
}