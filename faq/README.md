# faq

Store content for the 
[ACCRE FAQ page](http://www.accre.vanderbilt.edu/?page_id=47)
as markdown, 
and use [`pandoc`](http://pandoc.org/index.html) to convert the markdown
to html.

## To create new FAQ content

Add a new markdown file in `faq-snippets`. Then, modify the file
`faq-toc.md` to include your snippet with its appropriate tag.

### Gotchas 

- Use 6 hashes to denote a level 6 heading. 
- Include the id hash of your section after the heading, e.g.
  `###### Accounts: How do I change my ACCRE account password? {#password}`.
- Make sure your `.md` filename matches your hash, e.g. (`password.md`).
- Heading should be one continuous line (no forced wrapping).
- When typing code blocks use the `{.outline}` CSS style modifier, e.g.
  
  ````
  ```{.outline}
  some code
  ```
  ````

- Leave one blank line around both top and bottom of code blocks.
- [Normal markdown conventions](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes) apply.

## To generate `faq.md` and `faq.html`

Run the bash script `append_content.sh`, which 
1. looks at `faq_toc.md` to determine which snippets need to be added
1. adds the appropriate snippets including horizontal lines and *Top of Page*
links
1. appends `faq_toc.md` and snippets to produce `faq.md`
1. calls `pandoc` to convert `faq.md` to `faq.html`

The resulting `faq.html` is not complete html, 
rather it is intended to be pasted
into the 
[WordPress editor](http://www.accre.vanderbilt.edu/wp-admin/post.php?post=47&action=edit).
