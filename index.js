const postcss = require("postcss");
const cssnano = require("cssnano");
const regex = /<style>(.*?)<\/style>/gs;

exports.crush = async function (input) {
  let promises = [...input.matchAll(regex)].map(process);
  let replacements = await Promise.all(promises);

  return input.replace(regex, () => replacements.shift());
};

function process(match) {
  return postcss(cssnano())
    .process(match[1])
    .then((result) => {
      return match[0].replace(match[1], result.css);
    });
}
