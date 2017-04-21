for tag in `grep -o "#[a-zA-Z\-_]\+" faq_toc.md`; do 
  echo faq-snippets/${tag//#/}.md
done
