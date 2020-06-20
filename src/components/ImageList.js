import React from "react";

const log = console.log;

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;