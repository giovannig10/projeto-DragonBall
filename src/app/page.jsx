"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dragonball-api.com/api/characters?limit=58");
      const data = response.data.items
      setUsuarios(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>
            Guerreiros Z
          </h1>

                              {/* Controles de paginação */}
                              <div className={styles.controlsWrapper}>
                        
                    </div>

          <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
              <button 
                onClick={buscarUsuarios} 
                disabled={loading} 
                className={styles.searchButton}
              >
                {loading ? "Carregando..." : "Buscar Personagens"} 
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          
          {usuarios.length > 0 ? usuarios.map((usuario) => (
            <div 
              key={usuario.id} 
              className={styles.characterCard}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={usuario.image} 
                  width={200} 
                  height={200}
                  alt={usuario.name}
                  className={styles.characterImage}
                />
              </div>
              <h3 className={styles.characterName}>
                {usuario.name}
              </h3>
              <div className={styles.characterInfo}>
                <p className={styles.characterDetail}>
                  <span className={styles.detailLabel}>Raça:</span> {usuario.race}
                </p>
                <p className={styles.characterDetail}>
                  <span className={styles.detailLabel}>Gênero:</span> {usuario.gender}
                </p>
                <p className={styles.characterDetail}>
                  <span className={styles.detailLabel}>Ki:</span> {usuario.ki}
                </p>
                <p className={styles.characterDetail}>
                  <span className={styles.detailLabel}>Ki Máximo:</span> {usuario.maxKi}
                </p>
                <p className={styles.characterDetail}>
                  <span className={styles.detailLabel}>Afiliação:</span> {usuario.affiliation}
                </p>
                {usuario.description && (
                  <p className={styles.characterDescription}>
                    {usuario.description}
                  </p>
                )}
              </div>
            </div>
          )) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyStateText}>
                {loading ? "Carregando..." : "Nenhum personagem encontrado"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
