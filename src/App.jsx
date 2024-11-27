// src/App.
import './styles.css';
import './App.css'


function App() {
  return (
    <div>
   
        
    <div id="header">

    
     <div className="container">
        <nav>
            <header className="header">
            <a  className="logo">Portfolio</a>
       <nav className="navbar" id="sidemenu">
           <ul>
           <li><a href="#home"><i className="fa fa-home"></i>HOME</a></li> 
           <li><a href="#About"><i className="glyphicon glyphicon-user"></i> ABOUT </a></li>
           <li> <a href="#services"><i className="fa-solid fa-laptop-file"></i> MY SERVICES</a></li>
           <li><a href="#blog"><i className="glyphicon glyphicon-envelope"></i> BLOGS</a></li>
           <li><a href="#contact"><i className="glyphicon glyphicon-phone"></i>CONTACT</a></li>
            
           </ul>
           </nav>
           </header>
           <i className="fas fa-bars" onClick="openmenu()" ></i>
         
          </nav>
 
         <div id="home">
         <div className="home">
         <div className="home-content">
            
            <h3>HELLO, I AM</h3>
            <h1>Sankha Subhra Das</h1>
            <p className="text">A versatile  enthusiastic full-stack web developer.</p>
            <div className="social-handles">
                <a href="https://www.facebook.com/profile.php?id=100009439325830&mibextid=ZbWKwL" ><i className="bx bxl-facebook"></i></a>
                <a href="#"><i className="bx bxl-twitter"></i></a>
               <a href="https://instagram.com/6t9_riot_2.o?igshid=NGExMmI2YTkyZg==" ><i className="bx bxl-instagram-alt"></i></a>
               <a href="https://www.linkedin.com/in/sankha-subhra-das-625ab6201" ><i className="bx bxl-linkedin"></i></a>
            </div>
            <a href="./files/sankha_24_B (4).pdf" download className="download-btn">DOWNLOAD <span className="u-bolder">CV</span><i className="fa fa-download"></i></a>
            <a href="https://drive.google.com/drive/folders/1HQNmgJXU--Bh_YudNy38qJndBcsmlYG3?usp=drive_link" download className="download-btn">MY PROJECT REPORTS<span className="u-bolder">CV</span><i className="fa fa-download"></i></a>
                
            
            
         </div>
        </div>
         <div>
         </div>
         </div>
         </div>
        
    
         <div id="About">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="./files/bg.jpeg" alt=""/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About me</h1>
                        <p>Welcome to my portfolio! I am Sankha subhra das, a passionate and versatile full-stack web developer with a love for crafting dynamic and user-centric digital experiences. I am a freasher in the industry, I thrive on turning ideas into reality and solving complex challenges with elegant and efficient solutions.

                            From a young age, I was captivated by technology and its power to shape the world around us. This fascination led me to pursue a degree in Computer Science, where I honed my skills in web development, programming languages like JavaScript, Python, and PHP, and a range of frameworks including React, Node.js, and Django.
                            
                            Throughout my journey, I am have had the privilege of working with a diverse range of clients and projects, each presenting its unique set of opportunities and obstacles. Whether its building intuitive user interfaces, optimizing back-end performance, or creating scalable and secure databases, I embrace each task with enthusiasm and attention to detail.
                            
                            What truly sets me apart is my dedication to creating seamless user experiences. I believe that the heart of any successful web application lies in understanding the end-users and tailoring the product to meet their needs. Accessibility, responsiveness, and simplicity are at the core of my development philosophy, ensuring that the end product delights users across all devices and platforms.
                            
                            I am a firm believer in continuous learning, and the ever-evolving world of technology keeps me on my toes. I actively seek out opportunities to expand my knowledge, stay updated on the latest industry trends, and experiment with new technologies to deliver cutting-edge solutions.
                            
                            Collaboration is key to success in any project, and I take great pride in being a team player. Working closely with designers, product managers, and fellow developers, I thrive in an environment that encourages open communication, creativity, and constructive feedback.
                            
                            In my spare time, you can find me exploring new coding challenges, contributing to open-source projects, or seeking inspiration from various design and tech communities. When I am not in front of a screen, I love hiking in nature, discovering new cuisines, and pursuing creative hobbies like photography and sketching.
                            
                            I am excited about the endless possibilities that lie ahead in the web development realm. If you have a project in mind or want to connect, dont hesitate to reach out. Let us collaborate and bring your ideas to life in the digital world!</p>
                           
                           
                           
                            
                            
                        </div>
                    
        
                    </div>
                </div>
            </div>
            
       
        <div id="services">        
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div className="services-list">
                        <div> 
                            <i className="fas fa-code"></i>
                            <h2>Web Development</h2>
                            <p>
                               Web app development involves creating applications that run on web browsers and provide specific functionalities or services to users. These applications can be accessed over the internet and do not require users to download or install anything locally. 
                            </p>
                            <a href="./webdev(learnmore).html"><b><u>learn more</u></b></a>
                        </div>

                
                    <div>
                        <i className="fa-brands fa-app-store"></i>
                        <h2>App Development</h2>
                        <p>
                           App development refers to the process of creating software applications for mobile devices such as smartphones and tablets. These applications, commonly known as mobile apps, can be installed and run directly on the device, providing users with various functionalities and services.
                        </p>
                        <a href="./appdev(learnmore).html"><b><u>learn more</u></b></a>
                    </div>
                    <div> 
                        <i className="fa-solid fa-database"></i>
                        <h2>Database Management</h2>
                        <p>
                            Database management refers to the process of efficiently and securely managing and organizing data within a database system. It involves various tasks, from designing the database structure to ensuring data integrity, security, and performance.
                        </p>
                        <a href="./datbasemangement.html"><b><u>learn more</u></b></a>
                 </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        
    
    <script src="./mycv1.js"></script>

    
    <section id="blog">
        <div className="blog-heading">
            <span><b>My recent Posts</b></span>
            <h1>BLOGS</h1>
        </div>

        <div className="blog-container">
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./files/blog.jpeg" alt="Blog" />
                </div>
            <div className="blog-text">
                <span>ROAD-MAP OF A FULL-STACK WEB DEVELOPER</span>
                <a href="https://sankha.hashnode.dev/roadmap-of-a-full-stack-web-developer" className="blog-title">a proper guide to full-stack web development</a>
                <p>As a full-stack web developer, my goal is to have excellence in both front-end and back-end technologies, as well as other relevant skills. So here I am going to explain the roadmap for aspiring full-stack web developers in more detail.</p>
            </div>
            </div>
            
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./files/og.jpeg" alt="Blog" />
                </div>
            <div className="blog-text">
                <span>MY FIRST STEP OF BEING A FULL-STACK WEB DEVELOPER</span>
                <a href="https://sankha.hashnode.dev/my-first-step-html-css-and-javascript" className="blog-title">This blog is a report on my  first step towards being a full-stack web developer.</a>
                <p>Introduction

                    I was both excited and a little anxious to start my trip into the world of web programming and learn HTML, CSS, and JavaScript. I have always been fascinated by the seamless web experiences we see regularly as tech fans. I had no idea that exploring these foundational technologies would lead to a myriad of new opportunities. I wish to discuss my struggles and experiences learning about HTML, CSS, and JavaScript web development in my blog.</p>
                <a href="">Read More</a>
            </div>
            </div>
           
        </div>
    </section>
    <div id="contact">
    <div className="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                   <h1 className="sub-title">Contact Me</h1>
                   <p><i className="bi bi-envelope"></i>sankhasubhradas1@gmail.com</p>
                   <p><i className="fas fa-phone-square-alt"></i>+91 8597786209</p>
                </div>
                
             
            </div>
            
            <form id="emailForm" onSubmit="SendEmail(event)">
                <div  className="form-input">
                    
                        <input type="text"  id="name" placeholder="Your Name" required />
                </div>
                <div className="form-input">
                    <input type="email"  id="email" placeholder="Your Email" required />
                </div>
                       <div className="form-input">
                        <textarea  rows="6" id="Message" placeholder="Your Message"></textarea>
                       </div> 
                       <div className="form-input-btn" >
                        <button type="submit" className="btn" value = "Send" onClick="SendEmail()" >Submit</button>
                    
                    </div>
                </form>
                <script src="https://smtpjs.com/v3/smtp.js">
               </script>
        </div>
    </div>
       
       
    </div>
   
    
    
    
    
    
</div>

  );
}

export default App;
