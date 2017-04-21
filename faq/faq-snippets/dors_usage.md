###### Disk space: My group has storage on DORS. How can I check our usage? {#dors_usage}

From any cluster gateway execute 

```{.outline}
mmlsquota -j <fileset name> —block-size auto dors
```

Typically, the fileset name
is the same as your group name but may not always be.
