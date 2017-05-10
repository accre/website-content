# Using the Spark Shell

Spark is written in Scala, and Spark distributions provide their own 
Scala-Spark REPL (Read Evaluate Print Loop), a command-line environment for
toying around with code snippets.

# Starting the REPL

Spark can run locally on a single machine on \\( n \\) nodes, it can run as a 
standalone Spark cluster, and it can run on top of YARN. If you're using
Spark locally, then to initialize the REPL:

```bash
$SPARK_HOME/bin/spark-shell
```

If you've connected to the BigData cluster through SFTP 
(via `ssh bigdata.accre.vanderbilt.edu`), you'll need
to start the REPL first:

```bash
spark-shell
```

and then specify that you're using YARN as the application Master:

```bash
$SPARK_HOME/bin/spark-shell --master=yarn
```

At this point, you should see Spark's splash screen and a Scala prompt:

```
[username@abd740 ~]$ spark-shell --master=yarn 
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel).
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 1.6.0
      /_/

Using Scala version 2.10.5 (Java HotSpot(TM) 64-Bit Server VM, Java 1.7.0_67)
Type in expressions to have them evaluated.
Type :help for more information.
Spark context available as sc (master = yarn-client, app id = application_1486918126261_0072).
SQL context available as sqlContext.
```

These last two lines indicate the entry points for using the Spark API, the
Spark context `sc` and the SQL context `sqlContext`. We won't be using the 
SQL context in this tutorial but we will invoke the Spark context, which we
can examine by simply typing `sc` into the Scala REPL:

```
scala> sc
res0: org.apache.spark.SparkContext = org.apache.spark.SparkContext@49d98c3e

scala> 
```
