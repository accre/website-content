# Copy/Move Data on HDFS

The `hadoop fs` commands also have analogues for the \*nix commands `mv`, `cp`,
`mkdir`, `rm`, `rmdir, `ls`, `chmod`, `chown` and many other whose use is
very similar to the \*nix versions.

--

## Move Data between different Hadoop File Systems

When moving data between HDFS and a non-HDFS filesystem, 
all the distributed files have to gather at a single node
at some point along the way, a *many-to-one* or *one-to-many* model.
But moving data between HDFS instances can be greatly accelerated since 
HDFS file blocks only reside on (typically) 3 
different nodes within a cluster; 
thus, this model is "few-to-few", and Hadoop provides the `DistCp` 
("distributed copy") utility for just such applications.

---

## HDFS to HDFS

Passing data from one HDFS cluster to the next if fairly vanilla:

```bash
hadoop distcp hdfs://another-hdfs-host:8020/foo/bar \
  hdfs://abd740:8020/bar/foo
```

This could be useful if you have collaborators running a Hadoop cluster who'd 
like to share their data with you. 

---

### AWS S3 to HDFS

Copying to and from Amazon's S3 (Simple Storage Service) storage is 
also supported by `distcp`. 
To use AWS (Amazon Web Services), a user needs to have credentials. Getting 
credentialed is a slightly tedious but well-documented process that warrants
no further explanation here. Instead, I assume that you have credentials
stored in the file `~/.aws/credentials` on node `abd740`.

Your AWS credentials need to be passed as command-line arguments to distcp,
and I've found that a convenient and somewhat conventional way is to simply 
set the credentials as environment variables.
I've factored out setting these credentials into it's own script, since
setting these environment variables comes up fairly often: 

```bash
#!/bin/bash
# ~/.aws/set_credentials.sh

export $(cat ~/.aws/credentials | grep -v "^\[" | awk '{print toupper($1)$2$3 }')

```

--

The `distcp` invocation can also be stored in a script:

```bash
#!/bin/bash

. ~/.aws/set_credentials.sh

hadoop distcp \
-Dfs.s3n.awsAccessKeyId=$AWS_ACCESS_KEY_ID \
-Dfs.s3n.awsSecretAccessKey=$AWS_SECRET_ACCESS_KEY \
s3n://datasets.elasticmapreduce/ngrams/books/20090715/eng-us-all/ \
hdfs:///user/$USER/eng-us-all
```

*Note that `s3`, `s3n`, `s3a` are all distinct 
specifications, and you should modify
your java `-D` options according to the data source.*
