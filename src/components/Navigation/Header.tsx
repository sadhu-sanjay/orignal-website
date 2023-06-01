import style from "./header.module.css";

export const ChicaneHeader = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.chicaneHeader}>
          Welcome to the Chicane Community!
        </div>
        <div className={style.chicaneHeaderImage} />
        <div className={style.chicaneTextButtonStyle}>
          <div className={style.chicanceTextSubline}>
            Go from design to site with Framer, the web builder for creative pros.
          </div>
          <div className={style.chicaneButtonContainer}>
            <div className={style.chicaneButtonText}>Get Started</div>
          </div>
        </div>
      </div>
    </>
  );
};

const ChicaneHeaderContainerStyle = () => {
  return (
    <style>
      {`
            
            `}
    </style>
  );
};

const ChicaneHeaderStyle = () => {
  return (
    <style>
      {`
            
            `}
    </style>
  );
};

const ChicaneImageStyle = () => {
  return (
    <style>
      {`
      } `}
    </style>
  );
};
