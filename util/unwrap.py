#!/usr/bin/env python
# coding: utf-8

""" Unroll lines wrapped with backslash """
import sys

filename = sys.argv[1] 

with open(filename, 'r') as f:
  lines = f.readlines()

with open(filename, 'w') as f:
  for line in lines:
    if line.endswith('\\\n'):
      outline = line[:-2]
    else:
      outline = line
    f.write(outline)
