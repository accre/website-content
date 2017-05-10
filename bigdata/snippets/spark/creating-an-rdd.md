# Creating an RDD from a Text File 

Use the `textFile` method of the SparkContext `sc` 
to load in a file in the `/data`
directory of HDFS (note that `textFile` can also read from the local file 
system as well) and 
store it as a *Resilient Distributed Dataset* (RDD). 

For example, in the Scala REPL:

```scala
scala> val lines = sc.textFile("hdfs:///data/Spark_README.md")
lines: org.apache.spark.rdd.RDD[String] = hdfs:///data/Spark_README.md MapPartitionsRDD[5] at textFile at <console>:27
```

The REPL indicates that lines is now a `MapPartitionsRDD`. 
In the grand scheme of things, mapping to different partitions is the key 
to the map-reduce paradigm; instead of sending data to a single node and 
processing 
it in chunks, the program is sent to the node(s) where the data resides on 
disk and is executed in parallel fashion.
Pretty cool right?

---
 
*Note that `lines` is declared as `val` for value; in addition to being a 
strongly-typed language, Scala emphasizes functional programming and 
immutable state. Thus, values can be thought of as **immutable** variables.
Once a value is created, it's properties cannot be changed.*
