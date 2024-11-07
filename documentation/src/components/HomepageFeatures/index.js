import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Authentication',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <a href="/docs/authentication/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>
            A quick run-through of authentication processes and features offered by the LoginRadius Identity Platform.
          </span>
        </div>
      </a>
    ),
}
,
  {
    title: 'Academy',
    Svg: require('@site/static/img/undraw_docusaurus_academy.svg').default,
    description: (
      <>
        Configure seamless authentication of your customers into your application and getting started with LoginRadius.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Understand and enable the different LoginRadius Identity Platform security features for your customers.
      </>
    ),
  },
  {
    title: 'SDK Libraries',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SDKs, Turnkey plugins, and JS Libraries that will help you to deploy your LoginRadius Identity Platform in no time.
        {/* <ul>
          {[
            { url: 'sdk-reference/dotnet', title: '.NET' },
            { url: 'sdk-reference/android', title: 'Android (Java)' },
            { url: 'sdk-reference/dart', title: 'Dart (Flutter)' },
            { url: 'sdk-reference/go', title: 'Go' },
            { url: 'sdk-reference/java', title: 'Java' },
            { url: 'sdk-reference/js', title: 'JavaScript' },
            { url: 'sdk-reference/node', title: 'Node.js' },
            { url: 'sdk-reference/php', title: 'PHP' },
            { url: 'sdk-reference/community/laravel', title: 'PHP (Laravel)' },
            { url: 'sdk-reference/python', title: 'Python' },
            { url: 'sdk-reference/ruby', title: 'Ruby' },
            { url: 'sdk-reference/rust', title: 'Rust' },
            { url: 'sdk-reference/ios', title: 'Swift (iOS)' },
          ].map((link) => (
            <li key={link.title}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul> */}
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
        <Heading as="h3">{title}</Heading>
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