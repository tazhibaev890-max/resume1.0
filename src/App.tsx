const phone = '999999999';
const skills = ['React', 'TypeScript', 'Создание веб-страниц', 'Работа с кодом'];

function App() {
  return (
    <div className="page">
      <header className="header" id="home">
        <a className="site-name" href="#home">Моё резюме</a>
        <nav aria-label="Навигация">
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#education">Образование</a>
        </nav>
      </header>

      <main>
        <section className="profile" aria-labelledby="name">
          <div className="profile-text">
            <p className="small-title">РЕЗЮМЕ</p>
            <h1 id="name">Дастан Тажибаев</h1>
            <h2>Программист </h2>
            <p>Интересуюсь веб-разработкой и созданием сайтов. Хочу развиваться в программировании и работать над практическими задачами.</p>
            <a className="button" href={`tel:${phone}`}>Телефон: {phone}</a>
          </div>
          <img className="profile-photo" src="./assets/dastan.jpg" alt="Дастан Тажибаев" />
        </section>

        <section className="section" id="about">
          <h2>Обо мне</h2>
          <p>Пока у меня нет опыта работы. Самостоятельно знакомлюсь с веб-разработкой и хочу получить практический опыт.</p>
        </section>

        <section className="section" id="skills">
          <h2>Навыки и интересы</h2>
          <ul className="skills-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </section>

        <section className="section" id="education">
          <h2>Образование</h2>
          <p><strong>Среднее образование</strong></p>
        </section>
      </main>

      <footer>Дастан Тажибаев · <a href={`tel:${phone}`}>{phone}</a></footer>
    </div>
  );
}

export default App;
