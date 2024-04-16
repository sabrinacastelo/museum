import images from "./images";

// skills
const skills = [
    {
        title: "CIÊCIAS DA TERRA",
        value: "80%"
    },
    {
        title: "FÍSICA",
        value: "75%"
    },
    {
        title: "TECNOLOGIA",
        value: "45%"
    },
    {
        title: "QUÍMICA",
        value: "25%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_briefcase}`,
        text:  "550",
        title: "Exposições"
    },
    {
        img: `${images.icon_clock}`,
        text: "9:30-18:00",
        title: "Horário de funcionamento"
    },
    {
        img: `${images.icon_heart}`,
        text: "1300",
        title: "Feedbacks positivos"
    },
    {
        img: `${images.icon_star_white}`,
        text: "+ 2500",
        title: "Visitantes satisfeitos"
    },
];

// works
const works = [
  {
    img: `${images.work_1}`
  },
  {
    img: `${images.work_2}`
  },
  {
    img: `${images.work_3}`
  },
  {
    img: `${images.work_4}`
  },
  {
    img: `${images.work_5}`
  },
  {
    img: `${images.work_6}`
  },
  {
    img: `${images.work_7}`
  },
  {
    img: `${images.work_8}`
  }
]

// services
const services = [
    {
        img: `${images.icon_diamond}`,
        title: "GEOLOGIA",
        // 
    },
    {
        img: `${images.icon_archer}`,
        title: "EVOLUÇÃO",
        // 
    },
    {
        img: `${images.icon_phone}`,
        title: "TECNOLOGIA",
        // 
    },
    {
        img: `${images.icon_console}`,
        title: "JOGOS INTERATIVOS",
        // 
    },
    {
        img: `${images.icon_plane}`,
        title: "AVENTURAS",
        // 
    },
    {
        img: `${images.icon_star}`,
        title: "ASTRONOMIA",
        // 
    },
    {
        img: `${images.icon_fantasy}`,
        title: "FÍSICA",
        // 
    },
    {
        img: `${images.icon_paint}`,
        title: "QUÍMICA",
        // 
    }
];

// testimonials
const testimonials = [
    {
        name: "Ana, Estudante de Biologia",
        text: "Visitar o museu foi uma experiência incrível! Como estudante de biologia, fiquei impressionada com a variedade de exposições interativas e informações detalhadas sobre diferentes áreas da ciência.",
    },
    {
        name: "João, Pai de Família",
        text: "Levei meus filhos ao museu e foi uma experiência educativa e divertida para toda a família. As exposições são incrivelmente interativas e cativantes, e meus filhos ficaram fascinados com os experimentos práticos e os jogos educativos."
    },
    {
        name: "Maria, Professora de Física",
        text: "Como professora de física, sempre estou em busca de recursos educativos para enriquecer minhas aulas. O museu superou todas as minhas expectativas! As exposições são muito bem elaboradas e oferecem uma ampla gama de experiências práticas que ajudam os alunos a compreender conceitos complexos de forma tangível. Recomendo a todos os educadores!"
    },
    {
        name: "Pedro, Entusiasta de Tecnologia",
        text: "Como entusiasta de tecnologia, fiquei impressionado com a seção dedicada a inovações tecnológicas no museu. As demonstrações de realidade virtual, robótica e inteligência artificial foram absolutamente fascinantes! Foi inspirador ver como a ciência e a tecnologia estão moldando o nosso futuro."
    }
];

export default {skills, stats, works, services, testimonials};
