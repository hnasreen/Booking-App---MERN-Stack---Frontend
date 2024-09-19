const Image = ({ src, ...rest }) => {

  const cloudinaryBaseURL = `https://res.cloudinary.com/${import.meta.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload/`;

  const imageUrl = src && src.includes('https://') 
    ? src 
    : `${cloudinaryBaseURL}${src}`;

  return (
    <img {...rest} src={imageUrl} alt={rest.alt || ''} />
  );
};

export default Image;
