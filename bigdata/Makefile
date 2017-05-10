PAGE_NAME = BigData

GENERATED_FILES = Home.md $(PAGE_NAME).html $(PAGE_NAME).pdf

UTIL_PATH = "../util/"


all: $(GENERATED_FILES)

.PHONY: clean all formattoc

$(PAGE_NAME).pdf: $(PAGE_NAME).html 
	pandoc --latex-engine=xelatex $< -o $@ 

$(PAGE_NAME).html: Home.md formattoc
	pandoc --section-divs --number-sections $< -o $@ 

formattoc: Home.md
	$(UTIL_PATH)/format_toc.py $<  
	
Home.md: $(PAGE_NAME).md
	pandoc -s --toc --atx-headers $< -o $@ 

clean: 
	rm $(GENERATED_FILES)
