import Footer from "../components/Footer";
import react from "../assets/images/react.svg";
import Html from "../assets/images/html.svg";
import Css from "../assets/images/css.svg";
import Js from "../assets/images/js.svg";
import Ts from "../assets/images/ts.png";
import react_native from "../assets/images/react-native.svg";
import Api from "../assets/images/api.png";
import Tailwind from "../assets/images/tailwind.svg";
import Shadcn from "../assets/images/shadcn.png";
import Node_js from "../assets/images/node-js.png";
import Github from "../assets/images/github.png";
import Wordpress from "../assets/images/wordpress.png";

export default function Projects() {
  return (
    <>
      <section>
        <div class="parent">
          <div class="div1">
            <div class="skills">skills</div>
            <div class="skills-container">
              <div class="skills-list">
                <h5>Languages</h5>
                <ul>
                  <li>
                    <img src={Html} alt="html" />
                    HTML
                  </li>
                  <li>
                    <img src={Css} alt="css" />
                    CSS
                  </li>
                  <li>
                    <img src={Js} alt="javascript" />
                    JavaScript
                  </li>
                  <li>
                    <img src={Ts} alt="typescript" />
                    TypeScript
                  </li>
                </ul>
                <h5>Libraries</h5>
                <ul>
                  <li>
                    <img src={react} alt="react" />
                    React
                  </li>
                  <li>
                    <img src={react_native} alt="react native" />
                    React Native (experience)
                  </li>
                  <li>
                    <img src={Api} alt="context api" />
                    Context API
                  </li>
                </ul>
                <h5>Frameworks & Tools</h5>
                <ul>
                  <li>
                    <img src={Tailwind} alt="tailwind" />
                    Tailwind CSS
                  </li>
                  <li>
                    <img src={Shadcn} alt="shadcn" />
                    shadcn/ui
                  </li>
                  <li>
                    <img src={Node_js} alt="node js" />
                    Node.js
                  </li>

                  <li>
                    <img src={Github} alt="github" />
                    GitHub
                  </li>
                  <li>
                    <img src={Wordpress} alt="wordpress" />
                    WordPress
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="div2"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
