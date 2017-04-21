#!/usr/bin/env python
from __future__ import print_function

import sys
import re
import os


src_path = sys.argv[1]

with open(src_path, 'r') as f:
  # Assume heading is first line
  heading = f.readline()


# From pandoc documenation
# A header without an explicitly specified identifier will be automatically 
# assigned a unique identifier based on the header text. To derive the 
# identifier from the header text,
# 
#     Remove all formatting, links, etc.
#     Remove all footnotes.
#     Remove all punctuation, except underscores, hyphens, and periods.
#     Replace all spaces and newlines with hyphens.
#     Convert all alphabetic characters to lowercase.
#     Remove everything up to the first letter (identifiers may not begin 
#	with a number or punctuation mark).
#     If nothing is left after this, use the identifier section.


#     Remove all formatting, links, etc.

#     Remove all footnotes.



# Remove all punctuation, except underscores, hyphens, and periods.
heading = re.sub(r'[^a-zA-Z0-9_\-\.\s]','', heading)
print(heading)

# Replace all spaces and newlines with hyphens.
heading = re.sub(r'\s+','-', heading.rstrip())
print(heading)

# Convert all alphabetic characters to lowercase.
heading = heading.lower()
print(heading)

# Remove everything up to the first letter (identifiers may not begin 
# with a number or punctuation mark).
heading = re.sub(r'^[^a-z]+', '', heading)
print(heading)

# If nothing is left after this, use the identifier section.
if heading == '':
  heading = 'section'
print(heading)



# Rename the file
dirname= os.path.dirname(src_path)
os.rename(src_path, os.path.join(dirname, heading + '.md'))
