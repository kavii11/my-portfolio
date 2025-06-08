import Footer from "../components/Footer";

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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
                <h5>Libraries</h5>
                <ul>
                  <li>React</li>
                  <li>React Native (experience)</li>
                  <li>Context API</li>
                </ul>
                <h5>Frameworks & Tools</h5>
                <ul>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>GitHub</li>
                  <li>WordPress</li>
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
