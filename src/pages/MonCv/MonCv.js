import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Header from '../../components/Header/Header';

// Fichier scss
import './monCv.scss';
import './monCvResponsive.scss';

const Viepro = () => {
    // useState concernant le nimbre de page du pdf
    const [numPage, setNumPages] = useState(null);
    // useState concernant la page active du pdf
    const [pageNumber, setPageNumber] = useState(1);
    // Fonction de rendu du doc PDF
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPage);
        setPageNumber(1);
    }
    return (
        <div>
            <Header />
            <Document
                className='pdf'
                file='/CV_2022-03-23_Jérôme_Richard.pdf'
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page height='3000' pageNumber={pageNumber} />
            </Document>
        </div>
    );
};

export default React.memo(Viepro);
