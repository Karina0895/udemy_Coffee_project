import { Component } from 'react';

class HomePage extends Component {
    render() {
        return(
            <main>
                <section className="home-intro">
                    <h1>Ласкаво просимо на головну!</h1>
                    <p>Тут можна додати будь-який контент тільки для HomePage</p>
                </section>

                <section className="home-features">
                    <h2>Особливості сайту</h2>
                    <div>Тут блоки, картинки, компоненти і т.д.</div>
                </section>
            </main>
        );
    }
};

export default HomePage;