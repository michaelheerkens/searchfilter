// Replace with your own values
const searchClient = algoliasearch(
  '0W9RB66P6V',
  '33067ae11c635037d67ad8cf3f0a4327' // search only API key, not admin API key
);

const search = instantsearch({
  indexName: 'contacts',
  searchClient,
  routing: true,
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for contacts',
  })
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
    },
  })
]);

search.start();
