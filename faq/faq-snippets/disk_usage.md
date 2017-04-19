###### Disk space: Determining Disk Space Usage and Quotas {#disk_usage}

As noted in the [cluster disk policies](/?page_id=91), you have both
soft and hard limits on both your home and scratch directories. To help
keep the system running smoothly, you should be in the habit of checking
your usage level, especially since hard quota limits are definitive and,
due to potential filesystem problems, we may have to either kill jobs or
place temporary limits on accounts which exceed their soft limit. Please
read our [cluster disk policies](/?page_id=91) to understand disk space
quotas and the FAQ on how to increase your available diskspace by [using
scratch space](#scratch_disk), requesting a possible [temporary quota
increase](#tempquota), or [purchasing more
diskspace](/?page_id=67#purchase). To view your current usage and quota
levels, type the command:

``` {.outline}
accre_storage
```

For example:

[![accre_storage1](http://www.accre.vanderbilt.edu/wp-content/uploads/2017/02/accre_storage11-1024x147.jpg){.alignnone
.wp-image-3273 width="581"
height="84"}](http://www.accre.vanderbilt.edu/wp-content/uploads/2017/02/accre_storage11.jpg)

The left section shows information about your current disk usage on
`/home` and `/scratch`, while the right section shows your current file
count usage. If you are in a group that purchases additional space on
`/data`, you will see additional information below the `/scratch` line (see
example below). Note that the **Usage** column is your current disk
usage, the **Quota** column is a soft limit, while the **Limit** column
is a hard limit. Definitions for soft and hard limits can be found on
our [cluster disk policies](/?page_id=91) page. If you are exceeding
either your disk space or file count soft quota, the relevant line will
be colored yellow, as shown in the example below. Make sure you delete
(or compress) files as soon as possible in order to avoid disk I/O
errors once the grace period has expired. If a line is colored red, it
means you have either hit a hard quota limit, or your soft quota grace
period has expired; any attempts to create additional files in the
corresponding storage will result in I/O errors.

[![accre_storage2](http://www.accre.vanderbilt.edu/wp-content/uploads/2017/02/accre_storage21-1024x220.jpg){.alignnone
.wp-image-3274 width="581"
height="125"}](http://www.accre.vanderbilt.edu/wp-content/uploads/2017/02/accre_storage21.jpg)

Note that `/home` and `/scratch` are generally controlled with *user* or
*group* quotas, while `/data` (and occasionally `/scratch`) are controlled
with *fileset* quotas. A user or group quota is based on the user or
group owning a set of files, while fileset quotas are applied directly
on files within a parent directory. One instance in which this
distinction becomes important is when you are sharing files with a
collaborator or labmate. With user-based quotas, if you copy a file into
your colleague's home directory, the file will still count against your
quota if the file owner is not changed. You can check the owner of a
file by using the `ls -l` command. One other important detail about
quota is data replication. ACCRE currently has data replication set to
two for `/home` and `/data`. This means that the disk usage of a file stored
in `/home` or `/data` on the cluster will be approximately twice that of a
file outside the cluster. The `accre_storage` command shows you
disk usage without data replication, so the output of `du -sh`
(which shows you disk space of a directory or set of directories, and
includes data replication) will differ from the `accre_storage`
command. `ls -lh`, on the other hand, will show you file sizes
without considering data replication, so it will be consistent with the
output from `accre_storage`.

