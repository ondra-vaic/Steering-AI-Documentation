import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function VideoSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h1" className={styles.mainTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.mainSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.headerButton}>
            <Link
              className={clsx(styles.primaryButton, styles.buyButton)}
              to="https://assetstore.unity.com/packages/tools/behavior-ai/steering-flocking-framework-ecs-333012"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET NOW
            </Link>
            <Link
              className={clsx(styles.primaryButton, styles.buyButton)}
              to="https://steeringai.ondrejvaic.com/docs/intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5KR1cyjmYlo?hd=1&vq=hd1080&rel=0&modestbranding=1&showinfo=0"
              title="SteeringAI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🖥️</div>
            <h3>Visual Editor</h3>
            <p>Design Flocking and Steering Systems through GUI, no coding required.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>DOTS Performance</h3>
            <p>Built on Unity's ECS, Jobs, and Burst Compiler for maximum performance.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Extensible Framework</h3>
            <p>Create custom behaviors that automatically integrate with the visual editor and parallel job system.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🐦</div>
            <h3>Flocking Behaviors</h3>
            <p>Complete flocking simulation with cohesion, alignment, separation, seeking, and fleeing behaviors.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🧭</div>
            <h3>Library of Behaviors</h3>
            <p>Path following, wandering, homing, collision avoidance, and more.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏃</div>
            <h3>Fast Character Controller</h3>
            <p>High-performance 2D, 3D, and 2.5D movement systems with collision resolution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Framework for Steering and Flocking Behaviors, written in Unity ECS."
    >
      <main>
        
        <VideoSection />
      </main>
    </Layout>
  );
}
