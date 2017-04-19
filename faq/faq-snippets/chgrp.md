###### Linux: How do I change the group associated with a file? {#chgrp}

You can change the group of a file if
you are the file's owner and you are in the group to which you are
trying to change the file. The command is:

```
    chgrp [options] group_name file_name
```

`-R`: recurse through subdirectories `-f`: suppress most error messages If
you want to submit a job from group other than your primary group,
please see [this FAQ](#multiplegroups). 
