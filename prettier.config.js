/** @type {import("prettier").Config} */
module.exports = {
  semi: false, // không dùng dấu ;
  singleQuote: false, // nháy đơn cho JS
  jsxSingleQuote: false, // nháy đơn cho JSX
  trailingComma: "all", // thêm dấu phẩy cuối
  tabWidth: 2,
  printWidth: 100,
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ["prettier-plugin-tailwindcss"],
}
