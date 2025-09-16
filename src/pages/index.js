import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={styles.secondaryButton}
              to="#demo">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function VideoSection() {
  return (
    <section id="demo" className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>See SteeringAI in Action</h2>
          <p className={styles.sectionSubtitle}>
            Watch how easy it is to create complex steering behaviors with our visual editor and ECS-powered performance.
          </p>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5KR1cyjmYlo"
              title="SteeringAI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎮</div>
            <h3>Visual Editor</h3>
            <p>Create behaviors without writing a single line of code</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>ECS Performance</h3>
            <p>Built on Unity's ECS for maximum performance</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Extensible</h3>
            <p>Create custom behaviors that integrate seamlessly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Create intelligent, lifelike movement behaviors with Unity ECS. No coding required.">
      <HomepageHeader />
      <main>
        <VideoSection />
      </main>
    </Layout>
  );
}
