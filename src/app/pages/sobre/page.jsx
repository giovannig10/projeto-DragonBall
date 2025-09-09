"use client";
import Header from "../../../components/header";
import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Sobre Dragon Ball</h1>
                    <p className={styles.heroSubtitle}>
                        Uma jornada épica através do universo mais incrível dos animes
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className={styles.mainContent}>
                
                {/* Seção Pessoal */}
                <section className={styles.personalSection}>
                    <h2 className={styles.sectionTitle}>O que Dragon Ball representa para mim</h2>
                    <div className={styles.personalContent}>
                        <div className={styles.textCard}>
                            <p className={styles.personalText}>
                                {/* Aqui você pode colocar seu texto pessoal */}
                                Dragon Ball não é apenas um anime para mim, é uma fonte inesgotável de inspiração e superação. 
                                Desde criança, acompanhar a jornada do Goku me ensinou sobre a importância da perseverança, 
                                da amizade e de nunca desistir dos seus sonhos, independentemente dos obstáculos.
                                <br /><br />
                                As batalhas épicas, os momentos de crescimento dos personagens e a constante busca por se 
                                tornar mais forte me motivaram em diversos momentos da minha vida. Dragon Ball me mostrou 
                                que sempre há espaço para crescer e que a verdadeira força vem de proteger aquilo que amamos.
                                <br /><br />
                                Cada saga traz lições valiosas sobre superação, trabalho em equipe e a importância de ter 
                                objetivos claros. É mais do que entretenimento, é uma filosofia de vida que carrego comigo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Seção sobre a obra */}
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>Sobre a Obra</h2>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.cardTitle}>Criação</h3>
                            <p className={styles.cardText}>
                                Dragon Ball foi criado por Akira Toriyama em 1984, inicialmente como um mangá 
                                publicado na revista Weekly Shōnen Jump. A obra se tornou um dos mangás mais 
                                vendidos de todos os tempos.
                            </p>
                        </div>
                        
                        <div className={styles.aboutCard}>
                            <h3 className={styles.cardTitle}>Impacto Global</h3>
                            <p className={styles.cardText}>
                                A série transcendeu fronteiras culturais, influenciando gerações de fãs ao 
                                redor do mundo e inspirando inúmeros outros criadores de anime e mangá.
                            </p>
                        </div>
                        
                        <div className={styles.aboutCard}>
                            <h3 className={styles.cardTitle}>Legado</h3>
                            <p className={styles.cardText}>
                                Com mais de 40 anos de história, Dragon Ball continua sendo uma das franquias 
                                mais populares e influentes da cultura pop japonesa moderna.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Seção de Estatísticas */}
                <section className={styles.statsSection}>
                    <h2 className={styles.sectionTitle}>Números Impressionantes</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>260M+</div>
                            <div className={styles.statLabel}>Cópias Vendidas</div>
                        </div>
                        
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>40+</div>
                            <div className={styles.statLabel}>Anos de História</div>
                        </div>
                        
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Episódios de Anime</div>
                        </div>
                        
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>20+</div>
                            <div className={styles.statLabel}>Filmes Lançados</div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
