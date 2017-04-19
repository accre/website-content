###### Jobs: How can I delete many jobs at once? {#deletejobs} 

If you are using bash, the following
script shows how to delete all jobs between 10000 and 10010:

``` {.outline}
    for jobid in `seq 10000 10010`
    do
    scancel $jobid
    echo cancelling $jobid
    done
```
