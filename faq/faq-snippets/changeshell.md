###### Environment: How do I change my default shell? {#changeshell}

Once you log onto the cluster (`login.accre.vanderbilt.edu`) , type:
`rsh auth`. You are now on the authentication server. Type: `chsh`. You
will be prompted for password. Enter the new shell you want to use. For
bash, this is `/bin/bash`, for tcsh, `/bin/tcsh`. Type `exit` to log out
of auth and then wait 20 minutes or so for the new setting be propagated
throughout the cluster. Log onto the cluster again and you should see
the change.
