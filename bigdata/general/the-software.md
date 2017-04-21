# The Software

Cloudera Manager is deployed on the cluster to coordinate job submission, with 
the following services running on each node:

- abd740
  * Cloudera Manager 
    + Alert Publisher
    + Event Server
    + Host Monitor
    + Service Monitor
  *  HBase Master
  *  Hive
    + Hiveserver2
    + Hive Gateway
  *  Hue Server
  *  Oozie Server
  *  Spark Gateway
  *  YARN (MR2 Included)
    + Resource Manager
    + Job History Server
  *  Zookeeper Server

---

## The Software

- abd741
  * HDFS NameNode
  * Hive
    + Hive Metastore Server
    + Hive Gateway
  * Spark Gateway
  * YARN (MR2 Included) Resource Manager
  * ZooKeeper Server

- abd742
  * HDFS SecondaryNameNode
  * Hive Gateway
  * Impala
    + Impala StateStore
    + Impala Catalog Server
  * Spark Gateway
  * ZooKeeper Server

