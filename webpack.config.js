
module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            // WelcomeMain: 'public/components/WelcomeMain.js',
            // WelcomeForm: 'public/components/WelcomeForm.js',
            // WelcomeMessage: 'public/components/WelcomeMessage.js'
        },
        extensions: ['','.js']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react' ,'es2015']
                },
                test: /\.js?$/,
                exclude: /(node_modules)/
            }
        ]
    }
}