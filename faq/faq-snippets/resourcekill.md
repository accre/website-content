###### Jobs: What happens if my job uses more resources than requested? {#resourcekill}

The job scheduler will automatically kill most jobs which
exceed the resources requested in the SBATCH script. For example, if you
specify a `walltime` of 4 hours and your job runs over that, the
scheduler will kill the job. The reason for this is that running jobs
which use more resources than requested may affect the scheduling and
running of other jobs. This is because the scheduler relies on SLURM
specifications (among other parameters) to determine on which nodes to
run jobs. Also read our [job scheduler policies](/?page_id=89) for more
information on killing jobs which are interfering with other jobs or the
system itself. When testing code or running code you are unfamiliar
with, you should more diligently monitor the resource consumption to
fine tune your SBATCH request. Specifying much more, e.g., `walltime`
or `mem`, than your job requires may delay its start time if the
requested resources are not immediately available. Therefore, you should
start somewhat conservatively, then reduce your resource specifications
once you've determined what you are really using, still always leaving a
buffer to ensure the job is covered. Learn more about how to request
resources and the SBATCH defaults [when you submit a
job](/?page_id=343). Learn how to [monitor and check the status of a
submitted job](/?page_id=361).
