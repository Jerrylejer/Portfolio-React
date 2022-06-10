import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Header from '../../components/Header/Header';
import ReactTooltip from 'react-tooltip';

// Fichier scss
import './monCv.scss';

const Viepro = () => {
    // useState concernant le nombre de page du pdf
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
            <div className='vie-pro'>
                <p className='vie-pro-text'>
                    Cliquez sur le CV pour le consulter et le télécharger
                </p>
                <div
                    className='pdf__container'
                    data-tip='Lien Cv - nouvelle fenêtre'
                    data-place='right'
                >
                    <Document
                        className='pdf'
                        file='/CV_2022-06-10_Jérôme_Richard_Développeur_Web.pdf'
                        onLoadSuccess={onDocumentLoadSuccess}
                        onClick={() =>
                            window.open(
                                '/CV_2022-06-10_Jérôme_Richard_Développeur_Web.pdf',
                                '_blank'
                            )
                        }
                    >
                        <Page height='500' pageNumber={pageNumber} />
                    </Document>
                    <ReactTooltip delayHide={200} effect='solid' />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Viepro);
