import "./Preloader.css";
function Preloader() {
  return (
    <>
      <h2 className="preloader__message">
        The url entered does not correspond to a page on Recipe Webook.
      </h2>
      <div className="circle-preloader"></div>
    </>
  );
}

export default Preloader;
