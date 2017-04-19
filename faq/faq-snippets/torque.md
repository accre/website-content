###### Jobs: How do I hold/release/delete a job? {#torque}

A user may place a USER hold upon any
job the user owns. To do that, type: `scontrol hold <jobId>`. To
release the held job, type: `scontrol release <jobId>`. Note that you
can only hold and release jobs that are pending (i.e. this will not work
for running jobs). User can also delete a queued/running job using the
command: `scontrol resume <jobId>`. To delete all the jobs owned by the
user, type: `scancel -u <userid>`. To cancel a job by
name, type: `scancel --name <jobName>`.
