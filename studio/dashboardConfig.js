export default {
  widgets: [
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
                  buildHookId: '60e17974fcacb6bcbbe558af',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-af68fkpw',
                  apiId: 'b6bbe4c6-c0c5-4b40-9e74-ff749cd18e7d'
                },
                {
                  buildHookId: '60e1797553caab96e351370e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ow7nnk6g',
                  apiId: '200a64e2-3cca-4812-aa90-7c95d46664a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/v-antong/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ow7nnk6g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
