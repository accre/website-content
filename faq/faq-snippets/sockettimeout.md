###### Jobs: a SLURM command fails with a socket timeout message. What's the problem? {#sockettimeout}

Occasionally
when you attempt to run a SLURM command (e.g. `sbatch`, `salloc`, `squeue`)
the command may hang for an extended period of time before failing with
the following message:

``` {.outline}
error: slurm_receive_msg: Socket timed out on send/recv operation
error: Batch job submission failed: Socket timed out on send/recv operation
```

This error results when the SLURM controller is under a high amount of
stress. Avoiding this error requires all cluster users to play nice and
follow cluster etiquette policies. Specifically, all cluster users are
encouraged to 

1. submit a large number (&gt;100) of similar jobs as job
arrays (see our SLURM documentation page for examples), and 
1. avoid submitting a large number (&gt;100) of short jobs (&lt; 30 minutes). 
Job

arrays reduce the load on the scheduler because SLURM only attempts to
schedule the entire array once, rather than every element within the
array independently. Short jobs produce more "churn" within the job
scheduler as it works to allocate, de-allocate, and re-allocate
resources at a rapid pace. If you are running a lot of short jobs,
please try to bundle multiple jobs together into a single job to put
less stress on the scheduler. The socket timeout error message is
generally intermittent, so if you wait a few minutes and try your SLURM
command again it may complete immediately.
