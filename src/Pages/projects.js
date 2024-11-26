import React, { useState, useEffect } from "react";

const Projects = () => {
  const [index, setIndex] = useState(0); // Индекс текущего проекта
  const projects = [
    { 
      image: "https://tictactoefree.com/img/pole_ultimate.png", 
      link: "projects/1",
      description: "SuperTicTacToe",
    },
    { 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36nHaLO5oTQqh2IHs6IcqAWH62o1pxpzGjA&sg", 
        link: "projects/2",
        description: "AimTrainer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Автопрокрутка каждые 3 секунды
    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, [projects.length]);

  return (
    <div className="page-cont">   
        <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {projects.map((project, i) => (
          <a 
            key={i} 
            href={project.link} 
            className="project"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={`Проект ${i + 1}`} />
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;

