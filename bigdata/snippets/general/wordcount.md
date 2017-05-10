# Wordcount 

Wordcount is the "hello world" of map-reduce jobs; the frequency of each word
in a given set of documents, or corpus, is counted, and finally, the list
of unique words is sorted by document frequency. The *map* step of this process
consists of teasing out each individual word from a document and emitting a 
tuple, (word, 1). In the *reduce* step, tuples are grouped together according 
to their primary key, which in this case is the word, and the values are summed
to get the total occurrences of each word. Finally, the records are sorted by
occurrence count.
