import React from 'react';
import style from './queryData.module.css';

const QueryData = ({ item }) => {
  return (
    <div className={style.container}>
      <div className={style.imgsrc}>
        {item.pagemap.cse_image && (
          <img src={item.pagemap.cse_image[0].src} className={style.image} />
        )}
      </div>
      <div className={style.details}>
        <a href={item.link} className={style.link}>
          {item.displayLink}
        </a>
        <div className={style.title}>
          {item.title}
        </div>
        <div className={style.snippet}>
          {item.snippet}
        </div>
      </div>
    </div>
  )
};

export default QueryData;
