const about = {
    name : "Rocketseat",
    logoUrl: "/image/rocketseat-logo.png",
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
        logoUrl: "/image/rocketseat.png",
        description: "Torne-se um programador desejado no mercado com esses cursos gratuitos",
        modules: "5",
        price: "Free",
    },
    {
        name: "launchbase",
        logoUrl: "/image/launch.png",
        description: "Domine programação do zero e tenha acesso às melhores oportunidades do mercado",
        modules: "8",
        price: "Reserve your spot",
    },
    {
        name: "gostack",
        logoUrl: "/image/gostack.png",
        description: "Treinamento imersivo nas tecnologias mais modernas de densenvolvimento web e mobile",
        modules: "8",
        price: "Reserve your spot",
    },
]

module.exports = {about, courses}