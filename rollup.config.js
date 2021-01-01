import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "lib/vue-ts-template.common.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            vue({
				alias: {
					'/@/': require("path").resolve(__dirname, './src')
				},
				css:false,
			}),
            css({ output: "vue-ts-template.css" }),
			typescript(),
        ],
        external: ["vue"],
    },
];
