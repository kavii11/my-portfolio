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
            <marquee behavior="" direction="">
              <img src={svg} alt="react svg file" />
              <img src={js} alt="js png file" />
              <img src={html} alt="html svg file" />
              <img src={css3} alt="css3 svg file" />
              <img src={git} alt="git svg" />
              <img src={bootstrap} alt="bootstrap svg" />
              <img src={js1} alt="js svg" />
              <img src={coding} alt="coding svg" />
            </marquee>
          </div>
        </div>
        
      </div>
      <div className="svg-icons2"> 
      <DotLottieReact
      src="https://lottie.host/8cbb977a-ab3d-422b-9746-81169fd1a1d8/ePpKZlCHMH.lottie"
      loop
      autoplay
    />
      <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7h20L12 2z"/><path d="M2 7v10l10 5 10-5V7H2z"/></svg>
      <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7h20L12 2z"/><path d="M2 7v10l10 5 10-5V7H2z"/></svg>    
      <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7h20L12 2z"/><path d="M2 7v10l10 5 10-5V7H2z"/></svg>

    </div>
    </>
    );
    }