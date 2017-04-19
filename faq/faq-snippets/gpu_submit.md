###### GPU: How do I request a gpu node? {#gpu_submit}

Currently, you must
belong to a "GPU" group, such as `nbody_gpu` to gain access to one or
more gpu nodes. Use the appropriate SBATCH command to submit your job
and tell SLURM you want a GPU node. For example: `#SBATCH -p maxwell`
This will place your job on a node with NVIDIA Maxwell Titan X GPU
cards. More details about submitting GPU jobs [can be found by clicking
here.](http://www.accre.vanderbilt.edu/?page_id=2154#gpujobs)
