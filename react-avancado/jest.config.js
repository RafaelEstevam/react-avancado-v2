module.exports = {
  testEnvironment: 'jsdom', //simular o dom do browser
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar pastas para testes
  collectCoverage: true, //habilitar o teste de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)'], //faz o teste em todos os arquivos dessa pasta
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] //arquivo de setup
}
