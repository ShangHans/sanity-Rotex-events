export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-Rotex-events-studio',
                  apiId: '4d923229-57ad-4e94-9202-b0ecc13a0696'
                },
                {
                  buildHookId: '5ea9570a67e77a4603a7aed4',
                  title: 'Events Website',
                  name: 'sanity-Rotex-events',
                  apiId: 'bec5e8d2-06fa-45f3-a076-2d94ebc9b3f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ShangHans/sanity-Rotex-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-Rotex-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
