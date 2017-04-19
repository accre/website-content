###### Jobs: What does job status *Deferred* mean? {#deferredjob}

In slurm
there is no "deferred" state. However, jobs may ask for resources that
cannot be provided, e.g., too much memory. In such cases, running the
command squeue and looking for your jobib, slurm will provide a short
explanation of why the job either cannot run, or is not running. Do
`squeue -u <username>` to see the explanation.
