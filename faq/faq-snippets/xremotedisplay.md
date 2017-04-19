###### Environment: How do I display graphics from the cluster to my local machine? {#xremotedisplay} 

You need two
things: (N. b., you should first check with your P. I. before
installing the following software, since one or both of these may
already be on your system, especially if you're using a computer in your
lab which is already configured to run on the
cluster)

1.  **Get X server support on your local machine:** The graphics
    environment on the cluster is X11, therefore, you must install and
    run an X server from your local machine
2.  **Configure **SSH** tunneling:** You must tell **SSH** on your local
    machine to allow the display of graphics from software running on
    the cluster.

**Windows users:** [Xming X
Server](http://www.straightrunning.com/XmingNotes/) is one of the best X
Window servers available for Windows. You can follow the instruction
provided there to install and set up the server. **Mac OS X users:** You
can get a free [X11 server from
Apple](http://xquartz.macosforge.org/landing/). Mac OS X should already
have **SSH** installed.

1.  Follow their directions to install and run the X11 server.
2.  Launch the X11 server.
3.  Run an `xterm`.
4.  When you log on to the cluster from the command line in the xterm,
    to activate **SSH** tunneling you can use the `-X` option, i. e.,
    `ssh -X user@login.accre.vanderbilt.edu`.
5.  Finally, [see below](#checkx) for how to quickly check you can
    display remote graphics locally.

**Linux users:** We assume you are already running an X server and have
**SSH** installed.

1.  When you log on to the cluster, `ssh -X` will activate **SSH**
    tunneling, i. e., 
    `ssh -X user@login.accre.vanderbilt.edu`.
2.  [See below](#checkx) for how to quickly check you can display remote
    graphics locally.
