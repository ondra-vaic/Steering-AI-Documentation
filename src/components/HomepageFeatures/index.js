import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy of Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SteeringAI provides a visual editor where different combinations of behaviors can be set up without any code.
      </>
    ),
  },
  {
    title: 'Library of Samples',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SteeringAI provides a library of samples which showcase how to use it.
      </>
    ),
  },
  {
    title: 'Library of Behaviors',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SteeringAI provides a library behaviors which can be used out of the box.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SteeringAI offers a simple way to create your own custom behaviors which are automatically parallelized and integrated into the visual editor. 
      </>
    ),
  },
  {
    title: 'Modular',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SteeringAI allows you to set up any combination of behaviors in a modular way, all without writing a single line of code. 
      </>
    ),
  },
  {
    title: 'Performant',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SteeringAI achieves high performance through use of Unity's ECS, Jobs and Burst. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div style={{ height: '600px' }} /> {/* Spacer */}
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
