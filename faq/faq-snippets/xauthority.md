###### Environment: I am running an X server, how do I fix X connection or .Xauthority file errors? {#xauthority} 

If you are getting error messages similar to these:

```{.outline}
/usr/X11R6/bin/xauth: error in locking authority file /home/user/.Xauthority
```

```{.outline}
X11 connection rejected because of wrong authentication. X connection to 
localhost:11.0 broken (explicit kill or server shutdown)
```

try removing the `.Xauthority` file in your home directory, then log out
and back in. This file occasionally becomes corrupted. When you log back
in and start X, it will recreate your `.Xauthority` file. Sometimes you
have to do this a few times. If you continue to have problems, please
submit a [Request Tracker](/?page_id=369) ticket.
