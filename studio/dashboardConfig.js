export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62ebbfa34edd00055b284d99',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-adzh5xyb',
                  apiId: '026a4d7d-d0a4-4100-a83f-4c0d4e0ea4c2'
                },
                {
                  buildHookId: '62ebbfa39fcd7b05a0d0f8f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wang476e',
                  apiId: '4234a049-3ccb-4dff-89e3-0936658ef814'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/odeta939/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wang476e.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
