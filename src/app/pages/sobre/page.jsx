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
                            Dragon Ball entrou na minha vida quando eu era criança, por influência do meu irmão. Desde então, o anime se tornou uma presença constante no meu dia a dia — seja por meio de brinquedos, do próprio anime, dos jogos ou até mesmo dos filmes.
                            </p>
                            <p>Dragon Ball foi uma experiência incrível na minha vida. Não consigo imaginar a minha infância sem essa obra. Até hoje, ainda me pego reassistindo episódios e filmes. Gostaria que minha imaginação ainda fosse a mesma de antes, para poder brincar por horas sem preocupações e passar o tempo ao lado dos personagens que fizeram parte da minha infância. Mas o tempo não perdoa — e não volta mais.</p>
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
