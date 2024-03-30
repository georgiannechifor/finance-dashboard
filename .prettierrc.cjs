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
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^@redux/(.*)$',
    '^@src/(.*)$',
    '^@types/(.*)$',
    '^@utils/(.*)$',
    '^@assets/(.*)$',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '\\.(c|le|sc)ss$'
    // '^[.]/[-a-zA-Z0-9_]+[.](css|scss|less)$'
  ],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true
};
