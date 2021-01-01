module.exports = {
    base: "./",
    outDir: "./lib",
    alias: {
        '/@/': require("path").resolve(__dirname, './src')
    },
};
