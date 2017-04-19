filename=faq_content.md

echo "" > $filename

for tag in `grep -o "#[a-zA-Z\-_]\+" faq_toc.md`; do 
  echo --- >> $filename 
  echo >> $filename
  cat faq-snippets/${tag//#/}.md >> $filename
  echo >> $filename
  echo "[Top of Page](#top)" >> $filename
  echo >> $filename
done

cat faq_toc.md $filename > faq.md
pandoc --section-divs faq.md -o faq.html
