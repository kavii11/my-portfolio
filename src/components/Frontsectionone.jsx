import svg from '../assets/images/react.svg';
import js from '../assets/images/js-.png';
import html from '../assets/images/html.svg';       
import css3 from '../assets/images/css3.svg';
import git from '../assets/images/git.svg';
import bootstrap from '../assets/images/bootstrap.svg';
import js1 from '../assets/images/js.svg';
import coding from '../assets/images/coding.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Sectionone ()  {
    return (
      <>
        <div className="blocks">
        <div className="content">
          <div className="title">
            'hi, my name is'
            <strong className="purple">naveen</strong>
          </div>
          <div className="designword">
            i<span> design</span> and develop
          </div>
          <button type="button">contact now</button>
        </div>
        <div className="features">
          ex<br />per<br />tises
        </div>
        <div className="divider"></div>
        <div className="rotate-slider">
          <div className="svg-icons">
            <div className="marquee">
              <div className="marquee-content">
              <img src={svg} alt="react svg file" />
              <img src={js} alt="js png file" />
              <img src={html} alt="html svg file" />
              <img src={css3} alt="css3 svg file" />
              <img src={git} alt="git svg" />
              <img src={bootstrap} alt="bootstrap svg" />
              <img src={js1} alt="js svg" />
              <img src={coding} alt="coding svg" />
            </div>
            </div>
            </div>
          </div>
        </div>
      
      <div className="svg-icons2"> 
      <DotLottieReact
      src="https://lottie.host/8cbb977a-ab3d-422b-9746-81169fd1a1d8/ePpKZlCHMH.lottie"
      loop
      autoplay
    />
      
    </div>
    </>
    );
    }