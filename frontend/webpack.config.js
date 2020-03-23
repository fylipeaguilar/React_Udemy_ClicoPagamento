//Importando o webpack
const webpack = require('webpack')

//Importando o ExtractTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //Iniciando a configuração do webpack
    //Configurando a entrada
    entry: './src/index.jsx',

    //Configurando a saída
    output: {
        path: __dirname + '/public',
        filename:  './app.js'
    },

    //Configurando o servidor
    devServer: {
        //Configurando a porta que o servidor ficará de pé
        port: 8080,
        //Pasta onde ele vai ler o conteúdo
        contentBase: './public'
    },

    resolve: {
        //Para interpretar extensões
        extensions: ['', '.js', '.jsx'],

        //Criando os apelidos
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery'
        }),

        new ExtractTextPlugin('app.css')
    ],

    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader:'file'
        }]
    }
    
}