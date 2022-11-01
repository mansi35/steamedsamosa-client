/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import './ImagesBanner.scss';

const setting = {
  width: '100%',
  height: ['250px', '170px'],
  layout: [3, 4],
  photos: [
    {
      source:
        'https://cdn0.weddingwire.in/article/0765/3_2/1280/jpg/105670-indian-wedding-quotes-and-poems-6.webp',
    },
    {
      source:
        'https://www.tourmyindia.com/blog//wp-content/uploads/2018/10/7-Reasons-Why-Indian-Weddings-are-the-Best-Cultural-Experience.jpg',
    },
    {
      source:
        'https://eivans.wpenginepowered.com/wp-content/uploads/2021/05/how-long-do-wedding-photos-take-003.jpg',
    },
    {
      source:
        'https://thebutterflypavilion.com/wp-content/uploads/2021/08/pizza-bar-1-768x512.jpg',
    },
    {
      source:
        'https://www.bestindianweddingsitaly.com/wp-content/uploads/2020/03/hindu-wedding-in-Italy-buffet-960x720.jpg',
    },
    {
      source:
        'https://blog.byoh.in/wp-content/uploads/2016/04/Man-course-food-at-indian-weddding.jpg',
    },
    {
      source:
        'https://blog.byoh.in/wp-content/uploads/2016/04/Moong-ki-dal-ka-halwa.jpg',
    },
    {
      source:
        'https://assets.vogue.in/photos/5ebcef406591bc79da39277a/2:3/w_1920,c_limit/Smiti%20Mittal%20and%20Nilesh%20Khatwani%20wedding%2027.jpg',
    },
  ],
  showNumOfRemainingPhotos: true,
};

function ImagesBanner() {
  return (
    <div className="imagesbanner">
      <ReactPhotoCollage {...setting} />
    </div>
  );
}

export default ImagesBanner;
