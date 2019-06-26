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
                  buildHookId: '5d1368949c9b739c1d9109b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xu9o7x3j',
                  apiId: 'f6e54e89-030a-4b8c-8537-3975aa381ecf'
                },
                {
                  buildHookId: '5d136894f5ded6d37c3a85f1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4ng2p8vm',
                  apiId: 'b6bbddbf-f89c-4753-b3a0-ebeb9e4a4f2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmaclachlan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4ng2p8vm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
