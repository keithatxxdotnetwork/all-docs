import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is xx Network?',
    Svg: require('@site/static/img/xx_network.svg').default,
    description: (
      <>
        xx Network is a secure and efficient decentralized ecosystem. It combines the xx Chain with the privacy-protecting cMixx technology to power a full suite of cutting-edge tech. 
      </>
    ),
  },
  {
    title: 'What is xx Chain?',
    Svg: require('@site/static/img/xx_network.svg').default,
    description: (
      <>
        xx Chain is built on Substrate. xx Chain uses the most secure BFT approach offered by Substrate, which consists of BABE for block authoring and GRANDPA for block finality.
      </>
    ),
  },
  {
    title: 'What is cMixx?',
    Svg: require('@site/static/img/xx_network.svg').default,
    description: (
      <>
        cMixx is the end-to-end encryption protocol. It uses a revolutionary metadata shredding technology that obscures the metadata shared when sending messages and transferring data.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
