module.exports = {
  testEnvironment: 'jsdom', //simular o dom do browser
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar pastas para testes
  collectCoverage: true, //habilitar o teste de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'], //faz o teste em todos os arquivos dessa pasta
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //arquivo de setup
  moduleNameMapper: {
    'styled-componentes':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
