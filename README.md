
```markdown
# tocify

`tocify` is a utility that processes HTML content to generate a Table of Contents (TOC) based on the headings (h1, h2, h3, ..., h6) present in the document. It also assigns unique IDs to these headings to ensure proper navigation within the document.

## Features

- Parses raw HTML content and identifies all headings (h1, h2, h3, h4, h5, h6).
- Automatically assigns unique IDs to headings if not already provided.
- Generates a Table of Contents (TOC) based on the headings, formatted as a nested list.
- Returns the modified HTML with assigned IDs and a generated TOC.

## Installation

To use `tocify.js`, you need to have Node.js installed. You can install it via npm.

```bash
npm install tocify.js
```

You also need to install the `cheerio` package as it is used for parsing and manipulating HTML.

```bash
npm install cheerio
```

## Usage

### Import the `tocify.js` function:

```javascript
const tocify = require("tocify.js");
```

### Example Usage:

```javascript
const fs = require("fs");
const tocify = require("tocify.js");

const rawHtml = fs.readFileSync("example.html", "utf8");
const { modifiedHtml, tocHtml } = tocify(rawHtml);

// The modifiedHtml contains the HTML with unique IDs for headings
// The tocHtml contains the generated Table of Contents

console.log("Table of Contents:", tocHtml);
console.log("Modified HTML:", modifiedHtml);
```

### Parameters:

- `html` (string): The raw HTML content you want to process.

### Returns:

- `modifiedHtml` (string): The modified HTML with unique IDs for each heading and wrapped in a `<div>`.
- `tocHtml` (string): The HTML string representing the Table of Contents as an unordered list (`<ul>`).

### Example Input:

```html
<h1>Introduction</h1>
<h2>Overview</h2>
<h3>Details</h3>
```

### Example Output:

#### Table of Contents:

```html
<ul class="table-of-contents">
  <li class="toc-level-1"><a href="#introduction">Introduction</a></li>
  <li class="toc-level-2"><a href="#overview">Overview</a></li>
  <li class="toc-level-3"><a href="#details">Details</a></li>
</ul>
```

#### Modified HTML:

```html
<div class="content-wrapper">
  <h1 id="introduction">Introduction</h1>
  <h2 id="overview">Overview</h2>
  <h3 id="details">Details</h3>
</div>
```

## API

### `tocify(html)`

**Parameters:**

- `html` (string): The raw HTML content.

**Returns:**

An object with the following properties:
- `modifiedHtml`: The HTML content with assigned unique IDs for each heading.
- `tocHtml`: The generated Table of Contents as an unordered list.

## License

MIT License. See the [LICENSE](LICENSE) file for details.
```
