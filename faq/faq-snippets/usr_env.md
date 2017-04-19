###### How do I make sure that my perl/python script is using the latest version available on the cluster? {#usr_env}

First, add the appropriate
package to your environment (e.g. your `.bashrc`/`.cshrc` file) with
command:
```{.outline}
setpkgs -a PACKAGE_NAME
```

Then, use the following line:
```{.outline}
#!/usr/bin/env python (or perl)
```

as the first line of your script. This automatically detects the path to
the added perl/python package and use that version as the interpreter of
your script.
