//Include the eleventy-sass plugin
const eleventySass = require("eleventy-sass");

//Include the luxon plugin
const { DateTime } = require('luxon');

//Include the bookshop plugin
const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  //Add the filter "readableDate" to simplify the way blog dates are presented
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  //Tells eleventy to copy map.js into your site
  eleventyConfig.addPassthroughCopy("assets/map.js");

  //Tells eleventy where to find bookshop files
  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["component-library"],
    pathPrefix: '',
  }));
};