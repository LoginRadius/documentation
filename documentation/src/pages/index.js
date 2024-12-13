import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  MainCard,
  QuickStart,
  ExploreByFeature,
  Resources,
} from "../components/HomePage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container">
        <MainCard />
        <QuickStart />
        <ExploreByFeature />
        <Resources />
      </main>
    </Layout>
  );
}
