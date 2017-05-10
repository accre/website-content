BASE_DIR = ..
SLIDES = \
	using-hue-on-the-bigdata-cluster.md \
	../general/getting-access-to-the-bigdata-cluster.md \
	logging-on-to-the-cluster-via-hue.md \
	using-the-hdfs-file-browser.md \
	building-an-application.md \
	overview-of-cloudera-services.md \
	conclusions.md

GENERATED_FILE = using-hue.md

all: $(GENERATED_FILE)

.PHONY: clean all

$(GENERATED_FILE): $(SLIDES)
	for file in $^; do cat $(BASE_DIR)/$$file; echo "\n---\n"; done > $@
