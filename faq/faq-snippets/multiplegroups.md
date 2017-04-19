###### Jobs: If I belong to multiple groups, how can I define the group name under which my job is to run on the cluster? {#multiplegroups}

You can add the following line in your SBATCH
script: `#SBATCH --account=<mygroup>`. Here, `mygroup` is the group
name that you want the job to run under. To change group associated with
a file, please see [this FAQ](#chgrp).
