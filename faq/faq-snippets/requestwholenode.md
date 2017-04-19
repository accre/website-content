###### Jobs: How do I request all the processor cores in a node? {#requestwholenode} 

Since the cluster has some nodes
with 8 cores (2 x quad-core processors) and some with 12 cores (2 x
hex-core processors) there is no way to generically request all the
cores in a node. You can control whether your job lands on a 8-core or
12-core node; however, there is no `SBATCH` directive which effectively
says, "Give me all the cores in the node no matter how many there are."
If your SBATCH script has `SBATCH -n 8` asking for 8 cores, your job
could land on either an 8 or 12 core node; including the attribute
`eight` will ensure your job is run on a 8-core node (see the next FAQ).
If your SBATCH script has `SBATCH -n 12` your job will only land on a 12
core node. However, this might increase your wait time in the queue as
there are currently more 8-core nodes than 12-core nodes in the cluster.
