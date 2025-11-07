import React, { useEffect } from "react";
import { FaCoffee, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./App.css";
function App() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-up");
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.2 }
        );
        elements.forEach(el => observer.observe(el));
    }, []);

    const scrollToMenu = () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {/* Навбар */}
            <nav className="navbar">
                <div className="logo"><FaCoffee style={{ marginRight: 8 }} /> Aroma Coffee</div>
                <ul>
                    <li><a href="#about">Про нас</a></li>
                    <li><a href="#menu">Меню</a></li>
                    <li><a href="#reviews">Відгуки</a></li>
                    <li><a href="#contact">Контакти</a></li>
                </ul>
            </nav>
            {/* Герой */}
            <header className="hero">
                <div className="overlay"></div>
                <div className="hero-content fade-up">
                    <h1>Відчуй аромат справжньої кави</h1>
                    <p>Ми створюємо каву, яка пробуджує емоції.</p>
                    <button onClick={scrollToMenu}>Переглянути меню</button>
                </div>
            </header>
            {/* Про нас */}
            <section id="about" className="about fade-up">
                <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                    alt="coffee art"
                />
                <div className="about-text">
                    <h2>Про Aroma Coffee</h2>
                    <p>
                        Ми — команда бариста, які вірять у магію кави. Щоранку ми обсмажуємо
                        свіжі зерна й створюємо напої, які перетворюють звичайний день
                        на маленьке свято.
                    </p>
                    <p>
                        У нашому просторі затишно, ароматно й справжньо. Ми готуємо каву,
                        якою хочеться ділитися.
                    </p>
                </div>
            </section>
            {/* Меню */}
            <section id="menu" className="menu fade-up">
                <h2>Наше меню</h2>
                <div className="menu-grid">
                    {[
                        {
                            name: "Капучино",
                            desc: "М’який смак, легка пінка, відчуття гармонії.",
                            price: "65 ₴",
                            img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
                        },
                        {
                            name: "Еспресо",
                            desc: "Насичений аромат і глибокий післясмак.",
                            price: "55 ₴",
                            img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
                        },
                        {
                            name: "Лате",
                            desc: "Класика з нотками карамелі та ніжного молока.",
                            price: "70 ₴",
                            img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
                        },
                        {
                            name: "Мокачино",
                            desc: "Поєднання кави, шоколаду та вершків.",
                            price: "75 ₴",
                            img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
                        },

                    ].map((item) => (
                        <div className="menu-card" key={item.name}>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <span>{item.price}</span>
                        </div>
                    ))}
                </div>
            </section>
            {/* Відгуки */}
            <section id="reviews" className="reviews fade-up">
                <h2>Відгуки наших гостей</h2>
                <div className="review-grid">
                    {[
                        {
                            text: "Найзатишніше місце у місті! Кава — просто магія.",
                            author: "Оксана, Київ",
                        },
                        {
                            text: "Люблю приходити сюди зранку. Атмосфера спокою й тепла.",
                            author: "Тарас, Львів",
                        },
                        {
                            text: "Мокачино тут — як обійми в чашці ☕",
                            author: "Марія, Одеса",
                        },
                    ].map((r, i) => (
                        <div key={i} className="review-card">
                            <p>“{r.text}”</p>
                            <span>— {r.author}</span>
                        </div>
                    ))}
                </div>
            </section>
            {/* Футер */}
            <footer id="contact">
                <h2>Контакти</h2>
                <p><FaMapMarkerAlt /> Київ, вул. Затишна, 24</p>
                <p><FaPhoneAlt /> +380 (67) 123-45-67</p>
                <p><FaClock /> Пн–Нд: 08:00 — 21:00</p>
                <div className="footer-bottom">© 2025 Aroma Coffee</div>
            </footer>
        </>
    );
}
export default App;
