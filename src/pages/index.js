import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/tools/explorer">
            Chain Explorer
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/tools/dashboard">
            cMix Dashboard
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/tools/sleeve">
            Sleeve Wallet Generator
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/tools/simpleStaking">
            Simple Staking
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/tools/webWallet">
            Web Wallet
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
