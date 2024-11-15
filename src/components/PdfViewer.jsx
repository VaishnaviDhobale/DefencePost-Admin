import React, { useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Box } from '@chakra-ui/react';


const PdfViewer = () => {
  let { link } = useParams();
  console.log(link)

  return <>
  <Navbar/>
  <Box display={"flex"} justifyContent={"center"}>
  {/* <iframe src={decodeURIComponent(link)} sandbox="allow-same-origin allow-scripts" width={"820px"} height={"800px"} frameborder="0">ok</iframe> */}
  <iframe src={link.includes("drive") ? `${decodeURIComponent(link)}`:`https://www.youtube.com/embed/${decodeURIComponent(link)}`} sandbox="allow-same-origin allow-scripts" width={"100%"} height={"800px"} frameborder="0">ok</iframe>
  </Box>
  </>
};

export default PdfViewer;
