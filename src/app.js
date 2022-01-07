const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '0W9RB66P6V',
  '33067ae11c635037d67ad8cf3f0a4327'
);

const search = instantsearch({
  indexName: 'presta_ie',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img width="100" src="{{search_image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
          </div>
          <div class="hit-price">\{{price}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.configure({
    facets: ['*'],
    maxValuesPerFacet: 20,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.refinementList({
        container,
        attribute,
      });
    },
    widgets: [],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
