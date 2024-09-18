const Image = ({src,...rest}) => {
  // console.log(src)
    src = src && src.includes('https://')
      ? src
      : `http://localhost:8080/uploads/${src}`;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }

  export default Image