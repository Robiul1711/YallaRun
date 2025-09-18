import React from "react";
import pdf from "/demo.pdf";
import { Document } from "react-pdf";
import { PDFViewer } from '@react-pdf/renderer';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
const PdfViewer = () => {

    function onDocumentLoaded(data){
        console.log(data);
    }
  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoaded}>
        
      </Document>
    </div>
  );
};

export default PdfViewer;
