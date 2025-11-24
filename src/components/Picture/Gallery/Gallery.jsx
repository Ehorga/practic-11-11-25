import Picture from '../Picture/Picture';
import arrayPics from './data';

const Gallery = () => {
  return (
    <section>
      {arrayPics.map((pic) => {
        <Picture src={pic.src} alt={pic.alt} />
      })}
    </section>
  );
};

export default Gallery;
