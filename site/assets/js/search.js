// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(() => {
  'use strict'

  const siteDocsVersion = document.querySelector('[data-bd-docs-version]').getAttribute('data-bd-docs-version')

  if (!window.docsearch) {
    return
  }

  window.docsearch({
    indexName: 'bootstrap',
    appId: 'AK7KMZKZHQ',
    container: '#docsearch',
    searchParameters: {
      facetFilters: [`version:${siteDocsVersion}`]
    },
    transformItems(items) {
      return items.map(item => {
        const liveUrl = 'https://getbootstrap.com/'

        item.url = window.location.origin.startsWith(liveUrl) ?
          // On production, return the result as is
          item.url :
          // On development or Netlify, replace `item.url` with a trailing slash,
          // so that the result link is relative to the server root
          item.url.replace(liveUrl, '/')

        // Prevent jumping to first header
        if (item.anchor === 'content') {
          item.url = item.url.replace(/#content$/, '')
          item.anchor = null
        }

        return item
      })
    },
    // Set debug to `true` if you want to inspect the dropdown
    debug: false
  })
})()
