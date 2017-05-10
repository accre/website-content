
# Spark word count tutorial
This Apache-Toree Jupyter notebook demonstrates performing word count with [Spark](http://spark.apache.org/docs/latest/index.html) (and [Scala](http://www.scala-lang.org/)). The content is adapted slightly from the [Spark getting started guide](http://spark.apache.org/docs/latest/quick-start.html). Users can execute the same commands in the Spark REPL, which is launched by running in bash 
```bash
$SPARK_HOME/bin/spark-shell
```
where the environment variable `$SPARK_HOME` points to an installation of Spark.


```scala
%%html
<iframe width="100%" height="550" 
src="http://spark.apache.org/docs/latest/quick-start.html"></iframe>
```




<iframe width="100%" height="550" 
src="http://spark.apache.org/docs/latest/quick-start.html"></iframe>



## Read in a text file using the SparkContext
The SparkContext ```sc``` is automatically instantiated by the Apache-Toree notebook.  In standalone Spark applications, the SparkContext must be manually instantiated. The value ```textFile``` becomes an RDD (Resilient Distributed Dataset)


```scala
val textFile = sc.textFile("spark_read_me.txt")
```

The RDD cannot be view directly in the notebook (in practice it will be distributed across many nodes!!). Thus, in order to view all the data, we have to gather the data at a single node using ```collect```. A summary of RDD functions can be found [here](http://spark.apache.org/docs/latest/programming-guide.html#rdd-operations).


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
    
    
    ## Online Documentation
    
    You can find the latest Spark documentation, including a programming
    guide, on the [project web page](http://spark.apache.org/documentation.html)
    and [project wiki](https://cwiki.apache.org/confluence/display/SPARK).
    This README file only contains basic setup instructions.
    
    ## Building Spark
    
    Spark is built using [Apache Maven](http://maven.apache.org/).
    To build Spark and its example programs, run:
    
        build/mvn -DskipTests clean package
    
    (You do not need to do this if you downloaded a pre-built package.)
    More detailed documentation is available from the project site, at
    ["Building Spark"](http://spark.apache.org/docs/latest/building-spark.html).
    
    ## Interactive Scala Shell
    
    The easiest way to start using Spark is through the Scala shell:
    
        ./bin/spark-shell
    
    Try the following command, which should return 1000:
    
        scala> sc.parallelize(1 to 1000).count()
    
    ## Interactive Python Shell
    
    Alternatively, if you prefer Python, you can use the Python shell:
    
        ./bin/pyspark
    
    And run the following command, which should also return 1000:
    
        >>> sc.parallelize(range(1000)).count()
    
    ## Example Programs
    
    Spark also comes with several sample programs in the `examples` directory.
    To run one of them, use `./bin/run-example <class> [params]`. For example:
    
        ./bin/run-example SparkPi
    
    will run the Pi example locally.
    
    You can set the MASTER environment variable when running examples to submit
    examples to a cluster. This can be a mesos:// or spark:// URL,
    "yarn" to run on YARN, and "local" to run
    locally with one thread, or "local[N]" to run locally with N threads. You
    can also use an abbreviated class name if the class is in the `examples`
    package. For instance:
    
        MASTER=spark://host:7077 ./bin/run-example SparkPi
    
    Many of the example programs print usage help if no params are given.
    
    ## Running Tests
    
    Testing first requires [building Spark](#building-spark). Once Spark is built, tests
    can be run using:
    
        ./dev/run-tests
    
    Please see the guidance on how to
    [run tests for a module, or individual tests](https://cwiki.apache.org/confluence/display/SPARK/Useful+Developer+Tools).
    
    ## A Note About Hadoop Versions
    
    Spark uses the Hadoop core library to talk to HDFS and other Hadoop-supported
    storage systems. Because the protocols have changed in different versions of
    Hadoop, you must build Spark against the same version that your cluster runs.
    
    Please refer to the build documentation at
    ["Specifying the Hadoop Version"](http://spark.apache.org/docs/latest/building-spark.html#specifying-the-hadoop-version)
    for detailed guidance on building for a particular distribution of Hadoop, including
    building for particular Hive and Hive Thriftserver distributions.
    
    ## Configuration
    
    Please refer to the [Configuration Guide](http://spark.apache.org/docs/latest/configuration.html)
    in the online documentation for an overview on how to configure Spark.


## Filter lines containing *Spark*
The RDD (and Scala collections) support filtering.


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


## Map lines from String to Array[String]
The RDD (and Scala collections) support mapping. For example:


```scala
val foo = "a line with Spark"
foo.split(" ") 
```




    Array(a, line, with, Spark)



### Scala Bonus!
The dot operator can be omitted in Scala, so that splitting operation can be written as:


```scala
foo split (" ")
```




    Array(a, line, with, Spark)



Here, we've split the line (of type `String`) into an `Array` of `String`s by splitting the original line on whitespace (" "). We'll consider each element of the 


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
    8
    2
    12
    11
    6
    7
    10
    13
    13
    12


## Counting words per line
Spark and Scala allow for chaining operations together. Thus, we can just write:


```scala
val wordsPerLine = linesWithSpark.map(line => line split(" ")).
  map(a => a.size)
(wordsPerLine collect) foreach println
```

    3
    14
    12
    6
    10
    3
    6
    8
    2
    12
    11
    6
    7
    10
    13
    13
    12


Or equivalently


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
    8
    2
    12
    11
    6
    7
    10
    13
    13
    12


Here, Scala is smart enough to understand that the underscore implies that the map function is taking a single argument, thus avoiding the need for the ```foo => foo split(" ")``` pattern. (Scala Bonus! this pattern defines an anonymous function.)

---

# Counting total *Spark* occurrences with `flatMap`

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
    Data.
    It
    provides
    rich
    set
    of
    higher-level
    tools
    including
    Spark
    SQL
    for
    SQL
    and
    DataFrames,
    and
    Spark
    Streaming
    for
    stream
    processing.
    You
    can
    find
    the
    latest
    Spark
    documentation,
    including
    a
    programming
    ##
    Building
    Spark
    Spark
    is
    built
    using
    [Apache
    Maven](http://maven.apache.org/).
    To
    build
    Spark
    and
    its
    example
    programs,
    run:
    ["Building
    Spark"](http://spark.apache.org/docs/latest/building-spark.html).
    The
    easiest
    way
    to
    start
    using
    Spark
    is
    through
    the
    Scala
    shell:
    Spark
    also
    comes
    with
    several
    sample
    programs
    in
    the
    `examples`
    directory.
    
    
    
    
    ./bin/run-example
    SparkPi
    
    
    
    
    MASTER=spark://host:7077
    ./bin/run-example
    SparkPi
    Testing
    first
    requires
    [building
    Spark](#building-spark).
    Once
    Spark
    is
    built,
    tests
    Spark
    uses
    the
    Hadoop
    core
    library
    to
    talk
    to
    HDFS
    and
    other
    Hadoop-supported
    Hadoop,
    you
    must
    build
    Spark
    against
    the
    same
    version
    that
    your
    cluster
    runs.
    in
    the
    online
    documentation
    for
    an
    overview
    on
    how
    to
    configure
    Spark.


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
    Spark
    Spark
    Spark
    Spark
    Spark


Scala Bonus! `"\\s+"` is a regex that matches one or more consecutive whitespace characters.

## Spark supports *actions*
Actions return a value to the driver program after running a computation on the dataset. A common action is `count`.


```scala
val totalSparks = allSparkWords count ()
println(totalSparks)
```

    13


## Counting occurrences for each word
This is the classic MapReduce (as popularized by [Hadoop](http://hadoop.apache.org/)) example. We split each line into words and before and map each word into a word value *pair* (aka *tuple*). The first element of the pair is the *key* which serves as identifier. The second element of the pair is the value `1` which signifies that each word has occurred one time. Since each word is not unique, we need to group them together and count the occurrences per group. When we perform an *action* on an RDD, all the pairs with identical keys are sent to the same node and then we can aggregate these together. This is precisely what the `reduceByKey` function does:


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
    ([run,1)
    (general,2)
    (have,1)
    (pre-built,1)
    (YARN,,1)
    (locally,2)
    (changed,1)
    (locally.,1)
    (sc.parallelize(1,1)
    (only,1)
    (several,1)
    (This,2)
    (basic,1)


The argument to `reduceByKey` is a function describing how to combine values (which must have the same type, otherwise see `aggregateByKey`). To print the output, we've usen the `take` function to take the first 20 results. We can also use the aptly named `takeOrdered` function:


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
    (if,4)
    (you,4)
    (Please,3)
    (use,3)
    (documentation,3)
    (build,3)
    (with,3)
    (Hadoop,3)
    (example,3)
    (or,3)
    (You,3)
    (including,3)
    (an,3)
    (Hadoop,,2)
    (command,,2)
    (This,2)
    (cluster,2)
    (Scala,2)
    (./bin/run-example,2)
    (Hive,2)
    ([project,2)
    (general,2)
    (be,2)
    (It,2)
    (1000:,2)
    (following,2)
    (For,2)
    (SparkPi,2)
    (set,2)
    (To,2)
    (should,2)
    (do,2)
    (tests,2)
    (which,2)
    (class,2)

