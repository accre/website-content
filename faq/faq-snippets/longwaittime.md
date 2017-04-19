###### Jobs: Why is my eligible job waiting so long in the *PENDING* state? {#longwaittime}

There are several things you should check to
understand your wait time in the queue. See [tips on checking the
status of a submitted job](/?page_id=343).

-   **Make sure you have requested an allowed set of resources.** Check
    your SBATCH script against both the [available
    nodes](/?page_id=63#nodes) in the cluster and our [job scheduler
    policies](/?page_id=89). You can also check on the resources
    requested with the command: **scontrol show job** *job_number*
-   Check your group's current usage by typing 
    `qSummary -g group_name`. Compare that to your group's bursting limits by
    running `showLimits -g group_name`. If your group's current
    usage is close to or equal to its bursting limits, this could be
    causing delays. Details about both of these commands can be found
    [by clicking on this
    link](http://www.accre.vanderbilt.edu/?page_id=2154#accrecommands).
-   Check overall cluster utilization with the
    [`SlurmActive`](http://www.accre.vanderbilt.edu/?page_id=2154#SlurmActive)
    command.
-   Check the queue and current usage on the cluster. It could be the
    particular resources your jobs need may be heavily utilized, even if
    the entire cluster is not. You can check the total usage of the
    cluster with the command `squeue`. You can also see current and
    past [utilization](/?page_id=767) levels on this website.
-   Your account or group account may be running over its fairshare.
    This means when the cluster is very busy, other jobs from accounts
    which are under fairshare may be assigned higher priority and may
    jump ahead of your job in the eligible queue. Use the 
    
    ```{.outline}
    sacctmgr show associations Accounts=account_name format=account%30,user%30,fairshare,grpcpus,grpmem
    ``` 
    
    command to check your fairshare.

If you still do not understand why your jobs are not starting more
quickly, please submit an [RT ticket](/?page_id=369).
