import download from '../assets/images/download.svg';


const Work = () => {
  return (
    <>

     <div className="section2">
      <div className="selectedwork">SELECTED <br /> WORKS</div>
      <div className="first">
        <div className="first-1"></div>
        <div className="divider-1"></div>
        <div className="first-2"></div>
      </div>
      <div className="second">
          <div className="second-1"></div>
          <div className="divider-11"></div>
          <div className="second-2"></div>
          <div className="divider-12"></div>
          <div className="second-3"></div>
          <div className="divider-13"></div>
          <div className="second-4">
            <div className="boxbutton">
              <span>All works</span><div className="arr"><img src={download} alt="arrow svg" /></div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
