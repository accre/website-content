###### Disk space: Using scratch disk space {#scratch_disk}

You have disk and file allocations available for your use on
both your home directory (which is backed up) and on scratch disk space
(which is not backed up). To take advantage of your scratch disk space,
simply `cd` to that filesystem and create your personal directory. For
example:

``` {.outline}
cd /scratch
mkdir vunetid
chmod 700 vunetid
cd vunetid
```

where vunetid is your unique VUNetID, which is also your ACCRE user id.
If you are unsure what your VUNetID is, simply type `whoami` while
logged into the cluster to find out. Note that the `chmod 700`
command is needed to set the appropriate permissions on your scratch
directory so that only you can access it. Note that some ACCRE groups
also have their own private shared group `/scratch` directories.
