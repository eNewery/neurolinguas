"use client"
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; // Importa los estilos CSS
import React, {useState} from 'react'
import { db } from '../firebase'
import {doc, setDoc } from "firebase/firestore";
const Landing = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = async(e) => {
    const formRef = document.querySelector(".land5-full-form")
    e.preventDefault()
    const date = Date.now()
    const newPost = {
      Nombre: name,
      Email: email,
      Telefono:phone,  
    };
    try{
      const docRef = doc(db, "suscripciones", date.toString())
      await setDoc(docRef, newPost)
      Toastify({
        text: "Formulario enviado con éxito.",
        duration: 20000, // Duración en milisegundos (opcional)
        close: true, // Botón para cerrar la notificación (opcional)
        zIndex: 9999,
        position:"left",
        style: { background: "#FFFFFF" },
      }).showToast();
      setName("")
      setEmail("")
      setPhone("")
      formRef.style.animation = "formOut 1s both"
    }
    catch(e){
      Toastify({
        text: "Ha ocurrido un error. Revisa en la consola para más detalles",
        duration: 20000, // Duración en milisegundos (opcional)
        close: true, // Botón para cerrar la notificación (opcional)
        zIndex: 9999,
        position:"left",
      }).showToast();
      console.log("Error: ",e)
    }
  }
  return (
    <div>
     <div id="preloader">
     </div>
     <section>
       <div class="land-full land-3-top-full">
         <div class="land-container">
           <div class="land-3-top">
             <div class="land-3-top-logo">
               <a href="#"><img className='headerLogo' src="./logo.png"/></a>
             </div>
             <div class="land-3-top-contact">
               <ul>
                 <li>Teléfono: 15642127380</li>
                 <li>Email: anglouniversidad@gmail.com</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-3-banner-full">
         <div class="land-container">
           <div class="land-3-banner">
             <div class="land-3-banner-form">
               <div class="land-3-banner-video">
               <video poster="logo2.png" className="landingCardSelected" controls width="640" height="360">
        <source src="./video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
               </div>
             </div>
             <div class="land-3-banner-conte">
               <h1>Cómo hablar inglés usando el cerebro</h1>
               <p>Webinar Gratuito que te mostrará todos los secretos que debes saber si realmente quieres hablar y entender el inglés de una vez por todas!
Son 90 minutos en vivo, en directo destinados a toda aquella persona que quiere descubrir por qué le resulta dificil adquirir el idioma.  </p>
               <a href="#" class=
               "dwn-now-btn">APLICAR AHORA</a>
               
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-3-dwn-full">
         <div class="land-container">
           <div class="land-3-dwn">
             <div class="land-3-dwn-img"><img src="backForm.jpeg"
             alt="" class="land-1-pro-img"/></div>
             <div class="land-3-dwn-right">
               <h2>¿Qué aprenderás?</h2>
               <p>
Aprenderás métodos, fórmulas, estrategias y sistemas que permitirán que aprendas el inglés en un tiempo récord y de manera agradable, basándote en los descubrimientos hechos por la neurociencia y el neuroaprendizaje.
Este webinar a cargo de expertos en técnicas de estudio y neuroaprendizaje, brinda un verdadero coaching completo para estudiantes, interesados e incluso para maestros de inglés que quieren ayudar a sus alumnos a aprender más rápido.</p> <a href="#" class=
               "dwn-now-btn">APLICAR AHORA</a>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-4-agen-full">
         <div class="land-container">
           <div class="land-3-agen">
             <div class="land-3-agen-left">
               <h2>Temario</h2><img src="background.jpeg" alt=
               "travel plan"/>
               <p>El temario que desarrolla el experto a cargo trata los temas más vitales que hacen al aprendizaje eficaz y definitivo del inglés, pero también incluye preguntas y respuestas en un ping pong con los participantes. Al final del curso se entrega Constancia de Asistencias.</p>
<a href="#" class="vmr-btn">Ver más detalles</a>
             </div>
             <div class="land-3-agen-right">
               <ul>
                 <li>
                   <h4>¿Por qué parece dificil el inglés?</h4>
                   <p>Los misteriosos orígenes del idioma inglés y sus rarezas.
Por qué no entiendes al nativo? Los 5 principios que te
garantizan adquirir rápido esa lengiua.</p>
                 </li>
                 <li>
                   <h4>Técnicas de Estudio del Idioma.</h4>
                   <p>Pomodoro, Mapas mentales, imput comprensivo, listas,
Esquemas, cuadro comparativo, shadowing, flash cards, lectura en
voz alta y apuntes clásicos.</p>
                 </li>
                 <li>
                   <h4>Neuroaprendizaje para aprender</h4>
                   <p>La ciencia del aprendizaje. Secretos y reglas básicas.
Mnemotecnia, neuróbica y PNL (Programación neurolinguistica)
Método de Cornell y los secretos de un buen curso de inglés.</p>
                 </li>
                 <li>
                   <h4>¿Online, presencial, particular?</h4>
                   <p>Te explicamos cuál es la mejor alternativa para tipo de 
alumnos. Dependiendo de la edad, el punto de partida, la
motivación y el método que se elige.</p>
                 </li>
                 <li>
                   <h4>Los consejos de los políglotas</h4>
                   <p>Te presentamos una verdadera catarata irrefrenable de tips,
consejos, ideas y recomendaciones para que pongas en uso al momentpo 
de querer adquirir el dominio del inglés.</p>
                 </li>
                 <li>
                   <h4>La pronunciación y la fluidez.</h4>
                   <p>Secretos para enseñar y aprender a pronucniar como un nativo.
Factores que dificultan al hispano el hablar y enternder el idioma.
Tips y reglas infalibles para mejorar tu fluidez.</p>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-3-cus-full">
         <div class="land-container">
           <div class="land-3-cus-tit">
             <h2>Testimonios</h2>
             <p>Estas son opiniones de quienes ya participaron.</p>
           </div>
           <div class="land-3-cus-box">
             <div class="test-box">
               <img src="avatar-02.png"/>
               <p>El webinar me pareció demasiado bueno y me sorprendió mucho que fuera gratis con ese tipo de contenido.
El temario me mostró cosas que jamás hubiera pensado que eran la causa de mi fracaso en el idioma.</p>
               <h4>Ramiro De Dominicis</h4>
               <h6>Michoacán</h6>
             </div>
           </div>
           <div class="land-3-cus-box">
             <div class="test-box">
               <img src="avatar-01.png"/>
               <p>Interesante es poco decir. Me parece que hay que grabarlo , verlo muchas veces y subirlo a youtube para
que otras personas que quieren aprender inglés lo vean. Sería algo muy solidario y bueno.
</p>
               <h4>Susana Ricci</h4>
               <h6>Sinaloa</h6>
             </div>
           </div>
           <div class="land-3-cus-box">
             <div class="test-box">
               <img src="avatar-02.png"/>
               <p>Las recomendaciones apra aprender idioamas fueron buenas, más que buenas. Los conerencistas le dieron clases
a personas como yo que somos apenas estudiantes pero también hubo teachers en la conferencia y quedaron fascinados.
</p>
               <h4>Julian Murano</h4>
               <h6>Monterrey</h6>
             </div>
           </div>
           <div class="land-3-cus-box">
             <div class="test-box">
               <img src="avatar-01.png"/>
               <p>Hoy creo que me cambió el preconcepto que tengo de los cursos gratuitos por internet. Este curso fue cosas seria, 
muy muy profesional, de interés y valioso para mi y seguro que tambien para todos los que estuvieron conectados.
</p>
               <h4>Marcelina Robirosa</h4>
               <h6>Chihuahua</h6>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-4-agen-full">
         <div class="land-container">
           <div class="land-3-agen">
             <div class="land-3-agen-left">
               <h2>Localización</h2>
               <p>1840 Pyramid Place, Memphis, Tennessee 38132, EE. UU.</p>
               <p><b>Teléfono:</b> +15642127380</p>
               <p><b>Email:</b> anglouniversidad@gmail.com</p>
             </div>
             <div class="land-3-agen-right">
               <iframe src=
               "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142631.2438598475!2d-91.50976218931385!3d39.71772602403598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1528565167741"
               allowfullscreen></iframe>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land5-full-form">
         <div class="land-container">
           <div class="land-com-form land5-fix-form">
             <form onSubmit={(e) => handleSubmit(e)} class="contact__form" method="post" action=
             "mail.php">
               <ul>
                 <li>
                   <h2>Registro</h2>
                 </li>
                 <li><input required value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder=
                 "Nombre"/></li>
                 <li><input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder=
                 "Email"/></li>
                 <li><input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" placeholder=
                 "Teléfono"/></li>
                 
                 <li><input type="submit" name="submit" value=
                 "Registrarse Ahora"/></li>
               </ul>
             </form>
           </div>
         </div>
       </div>
     </section>
     <section>
       <div class="land-full land-1-foot-full">
         <div class="land-container">
           <div class="land-1-foot-text">
             <p>Copyrights © AngloHispana 2023 All rights
             reserved.</p>
           </div>
         </div>
       </div>
     </section></div>
  )
}

export default Landing