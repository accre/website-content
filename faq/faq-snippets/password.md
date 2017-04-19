###### Accounts: How do I change my ACCRE account password? {#password}

Please follow these steps:

1.  Log on to the cluster (`login.accre.vanderbilt.edu`) using your
    existing password. At this point you are simply logged on to a
    cluster gateway. Any changes to your account will need to be
    propogated to all of the compute nodes.
1.  Issue the command: `rsh auth`. Commands issued now (e.g., the
    `passwd` command below) will affect modifications to all of the
    nodes.
1.  To change your password, type the command `passwd`. The `passwd`
    program will prompt you to enter a new password. Please use a
    non-dictionary word (i.e., nonstandard words, combinations of
    letters and numbers). After you have changed your password, **please
    allow approximately 20 minutes for the change to be propogated to
    all of the nodes**.
1.  To disconnect from `auth`, type `exit`. You will still be logged
    into your account. You may either continue working on the cluster or
    log out.

**See also our tutorials on [getting started on the
cluster](/?page_id=303).**
