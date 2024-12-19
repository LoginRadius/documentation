if (typeof window !== 'undefined' && typeof document !== 'undefined') {

document.addEventListener('DOMContentLoaded', () => {
  
    const observer = new MutationObserver(() => {
      const header = document.querySelector('#oramaContainer');
      
      if (header) {
  
        observer.disconnect();
  
        // Create container for Orama search bar
        const searchContainer = document.createElement('div');
        searchContainer.setAttribute('id', 'orama-ui-container');
        searchContainer.style.marginLeft = 'auto';
  
        searchContainer.innerHTML = `
          <div id="orama-ui">
            <orama-search-button onClick="open = !open">Ask Ai..</orama-search-button>
            <orama-search-box style="width: 500px;"></orama-search-box>
          </div>
        `;
  
        header.appendChild(searchContainer);
        console.log('Search bar appended successfully to the header');
  
        // Configure the Orama search box
        const configureSearchBox = () => {
          const searchBox = document.querySelector('orama-search-box');
          if (searchBox) {
            Object.assign(searchBox, {
              resultsMap: {
                path: "path",
                section: "title",
                description: "content"
              },
              colorScheme: 'system',
              themeConfig: {},
              suggestions: [
                'How to enable MFA?',
                'How to locate API credentials?',
                'What authentication methods are supported by LoginRadius?',
                'What is an access token in LoginRadius?',
                'How does LoginRadius Passwordless Login work?',
                'What are the different types of integrations supported by LoginRadius?',
                'How to handle email verification in LoginRadius?',
              ],
              open: false,
              index: {
                endpoint: 'https://cloud.orama.run/v1/indexes/documentation-4ej-pages-dev-i3orh8',
                api_key: 'GCTg59dSHq1574qzLUAVeYdGGiykaHGV',
              },
            });
          } else {
            console.error('Orama search box element not found!');
          }
        };
  
        configureSearchBox();
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  });
  
}