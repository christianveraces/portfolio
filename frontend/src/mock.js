// Mock data for developer portfolio
export const mockData = {
  personal: {
    name: "Christian N. Veraces",
    title: "Data Analyst and Data Engineer 2",
    tagline: "Make the data accurate for the client",
    bio: "Passionate in maintaining the data for client that can help them to check if there are mismatch or miscount on their end. ",
    avatar: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/468203512_8906431426084710_1885412395448958141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEAawqhkmiPMehHAR_G78hHHU_82YNI764dT_zZg0jvrm7UdWfhnUoWCh47PdnoVFmRtkxoQtvQ63mjmPtXs7sb&_nc_ohc=B117yz7z2ZkQ7kNvwE4aB2H&_nc_oc=Adml_DXRy9aFa1SyBCby_ILxVW47GIk_yENNTPbEI4ZJgb2W8N15A4R00xw93XUglVbxmJO3dJqnNTzccbt566sV&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=vavbcU9WUjOB8ro-mbWcLQ&oh=00_AfXnQqa7p5asMyIDcsVZQZR_T2jXLcuWjSf3-yefMxg-Yg&oe=68AE139E",
    location: "Manila City, Philippines",
    email: "christianveraces@gmail.com",
    phone: "+639083931247",
    resumeUrl: "https://mail.google.com/mail/u/0?ui=2&ik=f4ef58c940&attid=0.1&permmsgid=msg-a:r223095280804619737&th=198d0fa8c6e3dac4&view=att&disp=inline&realattid=f_memldmno0&zw",
    social: {
      Jobstreet: "https://ph.jobstreet.com/profile/christian-veraces-bDq6cQP2x7",
      linkedin: "https://www.linkedin.com/in/christian-veraces-140954242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      portfolio: "https://alexchen.dev"
    }
  },

  skills: {
    frontend: ["JavaScript", "C#"],
    backend: ["Mysql", "Python", "PostgreSQL", "MongoDB"],
    devops: ["Docker", "AWS", "Kubernetes"],
    tools: ["VS Code", "Figma", "Postman"]
  },

  projects: [
    {
      id: 1,
      title: "BRAINYSTUDENTS: A 2D MOBILE GAME IN MATHEMATICS FOR GRADE 1 STUDENTS IN MARCELO H. DEL PILAR MEMORIAL SCHOOL",
      description: "A game where grade 1 students will enhance their knowledge on Mathematics and helps them to understand more.",
      image: "https://www.messenger.com/e093823c-a81d-483f-a063-14cfba17ac8b",
      technologies: ["Java", "XAMPP", "Mysql", "Unity", "AWS"],
      featured: true
    },
    {
      id: 2,
      title: "BRAINYSTUDENTS: A 2D MOBILE GAME IN MATHEMATICS FOR GRADE 1 STUDENTS IN MARCELO H. DEL PILAR MEMORIAL SCHOOL",
      description: "A game where grade 1 students will enhance their knowledge on Mathematics and helps them to understand more.",
      image: "https://www.messenger.com/e093823c-a81d-483f-a063-14cfba17ac8b",
      technologies: ["Java", "XAMPP", "Mysql", "Unity", "AWS"],
      featured: false
    }
  ],

  services: [
    {
      id: 1,
      title: "Data Analyst and Data Engineer",
      description: "Using python, databricks and Mysql, we analyse the mismatch on data and confirmed why it is not accurate.",
      icon: "Databricks",
      features: ["Databricks", "Python", "Mysql", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Postman & API",
      description: "To enhance check, if the data is continously pushing and there are no error",
      icon: "Server",
      features: ["Database Optimization", "Authentication Systems"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Louise Sadiasa",
      role: "Data Analyst and Data Engineer 2(SME)",
      company: "DXC Technology",
      avatar: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/503902892_10223139643318611_4464868248483831619_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEHUBaEjyvG4joW6Hn_1LtB0-KE6SVkJqDT4oTpJWQmoBk68eIUwp5RE6bXldeV8M3MXJh1ogJUDg_HIwqR7rPg&_nc_ohc=wnY2v2yDROUQ7kNvwFWhabb&_nc_oc=Adm-r-EG3qvnd6UDYa6ZdrTy_IQpntqmNpwWV0CkcXnvGTBvWt0XmHYNhLKdPCpkJkLXDzLtuCPsWtvccWmEzgPF&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=E8qMZw_5hSfgTZ8qb_ZLwg&oh=00_AfXx-jedDpk5GDSyb_XALT0vk3hZNZQY1oV-4RMStJKLCQ&oe=68ADF2CD",
      content: "Christian delivered an exceptional work that exceeded our expectations. Their attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5
    },
    {
      id: 2,
      name: "Bea Reyes",
      role: "Business Analyst",
      company: "Manulife",
      avatar: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/473430828_10229755230519894_5245770344590800130_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH4R9nQoA5PjSdH9XNo9ZPF0CPDcrX4OKvQI8Nytfg4q08tBnCTmYike5B8cC0VB5aCCuPv_Ep1PdovHxcY-vAg&_nc_ohc=YsOzGvAx590Q7kNvwF7YYVh&_nc_oc=AdnJOl7KhP4IM4do-Rl2mhm7381qI_TDX-1VJ_I9OVHlh6oA8bFL1EzOMogqCgytNumjO9xwsWSGACojhge0Ol77&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=M44fJY078RMhawUgu78asA&oh=00_AfWweblXWuFCfemfrtFMBRiJHjLGT6w9VdGl6Pf6TmtrIQ&oe=68AE09CB",
      content: "Working with Christian was a game-changer for our startup.",
      rating: 5
    }
  ],

  experience: [
    {
      id: 1,
      title: "Data Analyst and Data Engineer 2",
      company: "DXC Technology",
      period: "2023 - 2025",
      description: "Make the data accurate and ensure that no data will be leaked",
      achievements: [
        "100% QOS for the MONTH of october,november,december",
        "Does not leave task without finishing it"
      ]
    }
  ]
};

export default mockData;