import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Authentication',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 'A quick run-through of authentication processes and features offered by the LoginRadius Identity Platform.',
    link: '/docs/authentication/overview'
  },
  {
    title: 'Single Sign On',
    Svg: require('@site/static/img/undraw_docusaurus_academy.svg').default,
    description: 'Configure seamless authentication of your customers into your application or third-party applications.',
    link: '/docs/single-sign-on/overview'
  },
  {
    title: 'Libraries',
    Svg: require('@site/static/img/apihome-libraries.svg').default,
    description: 'SDKs, Turnkey plugins, and JS Libraries that will help you to deploy your LoginRadius Identity Platform in no time.',
    link: '/docs/libraries/overview'
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/apihome-security.svg').default,
    description: 'Understand and enable the different LoginRadius Identity Platform security features for your customers.',
    link: '/docs/security/overview'
  },
  {
    title: 'Governance',
    Svg: require('@site/static/img/apihome-governance.svg').default,
    description: 'Discover data storage, security, and compliance features followed and offered by the LoginRadius Identity Platform.',
    link: '/docs/governance/overview'
  },
  {
    title: 'Customer Management',
    Svg: require('@site/static/img/apihome-customermanagement.svg').default,
    description: 'Directly view and manage your customer data with these powerful Customer Management Systems.',
    link: '/docs/customer-management/overview'
  },
  {
    title: 'Customer Intelligence',
    Svg: require('@site/static/img/apihome-customerintelligenece.svg').default,
    description: 'Analyze your customer information to gain useful insights, build stronger customer relationship and support your decision-making process.',
    link: '/docs/customer-intelligence/analytics-overview'
  },
  {
    title: 'Integrations',
    Svg: require('@site/static/img/apihome-integrations.svg').default,
    description: 'Integrate LoginRadius Identity Platform with any third-party software to work seamlessly with your existing application and enhance your productivity.',
    link: '/docs/integrations/overview'
  },
  {
    title: 'Reference Docs',
    Svg: require('@site/static/img/apihome-referencedocsapis.svg').default,
    description: 'Find detailed technical documentation to successfully configure and deploy the LoginRadius Identity Platform to meet your business needs.',
    link: ''
  }
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={clsx(styles.card, 'stretched-link')} style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>

        <div className={styles.cardContent}>
          <Heading as="h3" style={{ textAlign: 'center'}}>{title}</Heading>
          <p style={{ textAlign: 'center'}}>{description}</p>
        </div>
      </a>
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