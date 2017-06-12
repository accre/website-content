class: center, middle

# Introduction to Using Spark on the Big Data Cluster

---

# Getting Help

- Submit a ticket at 
- Join the accre-forum Slack team!
  - https://accre-forum.slack.com/signup
  - Use your Vanderbilt email address to register
  - Join the `#bigdata` channel to communicate and collaborate
- Check out our GitHub organization at [github.com/bigdata-vandy](https://github.com/bigdata-vandy)
- Check out our blog at [bigdata-vandy.github.io](https://bigdata-vandy.github.io/)
- Schedule a meeting for your research group

---

class: center, middle

# The Hadoop Ecosystem

![hadoop-ecosystem](../hadoop-ecosystem.png)

---

class: center, middle

# The Hadoop Ecosystem

![periodic](../periodic_table_of_hadoop.png)


---

# How is Big Data different from HPC?

Industry - jobs no longer compute bound 

Who is a good candidate?


---
class: center, middle

# Divergent Ecosystems

![divergent-ecosystems](../divergent-ecosystems.png)

Dan Reed, “Clouds, Big Data, and the Future of Computing,” CASC Fall 2015 Meeting, Washington, D.C.


---

# Test cluster 1.0

Initial deployment for testing, prototyping, and benchmarking only, using recycled hardware

- 3 management nodes
  - HDFS primary and secondary name nodes, YARN resource manager, etc 8 CPU cores per node, 92 GB RAM
- 6 data nodes
  - HDFS data nodes
  - 8 TB per node (48 TB total raw capacity; 16 TB usable) 8 CPU cores per node, 92 GB RAM
  - Available for use this summer!
Hardware purchase on the horizon, production environment will be deployed in Fall 2017
Production environment will be tailored to the needs of Vanderbilt researchers

---

# Test cluster 2.0 

Initial deployment for testing, prototyping, and benchmarking only, using recycled hardware

- 4 management nodes
  - HDFS primary and secondary name nodes, YARN resource manager, etc 8 CPU cores per node, 92 GB RAM
- 6 data nodes
  - HDFS data nodes
  - 8 TB per node (48 TB total raw capacity; 16 TB usable) 16 CPU cores per node, 512 GB RAM
  - Available for use this fall!

Production environment will be tailored to the needs of Vanderbilt researchers

---

# Anatomy of the ACCRE Big Data test cluster

The brains:
- 3 management nodes
  * Cloudera Manager 
  *  YARN (MR2 Included)
  *  Spark (and Spark2)
  *  HBase
  *  Hive
  *  Hue
  *  Impala
  *  Oozie
  *  Zookeeper

The brawn: 
- 6 datanodes
  - 250 GB drive reserved for the OS
  - 2 x 4 TB hard disk drives for HDFS

---

# Overview of Cloudera Services

| Service          | Description 
|:-----------------|:------------
| HDFS             | Hadoop FileSystem - replicated, partitioned data 
| YARN             | Yet Another Resource Negotiator 
| MapReduce 2      | MapReduce jobs running on top of YARN 
| Spark            | MapReduce-like + cacheing 
| Oozie            | Web app for scheduling Hadoop jobs 
| Hue              | User interface for constructing Jobs 
| Hive             | ETL transformations expressed as SQL
| Impala           | Interactive SQL 
| HBase            | Random, realtime read/write access to distributed big data store
| Pig              | High-level language for expressing data analysis programs 
| Solr             | Text search engine supporting free form queries 

---

# Technologies for this Presentation 

| Service          | Function 
|:-----------------|:------------
| HDFS             | Store data in a distributed/replicated manner
| YARN             | Schedule and run jobs, acquiring resources as necessary
| MapReduce 2      | Transform and aggregate data in parallel
| Spark            | Perform map-reduce with data persistence in memory + much, much more

---

# Interacting with HDFS  

The HDFS filesystem uses Unix-like commands for 
common operations, prefixed with the `hadoop fs` command, e.g.:

```
$ hadoop fs -ls /
Found 5 items
drwxr-xr-x   - hdfs  supergroup          0 2017-04-19 13:47 /data
drwxr-xr-x   - hbase hbase               0 2017-04-02 21:09 /hbase
drwxrwxr-x   - solr  solr                0 2017-02-24 17:20 /solr
drwxrwxrwx   - hdfs  supergroup          0 2017-05-06 00:26 /tmp
drwxr-xr-x   - hdfs  supergroup          0 2017-02-17 12:14 /user
```
--

```
$ hadoop fs -ls /data
Found 9 items
-rw-r--r--   3 hdfs    supergroup       3359 2017-02-14 09:57 /data/Spark_README.md
drwxr-xr-x   - hdfs    supergroup          0 2017-03-06 16:25 /data/babs
drwxr-xr-x   - hdfs    supergroup          0 2017-03-06 11:52 /data/capitalbikeshare-data
drwxr-xr-x   - hdfs    supergroup          0 2017-03-06 12:10 /data/citibike-tripdata
drwxr-xr-x   - hdfs    supergroup          0 2017-02-14 21:10 /data/google-ngrams
-rw-r--r--   3 hdfs    supergroup  274188932 2017-04-19 13:47 /data/hadoop-2.5.0-cdh5.2.0.tar.gz
drwxr-xr-x   - hdfs    supergroup          0 2017-01-18 19:06 /data/nyc-tlc
drwxr-xr-x   - hdfs    supergroup          0 2016-12-21 15:14 /data/stack-archives
```

---

# HDFS

Arguments for the [`hadoop fs` command](https://hadoop.apache.org/docs/r2.7.1/hadoop-project-dist/hadoop-common/FileSystemShell.html#createSnapshot):

|                 |                  |            |                  |            |
|:----------------|:-----------------|:-----------|:-----------------|:-----------|:--------
| `appendToFile`  | `count`          | `find`     | `mkdir`          | `rmr`      | `touchz`                
| `cat`           | `cp`             | `get`      | `moveFromLocal`  | `setfacl`  | `truncate`            
| `checksum`      | `createSnapshot` | `getfacl`  | `moveToLocal`    | `setfattr` | `usage`
| `chgrp`         | `deleteSnapshot` | `getfattr` | `mv`             | `setrep`   |            
| `chmod`         | `df`             | `getmerge` | `put`            | `stat`     |           
| `chown`         | `du`             | `help`     | `renameSnapshot` | `tail`     |           
| `copyFromLocal` | `dus`            | `ls`       | `rm`             | `test`     |             
| `copyToLocal`   | `expunge`        | `lsr`      | `rmdir`          | `text`     |           

---

class: center, middle

# Apache Hadoop YARN

![apache-hadoop-yarn](../apache-hadoop-yarn.png)

--

*YARN effectively fills the same role as SLURM*

---

# What is Spark?

> Apache Spark is a fast and general-purpose cluster computing system. 
> It provides high-level APIs in Java, Scala, Python and R, 
> and an optimized engine that supports general execution graphs. 

![spark-family-tree](../spark-family-tree.svg)

Spark can run in:
- Standalone mode, e.g. [Spark on GPFS](https://bigdata-vandy.github.io/spark/slurm/2017/02/08/using-spark-with-gpfs.html)
- on YARN
- on Mesos

---

# How to execute Spark code

- Interactive jobs: Spark REPL, a command line tool to "Read Evaluate Print Loop" Spark/Scala code
  - In general: `$SPARK_HOME/bin/spark-shell`
  - On the cluster: `spark-shell` (v. 1.6.0) or `spark2-shell` (v. 2.0.0)
- Batch jobs
  - In general: `$SPARK_HOME/bin/spark-submit`
  - On the cluster: `spark-submit` (v. 1.6.0) or `spark2-submit` (v. 2.0.0)

On the `bigdata` cluster, YARN automatically distributes job. 

---

# Spark higher-level tools 

| Library         | Function
|:----------------|:---------
| Spark SQL       | SQL and structured data processing
| MLlib           | machine learning
| GraphX          | graph processing
| Spark Streaming | real-time analysis of data streams


---

# Wordcount in Spark

This content is adapted slightly from the 
[Spark getting started guide](http://spark.apache.org/docs/latest/quick-start.html). 

<iframe width="100%" height="450" 
src="http://spark.apache.org/docs/latest/quick-start.html"></iframe>

---

## Read in a text file using the SparkContext

- The SparkContext `sc` is the entry point for Spark's data structures.  
- The value `textFile` becomes an RDD (Resilient Distributed Dataset)

```scala
val textFile = sc.textFile("spark_read_me.txt")
```

- More about RDDs

- The RDD cannot be viewed directly in the REPL (in practice it will be distributed across many nodes!!). 
Thus, in order to view all the data, we have to gather the data at a single node using `collect`. 
A summary of RDD functions can be found 
[here](http://spark.apache.org/docs/latest/programming-guide.html#rdd-operations).


```scala
(textFile collect) foreach println
```

    # Apache Spark
    
    Spark is a fast and general cluster computing system for Big Data. It provides
    high-level APIs in Scala, Java, Python, and R, and an optimized engine that
    supports general computation graphs for data analysis. It also supports a
    rich set of higher-level tools including Spark SQL for SQL and DataFrames,
    MLlib for machine learning, GraphX for graph processing,
    and Spark Streaming for stream processing.
    
    <http://spark.apache.org/>

---


## Filter lines containing Spark

- The RDD (and Scala collections) support filtering

```scala
val linesWithSpark = textFile.filter(line => line.contains("Spark"))
(linesWithSpark collect) foreach println
```

    # Apache Spark
    Spark is a fast and general cluster computing system for Big Data. It provides
    rich set of higher-level tools including Spark SQL for SQL and DataFrames,
    and Spark Streaming for stream processing.
    You can find the latest Spark documentation, including a programming
    ## Building Spark
    Spark is built using [Apache Maven](http://maven.apache.org/).
    To build Spark and its example programs, run:
    ["Building Spark"](http://spark.apache.org/docs/latest/building-spark.html).
    The easiest way to start using Spark is through the Scala shell:
    Spark also comes with several sample programs in the `examples` directory.
        ./bin/run-example SparkPi
        MASTER=spark://host:7077 ./bin/run-example SparkPi
    Testing first requires [building Spark](#building-spark). Once Spark is built, tests
    Spark uses the Hadoop core library to talk to HDFS and other Hadoop-supported
    Hadoop, you must build Spark against the same version that your cluster runs.
    in the online documentation for an overview on how to configure Spark.


---

## Map lines from `String` to `Array[String]`
The RDD (and Scala collections) support mapping. For example:


```scala
val foo = "a line with Spark"
foo.split(" ") 
```

    Array(a, line, with, Spark)

--

### Scala Bonus!
The dot operator can be omitted in Scala, so that splitting operation can be written as:


```scala
foo split (" ")
```

    Array(a, line, with, Spark)

---

# Let's split each line

```scala
val arraysWithSpark = linesWithSpark.map(line => line split(" "))
val wordsPerLine = arraysWithSpark map (a => a.size)
(wordsPerLine collect) foreach println
```

    3
    14
    12
    6
    10
    3
    6
    .
    .
    .


---

## Counting words per line

- Spark and Scala allow for chaining operations together. Thus, we can just write:


```scala
val wordsPerLine = linesWithSpark.map(line => line split(" ")).map(a => a.size)
(wordsPerLine collect) foreach println
```

    3
    14
    12
    6
    10
    3
    6
    .
    .
    .

---

## Counting words per line


- Equivalently:

```scala
val wordsPerLine = linesWithSpark map(_ split " ") map(_ size)
(wordsPerLine collect) foreach println
```

    3
    14
    12
    6
    10
    3
    6
    .
    .
    .

Here, Scala is smart enough to understand that the underscore implies that the 
map function is taking a single argument, thus avoiding the need for the 
`foo => foo split(" ")` pattern. 

*Scala Bonus! this pattern defines an anonymous function.*

---

## Counting total "Spark" occurrences with `flatMap`

If we wanted to count total occurrence of *Spark* we could filter our `Array`s 
from the previous step to keep only those words that match *Spark*. Since we 
don't actually care about which line contains occurrences of *Spark* but rather 
how many *Spark*s are in our entire document, we can consider all the individual 
words at once. Spark provides a mechanism to do this called `flatMap`.


```scala
val allSparkWords = linesWithSpark flatMap (line => line split " ")
(allSparkWords collect) foreach println
```

    #
    Apache
    Spark
    Spark
    is
    a
    fast
    and
    general
    cluster
    computing
    system
    for
    Big
    .
    .
    .

---

To get the Spark occurrences, simply filter:


```scala
val allSparkWords = linesWithSpark flatMap (_ split "\\s+") filter (_ == "Spark")
(allSparkWords collect) foreach println
```

    Spark
    Spark
    Spark
    Spark
    Spark
    Spark
    Spark
    Spark
      .
      .
      .

*Scala Bonus! `"\\s+"` is a regex that matches one or more consecutive whitespace characters.*

---

# Counting occurrences of each word

- The classic MapReduce example (as popularized by [Hadoop](http://hadoop.apache.org/))
- Split each line into words 
- Map each word into a word value *pair*, or `Tuple`, e.g. `(the, 100)`
  - First element is the *key* which serves as identifier 
  - Second element is the *value* which signifies that each word has occurred one time. 
  
Since each word is not unique, we need to group them 
together and count the occurrences per group. When we perform an *action* on 
an RDD, all the pairs with identical keys are sent to the same node and then 
we can aggregate these together. This is precisely what the `reduceByKey` 
function does:

```scala
val wordFrequencies = textFile flatMap (_ split ("\\s+") map (word => (word, 1))) reduceByKey (_ + _)
(wordFrequencies take 20) foreach println
```

    (package,1)
    (this,1)
    (Version"](http://spark.apache.org/docs/latest/building-spark.html#specifying-the-hadoop-version),1)
    (Because,1)
    (Python,2)
    (cluster.,1)
    (its,1)
    .
    .
    .


---

# Reduce

The argument to `reduceByKey` is a function describing how to combine values 
(which must have the same type, otherwise see `aggregateByKey`). To print the 
output, we've usen the `take` function to take the first 20 results. We can 
also use the aptly named `takeOrdered` function:

```scala
(wordFrequencies.takeOrdered(50)(Ordering[Int].reverse.on(_._2))) foreach println
```

    (,43)
    (the,21)
    (to,14)
    (Spark,13)
    (for,11)
    (and,10)
    (a,8)
    (##,8)
    (run,7)
    (is,6)
    (can,6)
    (on,5)
    (in,5)
    (of,5)
    (also,4)
    .
    .
    .

---
class: center, middle

# Under the Hood of MapReduce

![dagre](../dagre.svg)


---

# Spark DataFrames

- Analogous to data frames in R and Pandas
- Can be automatically created from CSV, Parquet, JSON lines files

```
val df: DataFrame = spark.read
    .option("header", true)
    .option("treatEmptyValuesAsNulls", true)
    .option("inferSchema", true)
    .csv(inputPaths: _*)

df.show()
```

---

# SQL queries on Spark DataFrames

df.select("pickup_longitude", "pickup_latitude",
    "dropoff_longitude", "dropoff_latitude")

---

# Resources

- Blog
- [GitHub: bigdata-vandy](https://github.com/bigdata-vandy)) 
- Sumit a HelpDesk ticket

---

# Pro Tips

1. Read the docs!

--

1. Find example code!!

--

1. Use a good IDE!!!
  - type-checking
  - syntax highlighting
  - tab-completion
  - suggestions: [IntelliJ IDEA CE](https://www.jetbrains.com/idea/download) and [PyCharm CE](https://www.jetbrains.com/pycharm/download)
