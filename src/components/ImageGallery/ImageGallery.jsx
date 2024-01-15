import { Box } from '@mui/material';
import React from 'react'

const ImageGallery = () => {

    const imageList = props?.images?.map((image) => {
        return {
            original: image,
            thumbnail: image,
        };
    });

  return (
    <Box>
        <ImageGallery items = {imageList} showBullets showThumbnails={false}/>
    </Box>
  )
}

export default ImageGallery