import { skills } from '../data'

function Skill() {
  return (
    <section className="section-block" id="skills">
      <div className="section-container">
        <div className="skills-intro">
          <span className="section-kicker">Tools &amp; technologies</span>
          <h2 className="section-heading">A practical, modern toolkit.</h2>
          <p className="section-copy">
            Technologies I use to design, build, and ship reliable web applications.
          </p>
        </div>
        <div className="skill-list">
          {skills.map((item) => (
            <span className="skill-chip" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
