const postcss = require("postcss");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");
const regex = /<style>(.*?)<\/style>/gs;

exports.crush = async function (input) {
  let promises = [...input.matchAll(regex)].map((match) => {
    return process(match, input);
  });
  let replacements = await Promise.all(promises);

  return input.replace(regex, () => replacements.shift());
};

function process(match, html) {
  return postcss([
    purgecss({ content: [{ raw: html.replace(match[1], "") }] }),
    cssnano(),
  ])
    .process(match[1])
    .then((result) => {
      return match[0].replace(match[1], result.css);
    });
}
