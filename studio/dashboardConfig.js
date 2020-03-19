export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7344ca85708666bfbff8bf',
                  title: 'Sanity Studio',
                  name: 'sanity-io-studio-yszba95d',
                  apiId: '1d5cf303-176f-4d13-a837-620567fa972a'
                },
                {
                  buildHookId: '5e7344ca8570866108bff991',
                  title: 'Portfolio Website',
                  name: 'sanity-io-web',
                  apiId: '2fd2089b-a5c7-4533-bbca-eca635a8bcf9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sparkysoft/sanity-io',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-io-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
