export const state = {
  title: '@magic/cases',
  description: 'convert between camelCase, PascalCase, snake_case, and kebab-case.',

  logotext: '@magic/cases',

  menu: [
    { to: '/#install', text: 'install' },
    { to: '/#import', text: 'import' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-camel', text: 'camelCase' },
        { to: '-kebab', text: 'kebab-case' },
        { to: '-pascal', text: 'PascalCase' },
        { to: '-snake', text: 'snake_case' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
