const phone = '999999999';

const skills = ['React', 'TypeScript', 'Разработка интерфейсов', 'Работа с кодом'];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="На главную">
          <span className="wordmark-mark">Д</span><span>Д. ТАЖИБАЕВ<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Основная навигация">
          <a href="#about">Обо мне</a><a href="#experience">Опыт</a><a href="#skills">Навыки</a>
        </nav>
        <a className="contact-pill" href={`tel:${phone}`}>Связаться <span aria-hidden="true">↗</span></a>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> РАССМАТРИВАЮ ПРЕДЛОЖЕНИЯ</p>
            <h1 id="hero-title">Дастан<br /><span>Тажибаев</span><span className="title-period">.</span></h1>
            <p className="hero-role">Senior-разработчик <span className="role-divider">/</span> Программист</p>
            <p className="hero-intro">Интересуюсь разработкой современных веб-интерфейсов. Ищу возможность применить знания React и TypeScript в команде.</p>
            <div className="hero-actions"><a className="button button-dark" href={`tel:${phone}`}>Позвонить <span>↗</span></a><a className="text-link" href="#experience">Обо мне <span>↓</span></a></div>
            <div className="hero-meta"><span>⌖ Кыргызстан</span><span>✳ Русский</span></div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame"><img src="./assets/photo-placeholder.svg" alt="Временная заглушка для фотографии Дастана Тажибаева" /><span className="photo-note">ФОТО БУДЕТ ДОБАВЛЕНО</span></div>
            <div className="visual-sticker"><span>✳</span><span>ОТКРЫТ<br />К НОВЫМ ИДЕЯМ</span></div>
            <div className="visual-index">01 <span>—</span> 04</div>
          </div>
          <div className="hero-side-note">РЕЗЮМЕ · 2026</div>
        </section>

        <section className="intro-strip" id="about"><span className="section-kicker">01 / ОБО МНЕ</span><p>Интересуюсь <em>веб-разработкой</em><br className="desktop-break" /> и созданием удобных интерфейсов.</p><span className="strip-arrow">↘</span></section>

        <section className="content-section" id="experience">
          <div className="section-heading"><div><span className="section-kicker">02 / ПУТЬ</span><h2>Опыт<span>.</span></h2></div><p>Профессиональный опыт<br />пока не указан.</p></div>
          <article className="timeline-card"><span className="timeline-date">НАЧИНАЮ ПУТЬ</span><div><h3>Ищу первую возможность</h3><p className="company">Открыт к обучению и практическим задачам</p><p className="description">В резюме указано, что опыта работы пока нет. Готов развиваться в веб-разработке и применять знания на реальных проектах.</p><div className="tag-row"><span>React</span><span>TypeScript</span></div></div><span className="card-arrow">↗</span></article>
        </section>

        <section className="skills-section" id="skills"><div className="section-heading"><div><span className="section-kicker">03 / ЧТО Я ИЗУЧАЮ</span><h2>Навыки<span>.</span></h2></div><p>Технологии и направления,<br />которые мне интересны.</p></div><div className="skills-grid">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>{String(index + 1).padStart(2, '0')}</span><p>{skill}</p><b>↗</b></div>)}</div></section>

        <section className="education-section"><div className="section-heading"><div><span className="section-kicker">04 / ОБРАЗОВАНИЕ</span><h2>Учёба<span>.</span></h2></div></div><div className="education-row"><span>СРЕДНЕЕ</span><div><h3>Среднее образование</h3><p>Дополнительные сведения не указаны</p></div><span className="education-mark">✳</span></div></section>

        <section className="contact-section"><span className="section-kicker">ОТКРЫТ К ОБЩЕНИЮ</span><h2>Давайте<br />знакомиться<span>.</span></h2><a className="button button-light" href={`tel:${phone}`}>Позвонить <span>↗</span></a><div className="contact-details"><a href={`tel:${phone}`}>{phone}</a><span>·</span><span>Телефон</span></div></section>
      </main>
      <footer><a className="wordmark" href="#home"><span className="wordmark-mark">Д</span><span>Д. ТАЖИБАЕВ<span className="wordmark-dot">.</span></span></a><span>Резюме · {new Date().getFullYear()}</span><a href="#home">НАВЕРХ ↑</a></footer>
    </div>
  );
}

export default App;
