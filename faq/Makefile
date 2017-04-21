ID_TAGS = $(shell ./get_tags.sh)

GENERATED_FILES = faq.md faq.html faq.pdf

all: $(GENERATED_FILES)

.PHONY: clean all

faq.pdf: faq.md
	pandoc --latex-engine=xelatex faq.html -o faq.pdf
	
faq.html: faq.md
	pandoc --section-divs faq.md -o faq.html

faq.md: $(ID_TAGS)
	cat faq_toc.md > $@ && \
	for snippet in $^; do \
		echo "---\n" >> $@; \
		cat $$snippet >> $@; \
  	echo "\n[Top of Page](#top)\n" >> $@; \
	done

clean: $(GENERATED_FILES)
	rm $^
