# software-pages

Each of the subdirectories here has a file named `<Software>.md` that
contains the markdown source for generating:
1. an HTML file `<Software>.html`
1. a `Home.md` file which can be used for the wiki pages for each repository
1. a `<Software>.pdf` file containing a nice PDF of the page

Each subdirectory also contains a Makefile for creating the files above.
For example:
```
Python/
├── Home.md
├── Makefile
├── Python.html
├── Python.md
└── Python.pdf
```

To get the HTML to the ACCRE website, I use `pbcopy` to copy the contents
of the file to the clipboard:
```
cat Python.html | pbcopy
```

Then, I paste the clipboard into the wordpress text pane of the page editor.
