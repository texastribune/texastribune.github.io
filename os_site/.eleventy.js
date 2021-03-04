const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require('luxon');


module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter('readableDate', (dateString) => {
      const date = new Date(dateString)
      return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
          'dd LLL yyyy'
      );
    });

    eleventyConfig.addFilter('excerpt', (post) => {
        const regex = '<*p[^>]*>(.*?)</p>';
        const firstPar = post.match(regex)[1];
        return firstPar.substr(0, firstPar.lastIndexOf(' ', 200)) + '...';
    });

    eleventyConfig.addFilter('head', (array, n) => {
        if( n < 0 ) {
          return array.slice(n);
        }
        return array.slice(0, n);
    });

    eleventyConfig.addFilter('min', (num, minimum) => {
        if (num < minimum) {
            return num;
        } else {
            return minimum;
        }
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