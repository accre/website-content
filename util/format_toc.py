#!/usr/bin/env python

import argparse
from itertools import takewhile, dropwhile
import re


parser = argparse.ArgumentParser(description='Add formatting to toc contents \
    of markdown file.')
parser.add_argument('path', type=str, help='target path')
args = parser.parse_args()

with open(args.path, 'r') as f:
  lines = f.readlines()

condition = lambda line: len(line.strip()) > 0
header_lines = takewhile(condition, lines)
other_lines = dropwhile(condition, lines)
format_str = '{style="font-size: medium;"}'

# Wrap the TOC lines
re_end_header = re.compile(r'-(\s+.*\(#.+\))(\n)')
replace_str = r'1.\1{style="font-size: medium;"}\2'

with open(args.path, 'w') as f:
  new_line = re_end_header.sub(replace_str, ''.join(header_lines))

  f.write(new_line)

  f.write(''.join(other_lines))
