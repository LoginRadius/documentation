import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  MainCard,
  QuickStart,
  ExploreByFeature,
  Resources,
} from "../components/HomePage";
import { DocsSidebarProvider } from "@docusaurus/plugin-content-docs/client";
import DocRootLayout from "@theme/DocRoot/Layout";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { mainpageSideBar } from "../components/mainpageSideBar";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
       <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
        <DocsSidebarProvider
          name={mainpageSideBar.sidebarName}
          items={mainpageSideBar.sidebarItems}
        >
          <DocRootLayout>
            <MainCard />
            <QuickStart />
            <ExploreByFeature />
            <Resources />
          </DocRootLayout>
        </DocsSidebarProvider>
      </HtmlClassNameProvider>
    </Layout>
  );
}
