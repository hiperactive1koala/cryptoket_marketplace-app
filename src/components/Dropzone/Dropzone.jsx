import React from 'react';
import {useDropzone} from 'react-dropzone';

import useWindowSize from '../windowSize/windowSIze';
import Image from '../../Images/Image.svg'
import './Droparea.css'
function Droparea(props) {
    const wide = useWindowSize(650)
  const {getRootProps, getInputProps} = useDropzone({
      maxFiles:1,
      maxSize:104857600,
      accept: {
        'image/jpg': ['.jpg'],
        'image/png': ['.png'],
        'image/gif': ['.gif'],
        'image/svg': ['.svg'],
        'video/webm': ['.webm'],
        'video/mp4': ['.mp4'],
        'audio/mp3': ['.mp3'],

      }}
    );
  return (
    <div className="app__drop-area_container">
      <div  className='' { ...getRootProps({ className: 'dropzone app__drop-area_container-dropzone' })}>
        <input {...getInputProps()} />
        <h1 className={`${wide ? 'heading-3' : 'semibold_paragraph-2'}`}>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h1>
        <img src={Image} alt=''/>
        <div>
        <p className="semibold_paragraph-2">Drag and Drop File</p>
        <p className="semibold_paragraph-2"><span className="regular_paragraph-2">or</span> browse media on your device</p>
        </div>
      </div>

    </div>
  );
}

export default Droparea