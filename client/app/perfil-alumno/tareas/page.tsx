import styles from '../../../styles/tareas.module.scss';
import Image from 'next/image';

const TareasAlumno = () => {
  return (
    <main>
      <h1 className={styles.title}> Tus trabajos </h1>
      <div className={styles.containerPfd}>
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <p className={styles.coments}> Comentarios </p>
        <Image
          src="/assets/pdf-icon.svg"
          alt="icono de un doc pdf"
          width={40}
          height={40}
          className={styles.pdfImage}
        />
        <p className={styles.coments}> Comentarios </p>
        <div className={styles.containerComent}> </div>
      </div>
    </main>
  );
};

export default TareasAlumno;
