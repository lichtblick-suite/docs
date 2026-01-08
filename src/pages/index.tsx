import type {ReactNode} from 'react';
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
      <meta name="algolia-site-verification" content="235DCDF5401E75CF" />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <img 
              src="img/logo.png" 
              alt="Lichtblick Logo" 
              className={styles.heroLogo}
            />
            <Heading as="h1" className={styles.heroTitle}>
              Lichtblick
            </Heading>
            <p className={styles.heroSubtitle}>
              An integrated visualization and diagnosis tool for robotics, available in your browser or as a desktop app on Linux, Windows, and macOS.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.getStartedButton)}
                to="/docs/docs/">
                Get Started 🚀
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.githubButton)}
                to="https://github.com/Lichtblick-Suite/lichtblick">
                View on GitHub
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="img/home-page-image.png" 
              alt="Lichtblick Interface Screenshot"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}: {title: string, description: string, icon: string}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>Why Choose Lichtblick?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <FeatureCard
              title="Multi-Format Support"
              description="Load data from ROS 1, ROS 2, MCAP, and many other robotics formats. Connect to live systems or analyze recorded data."
              icon="📊"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Powerful Visualization"
              description="Create custom layouts with specialized panels. Visualize sensor data, robot states, and diagnostic information in real-time."
              icon="🔍"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Extensible Platform"
              description="Build custom extensions, message converters, and panels to tailor Lichtblick to your specific robotics workflow."
              icon="⚙️"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <FeatureCard
              title="Cross-Platform"
              description="Available as a desktop application on Linux, Windows, and macOS, or use it directly in your web browser."
              icon="💻"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Developer Friendly"
              description="Built with TypeScript and React. Open source with an active community of robotics developers."
              icon="👨‍💻"
            />
          </div>
          <div className="col col--4">
            <FeatureCard
              title="Real-time Analysis"
              description="Debug your robots in real-time with live data streaming and playback controls for thorough analysis."
              icon="⏱️"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Lichtblick is an integrated visualization and diagnosis tool for robotics">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
