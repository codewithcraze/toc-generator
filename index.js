const cheerio = require("cheerio");

/**
 * Assigns unique IDs to HTML headings (h1, h2, ..., h6) and generates a Table of Contents.
 * @param {string} html - The raw HTML content.
 * @returns {Object} - Contains the modified HTML inside a <div> and the Table of Contents.
 */

function tocify(html) {
    const $ = cheerio.load(html); // Load the HTML content with cheerio
    const headings = $("h1, h2, h3, h4, h5, h6");
    const toc = [];
    headings.each(function (index) {

        const level = parseInt(this.tagName.replace("h", ""), 10); // Get heading level
        const text = $(this).text().trim();
        let id = $(this).attr("id") || text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
        let uniqueId = id;
        let counter = 1;
        while ($(`#${uniqueId}`).length > 0) {
            uniqueId = `${id}-${counter}`;
            counter++;
        }
        $(this).attr("id", uniqueId);

        // Add to TOC
        toc.push({ level, text, id: uniqueId });
    });

    // Generate TOC HTML
    const tocHtml = toc
        .map(({ level, text, id }) => `<li class="toc-level-${level}"><a href="#${id}">${text}</a></li>`)
        .join("\n");

    const tocWrapper = `<ul class="table-of-contents">\n${tocHtml}\n</ul>`;

    // Extract the content inside the body (excluding the <html> and <body> tags)
    const modifiedHtml = $("body").html(); // This gives only the content inside <body>

    // Wrap the modified HTML inside a <div> for structure
    const modifiedHtmlWrapped = `<div class="content-wrapper">\n${modifiedHtml}\n</div>`;

    return {
        modifiedHtml: modifiedHtmlWrapped, // Modified HTML inside <div>
        tocHtml: tocWrapper,               // TOC HTML
    };
}

module.exports = tocify;
