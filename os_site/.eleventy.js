const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const minFilter = require ('./src/filters/min')
const headFilter = require ('./src/filters/head')
const excerptFilter = require('./src/filters/excerpt')
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter('min', minFilter);
    eleventyConfig.addNunjucksFilter('head', headFilter);
    eleventyConfig.addNunjucksFilter('excerpt', excerptFilter);

    eleventyConfig.addFilter('readableDate', (dateString) => {
      let date = new Date(dateString)
      return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
          'dd LLL yyyy'
      );
    });

    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
        "jpg"
      ]);

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");
    return {
        dir: {
            input : "src",
            output : "_site"
        }
    };
};