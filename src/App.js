import './App.css';
import fotoCv from "./img/fotoCvMatrix.png";
import { FaLinkedinIn, FaReact, FaNodeJs, FaSass, FaNpm, FaBootstrap} from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa"

function App() {

  const canvas = document.getElementById('Matrix');
  const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width/fontSize;
    
    const rainDrops = [];
    
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
    
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    setInterval(draw, 40);

    // "homepage": "https://Beale1985.github.io/portfolio-home",

    // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",


  return (
    <div className="App"  >
      <body id="page-top">
         {/* Navigation */}
        <nav class="navbar navbar-expand-lg bg-primary" id="sideNav">
                <span className='firstText' id='holaMundo'>
                    Knock, Knock, World!
                </span>
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-none d-lg-block"><img class="img-fluid img-profile mx-auto mb-2" src={fotoCv} alt="..." /></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Sobre Mí</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experiencia</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portafolio</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Educación</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Habilidades</a></li>
                </ul>
            </div>
        </nav>
        {/* Page Content */}
        <div class="container-fluid p-0" >
            {/* About */}
            <section class="resume-section" id="about">
                <div class="resume-section-content about-container">
                    <h1 class="mb-0">
                        Alexis
                        <span class="text-primary"> Bello</span>
                    </h1>
                    <div class="subheading mb-5">
                        San Luis 2428 · CABA ·  (+54) 11-69559766 ·
                        <a href="mailto:alexisbello0310@hotmail.com">alexisbello0310@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Full Stack Developer y Arquitecto, apasionado por la tecnología y el diseño.
                        Actualmente desarrollando sitios web de manera independiente, en búsqueda laboral activa, si queres conocerme 
                        no dudes en contactarme.  </p>
                    <p>HTML | CSS | Bootstrap | Sass | JavaScript | React Js | GitHub | Node js | MySql</p>
                    <div class="social-icons pt-3">
                        <a class="social-icon" href="https://www.linkedin.com/in/alexis-bello-571478160/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='linkAbout' /></a>
                        <a class="social-icon" href="https://github.com/Beale1985" target="_blank" rel="noopener noreferrer"><TbBrandGithub className='linkAbout' /></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Experience */}
            <section class="resume-section" id="experience">
                <div class="resume-section-content experience-container">
                    <h2 class="mb-5">Experiencia</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full Stack Developer </h3> <spam class="text-primary">Febrero 2022 - Presente</spam>
                            <p>Al finalizar el curso de Full Stack Developer en Digital House decidí dedicarme
                                fulltime al desarrollo de sitios web. En la actualidad me encuentro desarrollando un portafolio
                                personal de trabajos realizados y servicios ofrecidos como arquitecto.
                                </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Arquitecto</h3> <spam class="text-primary">Febrero 2011 - Presente</spam>
                            <p>De manera conjunta al trabajo en relación de dependecia me he desarrollado como arquitecto 
                                independiente, realizando proyectos de obra, remodelaciones y direcciones de obra. Mi trabajo
                                como arquitecto depende de la mano de obra que la realiza, orgulloso de contar con el mismo 
                                equipo de trabajo desde hace mas de 10 años que me permite terminar las obras de manera satisfactoria.</p>
                                <ul className='listExperience'>
                                  <li>-Prefectura Naval Argentina- Mar 2015 / Ago 2022</li>
                                  <li>-La Holando Sudamericana- Jun 2012 / Feb 2015</li>
                                  <li>-Tecnópolis- Jul 2011 / Abr 2012</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* portfolio */}
            <section class="resume-section" id="portfolio">
                <div class="resume-section-content experience-container">
                    <h2 class="mb-5">Portafolio</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Cosmetear.com </h3> <spam class="text-primary">Agosto 2022 - Presente</spam>
                            <p>Es un sitio web destinado a realizar búsquedas de productos y marcas de estética, permite filtrar por nombre,
                                categorías, certificado cruelty free, certificado vegano y procedencia. El sitio está desarrollado con las
                                siguientes tecnologías: JavaScript | React Js | MySql | Css | HTML | GitHub.</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">DraCintia.com </h3> <spam class="text-primary">Julio 2022 - Presente</spam>
                            <p>Un sitio web estático, responsive, donde se presenta un Centro de Estética y sus tratamientos. Permite contactar
                                al Centro por medio de WhatsApp para reservar turnos y cuenta la historia de sus inicios.
                                Tecnologías utilizadas: React Js | JavaScript | Bootsrap | Css | GitHub.</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">DrinkHouse.com </h3> <spam class="text-primary">Julio 2022 - Presente</spam>
                            <p>Durante la cursada en Digital House se desarrolló un proyecto integrador del tipo e-commerce donde se aplicaron
                                todas las herramientas aprendidas. El sitio web tiene por destino la venta de bebidas alchoolicas, permitiendo
                                a los usuarios registrarse, loguearse y buscar productos por categorias. Tecnologías utilizadas: JavaScript | Css | HTML | MySql | MCV | Middleware | Cookie | GitHub | SCRUM. </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Education */}
            <section class="resume-section" id="education">
                <div class="resume-section-content education-container">
                    <h2 class="mb-5">Educación</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0 mt-4">Digital House</h3>
                            <div class="subheading mb-1">Full Stack Developer</div>
                        </div>
                        <div class="flex-shrink-0 mt-5"><span class="text-primary ">Febrero 2022 - Agosto 2022</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Unversidad de Palermo</h3>
                            <div class="subheading mb-3">Arquitecto</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Junio 2004 - febrero 2011</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Inlgés</h3>
                            <div class="mb-3 mt-3">
                              <ul className='listEducation'>
                                <li>Lectura - Intermedio</li>
                                <li>Oral - Básico</li>
                                <li>Escritura - Intermedio</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            {/* Skills */}
            <section class="resume-section" id="skills">
                <div class="resume-section-content skills-container">
                    <h2 class="mb-5">Hablidades</h2>
                    <div class="subheading mb-3">Lenguajes y Herramientas</div>
                    <ul class="list-inline dev-icons textoIconos">
                        <li class="list-inline-item pb-0 pt-0 p-2">HTML |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">CSS |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">JavaScript |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">React Js |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">Node Js |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">Sass |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">Npm |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">Bootstrap |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">MySql |</li>
                        <li class="list-inline-item pb-0 pt-0 p-2">GitHub</li>
                    </ul>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item pb-0 pt-0 p-2"><AiFillHtml5 /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><DiCss3 /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><IoLogoJavascript /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaReact /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaNodeJs /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaSass /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaNpm /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaBootstrap /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><SiMysql /></li>
                        <li class="list-inline-item pb-0 pt-0 p-2"><FaGit /></li>
                    </ul>
                    <div class="subheading mb-3">Hablidades Blandas</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Comunicación Clara
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Trabajo en equipo
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Adaptación al cambio
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Gestión de tiempo
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Responsabilidad
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Resolución de problemas
                        </li>
                        <li>
                            <span class="fa-li"><BsCheck /></span>
                            Habilidades interpersonales
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            <hr class="m-0" />
        </div>
        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme */}
        <script src="js/scripts.js"></script>
    </body>
    </div>
  );
}

export default App;
