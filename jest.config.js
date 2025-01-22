module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"], // Adiciona src e test como diretórios raiz
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Transforma arquivos .js e .jsx usando Babel
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Ignora imports de arquivos CSS
  },
  testMatch: ["**/test/**/*.test.(js|jsx)"], // Localiza os arquivos de teste na pasta test
  moduleFileExtensions: ["js", "jsx", "json", "node"], // Extensões de arquivos suportadas
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMocks.js",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Inclui todos os arquivos em src com as extensões especificadas
    "!src/**/*.test.{js,jsx,ts,tsx}", // Exclui os arquivos de teste
    "!src/index.js", // Exclui o arquivo de entrada principal, se aplicável
    "!src/reportWebVitals.js", // Exclui arquivos gerados automaticamente, se aplicável
    "!src/**/mock*.{js,jsx,ts,tsx}", // Exclui mocks, se houver
  ],
  coverageReporters: ["json", "lcov", "text", "html"], // Gera relatórios de cobertura em vários formatos
};
