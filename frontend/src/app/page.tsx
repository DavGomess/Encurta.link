"use client"

import styles from "./page.module.css";
import { useState } from "react";
import { encurtarLink } from "@/services/api";
import React from "react"

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await encurtarLink(url, customCode || undefined);
      setUrl(data.shortUrl);
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
      setUrl("");
      setShortUrl(null);
      setCustomCode("");
      setShowCustom(false);
    }, 2000)
  } 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.firstPage}>
          <p className={styles.infoTitle}><span className={styles.point}></span>Grátis e sem cadastro</p>
          <div className={styles.containerTitle}>
            <h1 className={styles.h1}>Encurte seus links em <span className={styles.span}>segundos</span></h1>
            <p>Transforme links longos e complexos em URLs curtas, elegantes e fáceis de compartilhar.</p>
          </div>
          <div className={styles.containerInput}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input 
              type="text"
              placeholder="Cole seu link aqui..."
              value={url}
              onChange={(e) => setUrl(e.target.value)} 
              readOnly={!!shortUrl}
            />
            {shortUrl ? (
                <button type="button" onClick={handleCopy}>
                  {copy ? "Copiado!" : "Copiar"} 
                  <i className={`bi ${copy ? "bi-check" : "bi-copy"}`} id={styles.copyIcon}></i> 
                </button>
            ) : (
                <button type="submit" disabled={loading}>
                  {loading ? "Encurtando..." : "Encurtar"}
                  {!loading && <i className="bi bi-arrow-right" id={styles.arrowIcon}></i>}
                </button>
            )}
            </form>
            <div className={styles.customInputContainer}>
              <span onClick={() => setShowCustom(!showCustom)}>
              <i className="bi bi-pencil"></i>  Personalizar link
            </span>

            {showCustom && (
              <div className={styles.customInput}>
                <span className={styles.baseUrl}>encurta.link/</span>
                <input 
                  type="text"
                  placeholder="Digite um nome personalizado..."
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}  
                />
              </div>
            )}
            </div>
          </div>
        </section>

        <section className={styles.secondPage} id="secondPage">
          <div className={styles.containerTitleCards}>
            <h2>Por que usar o encurta.link?</h2>
            <p>Simplifique seus links com nossa ferramenta poderosa e intuitiva.</p>
          </div>
          <div className={styles.containerCards}>
            <div className={styles.cards}>
              <i className="bi bi-lightning-charge"></i>
              <h4>Ultra Rápido</h4>
              <p>Links encurtados instantaneamente, sem espera.</p>
            </div>
            <div className={styles.cards}>
              <i className="bi bi-shield"></i>
              <h4>Seguro</h4>
              <p>Seus links são protegidos e confiáveis.</p>
            </div>
            <div className={styles.cards}>
              <i className="bi bi-pencil-square"></i>
              <h4>Personalizável</h4>
              <p>Crie links com o nome que você quiser.</p>
            </div>
            <div className={styles.cards}>
              <i className="bi bi-globe"></i>
              <h4>Global</h4>
              <p>Funciona em qualquer lugar do mundo.</p>
            </div>
          </div>
        </section>

        <section className={styles.thirdPage} id="thirdPage">
          <h2>Como funciona</h2>
          <p>Três passos simples para encurtar seus links.</p>
          <div className={styles.containerSteps}>
            <div className={styles.steps}>
              <p className={styles.stepsFirstP}>01</p>
              <h4>Cole seu link</h4>
              <p className={styles.stepsDescription}>Insira o link longo que você deseja encurtar.</p>
            </div>
            <div className={styles.steps}>
              <p className={styles.stepsFirstP}>02</p>
              <h4>Clique em encurtar</h4>
              <p className={styles.stepsDescription}>Nosso sistema gera um link curto único para você.</p>
            </div>
            <div className={styles.steps}>
              <p className={styles.stepsFirstP}>03</p>
              <h4>Compartilhe</h4>
              <p className={styles.stepsDescription}>Copie e compartilhe seu novo link em qualquer lugar.</p>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <p><i className="bi bi-link" id={styles.miniLogo}></i>encurta<span className={styles.span}>.link</span></p>
          <p className={styles.footerText}>&copy; 2026 Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
