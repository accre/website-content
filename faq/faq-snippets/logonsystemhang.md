###### Connectivity: I cannot connect to the cluster, am experiencing intermittent connectivity to the cluster, or the system hangs upon log on. What should I do? {#logonsystemhang}  

If you
are normally able to connect and suddenly cannot, let us know via
[Request Tracker](/?page_id=369). Please
provide as much information about the issue as possible including any
useful output to your screen. Besides
occasional network problems, there are a number of possible causes for
sluggish to zero connectivity. Please read the following to help
self-diagnose before submitting a help desk ticket so we are better able
to assist you:

-   You may connect to the cluster only via a Secure Shell (**SSH**)
    client. For more information go to [Logging on to the
    Cluster](/?page_id=326).
-   If you see the following error when trying to connect: `ssh: connect
    to host login.accre.vanderbilt.edu port 22: Operation timed out` 
    it
    means the gateway you're trying to connect to is unreachable.The
    cluster has roughly 20 x86 gateway machines (See 
    [node configuration](/?page_id=63#nodes) ). There are several reasons why
    we have multiple gateways of each architecture. For example, this
    distributes the user load across many login gateways. Another main
    reason is to protect against an unreachable gateway preventing a
    connection to the cluster.However, even with this backup system in
    place it is still possible when you ssh to
    `login.accre.vanderbilt.edu` to get an error similar to the
    above. `login` is only an alias which uses DNS round-robining to
    select one of the actual gateway machines to connect to. If you get
    the above error, what has likely happened is that either the local
    DNS cache on your system or the DNS server you use has cached an
    alias to a gateway which is now unreachable for some reason. If this
    occurs, you should simply select one of the actual gateways at
    random and attempt to ssh directly to it. For example, `ssh
    vmps65.accre.vanderbilt.edu`.
-   If you can connect but the connection "hangs" before you receive a
    command-line prompt, your problem may be related to an error in one
    of your login files (e. g., .bashrc in your home directory). This we
    can help diagnose. Please send us a message via [Request
    Tracker](/?page_id=369).
-   If you can connect but your login "hangs", it is possible we are
    experiencing a problem with
    [GPFS](http://www-03.ibm.com/systems/clusters/software/gpfs.html)
    (the General Parallel File System designed by IBM). Other symptoms
    of this include logging on but not being able to see, for example,
    your home directory. Sometimes the file system problem is temporary,
    lasting only a moment. Larger file system problems normally occur
    when the system is overloaded, which can happen for various reasons.
    If the problem is found to be caused by a particular user account or
    set of jobs, we immediately work with the user to resolve
    it.Sometimes the issue is not related to user software or the way a
    user is submitting jobs and we have to work with IBM to determine
    the root of the file system problem. When we expect the issue cannot
    be resolved quickly we notify all users to expect intermittent
    cluster access.In most cases when the system is in this state you
    should still be able to accomplish your work, albeit you may find
    the system is occasionally sluggish and intermittently
    nonresponsive. Please be patient. You will find upon repeated
    attempts you will be able to log on and submit jobs. If these jobs
    are not heavily dependent on disk I/O they should continue running.

In any case, so we can immediately begin resolving the issue, please
notify us ASAP of any connectivity problems by submitting a [Request
Tracker](/?page_id=369) ticket. Include details such as a "cut and
paste" of the information in your login window if you are able.
