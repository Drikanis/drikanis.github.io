const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("slugify");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const markdownItAnchorOptions = {
    level: [1, 2, 3],
    slugify: (str) => 
        slugify(str, {
            lower: true,
            strict: true,
            remove: /["]/g,
        }) ,
    tabIndex: false,
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy(".well-known");
    eleventyConfig.addPassthroughCopy("Drikanis.asc");
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addFilter("formatDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    });

    eleventyConfig.addFilter("slug", (str) => {
        if (!str) {
            return;
        }

        return slugify(str, {
            lower: true,
            struct: true,
            remove: /["]/g,
        });
    });

    let markdownOptions = {
        html: true,
        breaks: true,
        linkify: true
    };
    let markdownLib = new markdownIt(markdownOptions).use(markdownItAnchor, markdownItAnchorOptions);

    //Add div around tables
    markdownLib.renderer.rules.table_open = () => '<div class="table-wrapper">\n<table>\n',
    markdownLib.renderer.rules.table_close = () => '</table>\n</div>',

    eleventyConfig.setLibrary("md", markdownLib);
};
