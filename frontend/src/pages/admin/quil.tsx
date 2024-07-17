import React from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default () => {
    const { quill, quillRef } = useQuill();
  
    React.useEffect(() => {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
      }
    }, [quill]);
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
    );
  };