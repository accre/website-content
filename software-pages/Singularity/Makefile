#ID_TAGS = $(shell ./get_tags.sh)

GENERATED_FILES = Singularity.html Singularity.pdf

all: $(GENERATED_FILES)

.PHONY: clean all

Singularity.pdf: Singularity.md
	pandoc --latex-engine=xelatex Singularity.html -o Singularity.pdf
	
Singularity.html: Singularity.md
	pandoc --section-divs Singularity.md -o Singularity.html

clean: $(GENERATED_FILES)
	rm $^
