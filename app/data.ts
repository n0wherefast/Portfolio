import todo from './asset/todo_app.webp'
import BW from './asset/BlueWaveHolidayHouse.webp'
import CV from './asset/CH.webp'
import IPS from './asset/IPS.webp'
import WEA from './asset/WEA.webp'
import GO from './asset/google.webp'
import CHAT from './asset/CHAT.webp'
import HOUSE from './asset/housing.png'

export const skills = ['HTML/CSS','JavaScript','TypeScript','React','Next.js','SASS','Styled Component','Post CSS','Tailwind','Sanity CMS','Redux Toolkit','Git','FireBase','Node.Js','AWS lightsail','Python','Pandas','Data','Machine Learning','scikit-learn','Seaborn','AI']
        

export const projects = [
    {
        title: "Italian Pizza Sydney",
        subtitle: "Next,js Application ",
        description:
          "Sito Web realizzato per Italian Pizza Sydney utilizando: Next.js,SASS, React Custom Hooks,Redux Toolkit, Sanity.io CMS,Swiper.js,framer Motion,Google Tag Manager",
          image: IPS,
        link: "https://italianpizzasydney.com.au/",
      },
    {
        title: "Blue Wave Holiday House",
        subtitle: "Next,js Application ",
        description:
          "Sito Web sviluppato per Blue Wave Holiday House utilizando: Next.js,Styled Component, Redux Toolkit, Sanity.io CMS,Swiper.js,framer Motion",
          image: BW,
        link: "https://www.bluewaveholidayhouse.com/",
      },
    {
        title: "Cortese Home",
        subtitle: "Next,js Application ",
        description:
          "Sito Web sviluppato per Cortese Home utilizando: Next.js,Tailwind, Redux Toolkit,framer Motion",
          image: CV,
        link: "https://cortese-home-next-va8g.vercel.app/",
      },
    // {
    //     title: "React Weather App",
    //     subtitle: "React ,API and Hooks ",
    //     description:
    //       "App del meteo realizzata in React che consente di visualizzare le condizioni attuali e previste per una determinata località.Utilizza un'API per recuperare i dati e li visualizza in una UI .",
    //       image: WEA,
    //     link: "https://n0wherefast.github.io/React-Weather-App/",
    //   },
    {
        title: "Google Clone HomePage",
        subtitle: "Next.js,Firebase,TypeScript",
        description:
          "App clone della home page di google con barra di ricerca con previsione del testo e autenticazione tramite google",
          image: GO,
        link: "https://google-clone-next-js-beta.vercel.app/",
      },
    // {
    //     title: "React Reserve",
    //     subtitle: "MERN Stack",
    //     description:
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //       image: todo,
    //     link: "",
    //   },
    // {
    //   title: "React Tracks",
    //   subtitle: "React and Python",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //     image: todo,
    //   link: "",
      // },
      {
        title: "NextChat",
        subtitle: "React and Firebase",
        description:
          "Chat App realizzata in Next.js e Firebase dove è possibile scegliere tre chat predefinite o crearne delle nuove.È presente un crittografia end to end basata sul caesar cipher ",
          image: CHAT,
        link: "https://next-chat-app-blue.vercel.app",
      },
      {
        title: "California Housing ",
        subtitle: "next.js Flask Machine Learning",
        description:
         "Web app che utilizza un modello Machine Learning allenato sul dataset California Housing per stimare i prezzi medi basandosi su dei parametri ",
          image: HOUSE,
        link: "https://california-housing-price-predictor.vercel.app/",
      },
      // {
      //   title: "Epic Todo App",
      //   subtitle: "React Hooks",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      //   image: todo,
      //   link: "",
      // },
    ];
