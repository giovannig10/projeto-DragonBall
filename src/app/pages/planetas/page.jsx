"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "../../../components/header";
import styles from "./planetas.module.css";

export default function Planets() {
    const [planetas, setPlanetas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    
    const buscarPlanetas = async () => {
        setLoading(true);
        setErro("");
        try {
            const response = await axios.get("https://dragonball-api.com/api/planets");
            setPlanetas(response.data.items || []);
        } catch (error) {
            setErro("Erro ao carregar planetas");
            console.error("Erro:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarPlanetas();
    }, []);

    return (
        <div>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Planetas de Dragon Ball</h1>
                
                {loading && <p className={styles.loading}>Carregando planetas...</p>}
                {erro && <p className={styles.erro}>{erro}</p>}
                
                <div className={styles.grid}>
                    {planetas.map((planeta) => (
                        <div key={planeta.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={planeta.image}
                                    alt={planeta.name}
                                    width={300}
                                    height={200}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.name}>{planeta.name}</h2>
                                {planeta.description && (
                                    <p className={styles.description}>{planeta.description}</p>
                                )}
                                {planeta.isDestroyed !== undefined && (
                                    <p className={styles.status}>
                                        Status: {planeta.isDestroyed ? "Destruído" : "Ativo"}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                {!loading && planetas.length === 0 && !erro && (
                    <p className={styles.noData}>Nenhum planeta encontrado</p>
                )}
            </main>
        </div>
    );
}
