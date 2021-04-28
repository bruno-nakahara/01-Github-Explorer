# 01-Github-Explorer

Preparação do ambiente de trabalho e aprendendo a configurar Babel(compilador de JS), Webpack e SASS.

Babel - Compilador de Javascript, convertendo códigos de javascript moderno para os navegadores mais antigos entenderem o código.
Webpack - Transformar/agrupar os assets do front-end como HTML, CSS e imagens em em módulos/pacotes para mapeamento dos assets de forma eficaz 

Conceitos do webpack: 
1 - Entry
2 - Output
3 - Loaders
4 - Plugins
5 - Mode

*O nome do arquivo usado para configurar geralmente é "webpack.config.js"*

Entry: Um entry point define qual módulos webpack deveria ser usada para construção do dependency graph(mapeamento das dependencias necessária para sua aplicação) interno. Tem como
padrão o entry point "./src/index.js", poderá alterar o nome, endereço e quantidades do arquivo de entry point.

module.exports = {
  entry: './path/to/my/entry/file.js',
};


Output: A propriedade da output indica para o webpack onde será enviadoos pacotes criados e como nomear os mesmos. Geralment na pasta "dist" e o nome do arquivo de "bundle.js"

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};

Loaders: Webpack entende , somente, arquivos javascript e json, então o loaders permite que o webpack processa outros tipos de arquivos e convertam para módulos/pacotes que pode 
ser usada para a sua aplicação e adicionar para dependency graph.
Loaders tem duas propriedades:
- test: Propriedades que indica quais tipos arquivos devem ser transformados. Ex: css, scss e etc.
- use: Propriedade que indica qual loader deveria ser usada para fazer a transfromação dos arquivos.

const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};

Plugins: Otmização de bundle, administração dos assets e injeção de environment variables.

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
In the example above, the html-webpack-plugin generates an HTML file for your application by injecting automatically all your generated bundles.


Mode: Habilitar a otmização interna do webpack para cada ambiente. Como ambiente de desenvolvimento, produção ou nenhum dos dois. 

module.exports = {
  mode: 'production',
};
