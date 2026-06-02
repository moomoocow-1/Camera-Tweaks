import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Camera Tweaks" description="Roblox Camera Framework Docs">
      <main className={styles.main}>
        
        <div className={styles.hero}>
          <h1 className={styles.title}>Camera Tweaks</h1>
          <p className={styles.subtitle}>
            A lightweight, smooth, and customizable Roblox camera system.
          </p>

          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Get Started
            </Link>

            <Link className={styles.secondaryButton} to="https://github.com/moomoocow-1/Camera-Tweaks">
              GitHub
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
}