// import myPhoto from "../assets/images/headShot.jpg";

export default function About() {
  return (
    <div className="page container about-container">
      <div className="about-image">
        <img src="/assets/images/headShot.jpg" alt="Lisa Jorgensen" />
      </div>

      <div className="about-text">
        <h3>From Event Planning to Front-End Development: A Problem-Solver at Heart</h3>
        <p>
          With years of experience in operations, marketing, and event management, I have always thrived on organization, efficiency, and problem-solving. 
          I found my love for coding while streamlining workflows and automating tasks, and now, I am building a career in front-end development.
        </p>
        <p>
          My background gives me a unique edge: I approach web development with a strategic mindset, ensuring every project is user-friendly, visually compelling, and well-structured.
        </p>
        <p>
          <a href="../assets/docs/lj-full-resume.pdf" target="blank">Click here to download my full resume.</a>
        </p>
      </div>
    </div>
  );
}
