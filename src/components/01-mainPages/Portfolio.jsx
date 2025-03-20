import PortfolioCard from "../portfolioCard";
import blog from "../../assets/images/blog.png";
import digest from "../../assets/images/digest.png";
import firstPortfolio from "../../assets/images/firstPortfolio.png";
import CSSsnippetCheatsheet from "../../assets/images/CSSsnippetCheatsheet.png";

export default function Portfolio() {
  return (
    <div>
      <div className="page container">
        <h3>Software Development Portfolio</h3>
        <p>As a beginning developer, I have experience building websites and command-line interfaces using a variety of languages. To date, I have experience in:.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li> 
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React</li>
          <li>PostgreSQL</li>
        </ul>

        <p>Click on the links below to view some of the projects I have worked on. Please note: this website was built using original code, however, some of the code and design elements for the projects below were provided by the University of Denver Coding Boot Camp educational team as part of the course.</p>
      </div>

      <div className="portfolio-grid">
      <PortfolioCard className="portfolio-card"
          title="Digest"
          description="This group project is a personalized nutrition app that generates meal plans based on user preferences and dietary restrictions. It features a user-friendly interface, recipe search functionality, and a meal plan generator. This project combined the skills of a team of developers to create a full-stack application using HTML, CSS, Bootstrap, and Javascript."
          image={digest}
          link="https://justinvittitoe.github.io/Digest/"
        />
        <PortfolioCard className="portfolio-card"
          title="Vehicle Management CLI Application"
          description="This is a command-line interface (CLI) application for managing vehicles, including Cars, Trucks, and Motorbikes. Written with typescript, the program allows users to interact with a collection of vehicles, generate VIN numbers, and perform various operations through an interactive prompt."
          video="https://drive.google.com/file/d/1-5Ss3KMQI3DIpRONd7DZIjdexxz1ZAu7/view?usp=sharing"
        />
        <PortfolioCard className="portfolio-card"
          title="CSS Snippet Cheatsheet"
          description="This project is a CSS Snippet Cheat Sheet developed as part of the University of Denver Coding Boot Camp. It serves as a handy reference for commonly used CSS snippets and techniques, facilitating quick access to essential code patterns for web development."
          image={CSSsnippetCheatsheet}
          link="https://lisaj5472.github.io/CSS-Snippet-Cheatsheet/"
        />
        <PortfolioCard className="portfolio-card"
          title="SQL Employee Tracker CLI"
          description="This command-line interface (CLI) application manages employees, departments, and roles within a company SQL database. It provides an interactive menu to view, add, and update employee records efficiently. The program uses Node.js, Inquirer, and postgreSQL to interact with the database."
          video="https://drive.google.com/file/d/1-5iy4k8lY0a6JyE28rC_VMdG1KRE2woY/view?usp=sharing"
        />
        <PortfolioCard className="portfolio-card"
          title="First Portfolio - CSS Challenge"
          description="This was my first portfolio project attempt. It was built using very basic HTML and CSS styling."
          image={firstPortfolio}
          link="https://lisaj5472.github.io/firstPortfolio-CSSchallenge/"
        />
        <PortfolioCard className="portfolio-card"
          title="Personal Blog - web APIs Challenge"
          description="This project is a two-page personal blog website developed as part of the University of Denver Coding Boot Camp. It enables users to input and view blog posts, featuring a content form, dynamic rendering of blog entries, and a light/dark mode toggle. The website is built using HTML, CSS, and Javascript."
          image={blog}
          link="https://lisaj5472.github.io/personalBlog-webAPIsChallenge/"
        />
        </div>
</div>
    );
}
