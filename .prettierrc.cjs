module.exports = {
  plugins: [require('@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss')],
  printWidth: 150,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'none',
  bracketSpacing: true,
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '^@layouts/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^@src/(.*)$',
    '^@utils/(.*)$',
    '^@assets/(.*)$',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '\\.(c|le|sc)ss$'
  ],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true
};
