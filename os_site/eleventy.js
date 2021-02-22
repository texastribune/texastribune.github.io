const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const minFilter = require ('./src/filters/min')
const headFilter = require ('./src/filters/head')

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter('min', minFilter);
    eleventyConfig.addNunjucksFilter('head', headFilter);

    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
        "jpeg"
      ]);

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");
    return {
        dir: {
            input : "src",
            output : "_site"
        }
    };
};