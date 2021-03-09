const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateString) => {
    const date = new Date(dateString);
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('DD');
  });

  eleventyConfig.addFilter('excerpt', (post) => {
    const regex = '<*p[^>]*>(.*?)</p>';
    const firstPar = post.match(regex)[1];
    return firstPar.substr(0, firstPar.lastIndexOf(' ', 200)) + '...';
  });

  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  eleventyConfig.addFilter('min', (num, minimum) => {
    if (num < minimum) {
      return num;
    }
    return minimum;
  });

  eleventyConfig.setTemplateFormats(['md', 'njk', 'jpg', 'jpeg']);

  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('./src/css');
  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
