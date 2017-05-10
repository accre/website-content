# Copy/Move Data between Local Disk and HDFS 

Probably the most common workflow for new users is to `scp` some data to
`bigdata.accre.vanderbilt.edu` and then move that data to HDFS. The command
for doing that is:

```bash
hadoop fs -copyFromLocal \
  file:///scratch/$USER/some/data hdfs:///user/$USER/some/dir
```

or, equivalently:

```bash
hadoop fs -copyFromLocal some/data some/dir
```

The second option highlights the use of paths relative to the user's home 
directory in both the local and the Hadoop file systems.

---

We also have the option to use `-moveFromLocal` which will delete
the local source file once it is copied to HDFS. This command is useful if 
you have many large files that you don't want hanging around on the native 
file system on the cluster. One solution is to combine an `scp` command with a
remote `ssh` command:

```bash
for f in *.txt; do 
  scp $f bigdata:$f; 
  ssh bigdata "hadoop fs -moveFromLocal $f $f"; 
done
```

## HDFS to Local

Copying from HDFS to a local drive works in very much the same with with the 
analogous `hadoop fs` commands `-copyToLocal` and `-moveToLocal`.
