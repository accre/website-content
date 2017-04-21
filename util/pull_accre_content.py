#!/usr/bin/env python

import argparse 
import requests
from bs4 import BeautifulSoup

parser = argparse.ArgumentParser(description='Pull div.pf-content from an \
    ACCRE webpage.')
parser.add_argument('url', type=str, help='source url')
parser.add_argument('path', type=str, help='target path')

args = parser.parse_args()
url = args.url 
path = args.path 

soup = BeautifulSoup(requests.get(url).text, 'lxml')

soup = soup.find('div', attrs={'class': 'pf-content'})

with open(path, 'wb') as f:
  f.write(soup.prettify('utf-8'))
