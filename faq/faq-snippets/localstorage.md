###### Jobs: How do I use local storage on a node? {#localstorage} 

In some scenarios it may be advantageous to
read or write data to a compute node's local hard disk, rather than
to/from our parallel filesystem (`/home`, `/scratch`, and `/data` are all
stored on the parallel filesystem). One common example is if you will be
reading or writing to/from a file frequently. Each compute node has a
world-readable/writeable directory at `/tmp`. If you want to move files to
this local storage, we recommend creating a subdirectory at `/tmp` and
then copying data to it before launching a program that will read these
data. Note: a program must know where to find these data, so you
generally must provide an absolute path to the file from within your
program. Please be sure to clean up your data at the end of your job
(using the `mv` or `rm` commands). Below is an example of how this might be
done within a SLURM job:

``` {.outline}
#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --nodes=1
#SBATCH --mem=4G
#SBATCH --time=4:00:00
#SBATCH --output=myjob.txt 
localdir=/tmp/myjob_${SLURM_JOBID}
mkdir ${localdir} # create unique directory on compute node
cp mydata.txt ${localdir} # copy data to node
./run_my_prog # run program that reads/writes to/from local disk
rm ${localdir}/mydata.txt # remove data from local disk
mv ${localdir}/output.txt ./ # move results to working directory on GPFS
```
