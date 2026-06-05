import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="card HeroPositon card-hero">
        <div className="col-6">
          <h4>👋 Hi, I'm</h4>
          <h1 className="hero-title">
            <span className="first-name">Bittu</span>
            <span className="last-name"> Kumar</span>
          </h1>

          <button className="tag mb-1 mt-1">Full Stack MERN Developer</button>

          <p className="fs-5">
            I build scalable full-stack web applications using MERN Stack{" "}
            <br></br>and MVC architecture.
          </p>
          <div className="Resumeproject">
            <button className="Dresume">
              <i class="fa-regular fa-clipboard"></i> Download Resume
            </button>
            <button className="Vproject">
              <i class="fa-solid fa-link"></i> View Projects
            </button>
          </div>
        </div>
        <div className="col-6 hero-img">
          <img src="image\Hero.png" className="hero-img" />
        </div>
      </div>
      <div className="stats-container">
        <div
          className="card text-center card-stats"
          style={{ width: "8rem", height: "9rem" }}
        >
          <img
            src="image\Exprince.png"
            className="card-img-top "
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h2 className="card-title fs-2">3+</h2>
            <p className="card-text fs-10">Years Experince</p>
          </div>
        </div>
        <div
          className="card text-center card-stats"
          style={{ width: "8rem", height: "9rem" }}
        >
          <img
            src="image\comproject.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h2 className="card-title fs-2">5+</h2>
            <p className="card-text fs-10">Completed Projects</p>
          </div>
        </div>
        <div
          className="card text-center card-stats"
          style={{ width: "8rem", height: "9rem" }}
        >
          <img
            src="image\Dsa.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h2 className="card-title fs-2">300+</h2>
            <p className="card-text fs-10">DSA Provlems Solved(c++)</p>
          </div>
        </div>
        <div
          className="card text-center card-stats"
          style={{ width: "8rem", height: "9rem" }}
        >
          <img
            src="image\reword.png"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h2 className="card-title fs-4">Delta</h2>
            <p className="card-text fs-10">
              Certified<br></br> MERN Developer
            </p>
          </div>
        </div>
      </div>
      <div className="heroSkill-div">
        <span><img src="image\My skill hero.png" style={{width:"5%"}}/></span>
        <span>My Skills</span>

        <div className="Hero-skill">
          <div className="col-6 skill-card">
            <h4 className="skills-title frontend">Frontend</h4>
            <div className="skill">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar frontend-bar"
                style={{ width: "95%" }}
              ></div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <span>92%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar frontend-bar"
                style={{ width: "92%" }}
              ></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <span>97%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar frontend-bar"
                style={{ width: "97%" }}
              ></div>
            </div>
            <div className="skill">
              <span>React.js</span>
              <span>97%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar frontend-bar"
                style={{ width: "97%" }}
              ></div>
            </div>
          </div>
          <div className="col-6 skill-card">
            <h4 className="skills-title backend">Backend</h4>
            <div className="skill">
              <span>Node.js</span>
              <span>92%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar backend-bar"
                style={{ width: "92%" }}
              ></div>
            </div>
            <div className="skill">
              <span>Express.js</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar backend-bar"
                style={{ width: "90%" }}
              ></div>
            </div>
            <div className="skill">
              <span>MongoDB</span>
              <span>89%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar backend-bar"
                style={{ width: "89%" }}
              ></div>
            </div>
            <div className="skill">
              <span>Ejs</span>
              <span>80%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar backend-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-6 skill-card">
            <h4 className="skills-title tools">Backend</h4>
            <div className="skill">
              <span>Git & GitHub</span>
              <span>92%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar tools-bar"
                style={{ width: "92%" }}
              ></div>
            </div>
            <div className="skill">
              <span>MongoDb Atlas</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar tools-bar"
                style={{ width: "85%" }}
              ></div>
            </div>
            <div className="skill">
              <span>Render</span>
              <span>89%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar tools-bar"
                style={{ width: "89%" }}
              ></div>
            </div>
            <div className="skill">
              <span>Cloudinary</span>
              <span>80%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar tools-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-hero">
        <h4><img src="image\Abouthero.png" style={{width:"10%"}}/>About me</h4>
        <div>
          <p className="fs-11">Passionate Full Stack Developer who loves building real-world web applications. I have completed the<span style={{color:"yellow"}}> Delta Full Stack Web Development </span>Course from Apna College. I also love solving <span style={{color:"#55ff55"}}>DSA problems in C++ </span>to improve my problem solving skills.</p>

        </div>
      </div>
      <div className="certification-postion">
        <h4 ><img src="image\eight.png" style={{width:"15%"}}/>Cerifications</h4>
        
        
        <div className="certification">
          <div className="certifi mbc-2 ml-2 mr-2">
            <span><img src="image\Notebookcer.png" style={{width:"40%"}}/></span>
             <span><img src="image\deltaReward.png" style={{width:"40%"}}/></span>
             <h6 className="fs-9">Delta Full Stack Web Development Course</h6>
             <p>Apna College</p>
             <button className="btn btn-success btn-sm mb-3" style={{borderRadius:"10px"}}><i class="fa-solid fa-check"></i>Completed</button>
          </div>
          <div className="certifi mb-2">
             <span><img src="image\penand notebook.png" style={{width:"40%"}}/></span>
             <span><img src="image\War.png" style={{width:"40%"}}/></span>
             <h6 className="fs-9">Data Structures & Algorithms in C++</h6>
             <p>Problem Solving</p>
             <button className="btn btn-success btn-sm" style={{borderRadius:"10px"}}><i class="fa-solid fa-check"></i>Completed</button>
          </div>
        </div>
      </div>
      <div className="main-Service-contaner">
        
        <div className="Service-contaner">
          
          <div className="text-center my-Service" style={{border:"1px solid #1B3F9E", backgroundColor:"#0A1F63"}}>
            <img src="image\Frontemd.png" style={{width:"100%"}} />
            <h5>Frontend</h5>
            <h5>Development</h5>
          </div>
               <div className="text-center my-Service" style={{border:"1px solid #1F5A48", backgroundColor:"#0B2B22"}}>
            <img src="image\Backend.png" style={{width:"100%"}} />
            <h5>Backend</h5>
            <h5>Development</h5>
          </div>
             <div className="text-center my-Service" style={{border:"1px solid #5A2DA8", backgroundColor:"#34106F"}}>
            <img src="image\MERN.png" style={{width:"100%"}} />
            <h5>MERN Stack</h5>
            <h5>Development</h5>
          </div>
             <div className="text-center my-Service" style={{border:"1px solid #C52A7A", backgroundColor:"#8A1458"}}>
            <img src="image\RENDER.png" style={{width:"100%"}} />
            <h5>Development</h5>
            <h5>(Render)</h5>
          </div>
                <div className="text-center my-Service" style={{border:"1px solid #2D5EFF", backgroundColor:"#102A78"}}>
            <img src="image\DSA c++.png" style={{width:"100%"}} />
            <h5>DSA & C++</h5>
            <h5>Problem Solving</h5>
          </div>
        </div>
      </div>
     <div className="My-Service-text">
  <h5 className="my-services-text">
    <img src="image\myservice.png" alt="service" />
   
  </h5>
</div>
<div className="Featured-Project">
  
  <div className="project-card">
    <div className="col-2">
      <h1> <img src="image\Reket.png" style={{width:"20%"}}/>Featured Project</h1>
    </div>
    <div className="col-4 project-Card"   style={{
    backgroundImage: "url('image/Wandalsh.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
    width:"320px",
    // padding: "0px",
    height:"120px"
   
  }}>
    <button className="btn btn-primary wandas-Live-demo">⊕ Live Demo</button>   
    <button className="btn btn-secondary wandas-github-demo"><i class="fa-brands fa-github"></i>GitHUb</button>  
      
    </div>
   <div className="col-4 "   style={{
    backgroundImage: "url('image/Stoct-image.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
    width:"280px",
    // padding: "0px",
    height:"120px"
   
  }}>
    <button className="btn btn-primary stock-Live-demo">⊕ Live Demo</button>   
    <button className="btn btn-secondary stock-github-demo"><i class="fa-brands fa-github"></i>GitHUb</button>  
      
    </div>

  </div>
</div>

    </div>
  );
}

export default Hero;
