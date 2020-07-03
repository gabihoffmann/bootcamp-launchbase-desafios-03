const about = {
    name : "Rocketseat",
    logoUrl: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
    description:{
        title: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        text: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa."
    },
    
    techs: [
        {name: "JavaScript" , icon : "code"}, 
        {name: "Node.js", icon: "next_week"}, 
        {name: "React.js", icon: "settings_brightness"},
        {name: "React Native", icon: "mobile_screen_share"}
    ],

    links: [
        {name: "Rocketseat", url:"https://rocketseat.com.br/" },
        {name: "Github", url: "https://github.com/rocketseat"},
        {name: "Instagram", url: "http://instagram.com/rocketseat_oficial"},
        {name: "Facebook", url: "http://fb.com/rocketseat"}
    ]
}

const courses = [
    {
        name: "starter",
        logoUrl: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg",
        description: "Torne-se um programador desejado no mercado com esses cursos gratuitos",
        modules: "5",
        price: "Free",
    },
    {
        name: "launchbase",
        logoUrl: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg",
        description: "Domine programação do zero e tenha acesso às melhores oportunidades do mercado",
        modules: "8",
        price: "Reserve your spot",
    },
    {
        name: "gostack",
        logoUrl: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg",
        description: "Treinamento imersivo nas tecnologias mais modernas de densenvolvimento web e mobile",
        modules: "8",
        price: "Reserve your spot",
    },
]

module.exports = {about, courses}