import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Тургамбеков Доолот</h1>
        <p className="subtitle">Студент КГИПИ | React / Java / Web Developer</p>
      </header>

      <section className="card">
        <h2>О себе</h2>
        <p>
          Люблю читать достойные книги. Изучаю Java, PostgreSQL и современную веб-разработку (React, JS, HTML/CSS).
        </p>
      </section>

      <section className="card">
        <h2>Навыки и технологии</h2>
        <div className="skills-list">
          <span className="skill-tag">Java</span>
          <span className="skill-tag">PostgreSQL</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">HTML5 / CSS3</span>
          <span className="skill-tag">Git / GitHub</span>
        </div>
      </section>

      <section className="card">
        <h2>Образование</h2>
        <p><strong>КГИПИ (INAI)</strong> программные технологии </p>
      </section>

      <section className="card">
        <h2>Контакты</h2>
        <div className="contacts">
          <p>📧 Email: <a href="mailto:turgambekovdoolot@gmail.com">turgambekovdoolot@gmail.com</a></p>
          <p>📸 Instagram: <a href="https://www.instagram.com/turgambekovd_/" target="_blank" rel="noreferrer">@turgambekovd_</a></p>
          <p>💻 GitHub: <a href="https://github.com/Doolot999" target="_blank" rel="noreferrer">github.com/Doolot999</a></p>
        </div>
      </section>
    </div>
  )
}

export default App