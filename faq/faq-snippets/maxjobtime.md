###### Jobs: What is the maximum allowed "wall clock time" I may specify? {#maxjobtime} 

The maximum allowed walltime is
**14 days**, or in **hh:mm:ss = 336:00:00**. Your job will not start if
you have specified a walltime greater than this. You may reduce the
walltime of an already submitted job [using `scontrol`](#editjobtime)
(slurm job control). In addition we ask that, except for a small number
of test jobs, jobs run at least 30 minutes and over an hour in length is
preferable. Our [job scheduler policies](/?page_id=89) explains more on
this subject. Also see [How to Submit Basic Jobs](/?page_id=343) for
other SBATCH specifications and how to deal with very short jobs.
