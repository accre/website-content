#ID_TAGS = $(shell ./get_tags.sh)

GENERATED_FILES = Python.html Python.pdf

all: $(GENERATED_FILES)

.PHONY: clean all

Python.pdf: Python.md
	pandoc --latex-engine=xelatex Python.html -o Python.pdf
	
Python.html: Python.md
	pandoc --section-divs Python.md -o Python.html

clean: $(GENERATED_FILES)
	rm $^
