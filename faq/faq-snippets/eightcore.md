
###### Jobs: How do I request an 8-core node for exclusive usage? {#eightcore} 

To request an 8-core node
exclusively, your can now use: 

```{.outline}
#SBATCH -n 8 
#SBATCH --constraint="eight"` 
```

in your job submission script. If the job does not
require exclusive access to the node (it just needs 8 cores), you can
still use: 
```{.outline}
#SBATCH -n 8
```
Note that in this case, the job can be assigned
to an 8-core node (exclusively) or a 12-core node that is shared with
other jobs. You can do something similar for the 12-core and 16-cores
compute nodes.

