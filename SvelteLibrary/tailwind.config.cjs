module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    darkMode: 'class',
    theme: {
        colors: {
            buttonPrimaryDefault: '#0263E0',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}