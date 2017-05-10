# The Hardware

The current bigdata cluster is a test cluster comprised of commercial hardware.
To conform to Cloudera recommended configuration, three nodes are dedicated
to the management of the cluster:

- abd740
- abd741
- abd742

The computational *guts* of `bigdata` are the datanodes: 

- abd743 
- abd744 
- abd745 
- abd746 
- abd747 
- abd748

where MapReduce jobs actually take place. Each of these nodes have one 
250 GB drive reserved mainly
for the OS and software, but for mounting the Hadoop Distributed File System 
(HDFS), each node has 2 x 4 TB hard disk drives.
