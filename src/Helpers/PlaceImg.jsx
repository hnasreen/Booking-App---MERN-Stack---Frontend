import Image from "../Helpers/Image.jsx";

const PlaceImg = ({place,index=0,className=null}) => {
  if (!place.photos?.length) {
    return '';
  }
  
    const imageClassName = className ? `${className} w-full h-full object-cover` : 'w-full h-full object-cover';
  
  return (
    <Image className={imageClassName} src={place.photos[index]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
  );
}

export default PlaceImg