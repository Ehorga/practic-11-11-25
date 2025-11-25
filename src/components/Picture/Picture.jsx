import styles from "./Picture.module.css";
const Picture = (props) => {
  const { src, alt } = props;
  return (
    <img
      className={styles.img}
      src={src}
      alt={alt}
      style={{ width: "200px" }}
    />
  );
};

export default Picture;
