/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // Define your sidebar for the specific folder
    MyFolderSidebar : [
      'governance/overview',  // Move file3.md to the top
      'governance/data-schema',
      'file2',
      'file4',
    ],
  };
  
  export default sidebars;
  