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

with open(args.path, 'w') as f:
  # Wrap the TOC lines
  for line in header_lines:
    new_line = re.sub(r'-  ', "1. ", line)
    new_line = re.sub(r'\)\n','){style="font-size: medium;"}\n', new_line)
    f.write(new_line)

  f.write(''.join(other_lines))
