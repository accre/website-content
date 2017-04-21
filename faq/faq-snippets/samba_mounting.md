###### Connectivity: How do I mount a Samba (`smb`) share? {#samba_mounting} 

If you have been assigned a Samba or smb share to mount locally
the following instructions should help. Note you should have been given
a share name and you should have a Samba password that is different from
your cluster or VUnetID password: 

**On a Mac** open finder. On the menu
bar at the top select Go, Connect to Server... (⌘K). In the Server
Address: field enter the following;

```{.outline}
smb://samba.accre.vanderbilt.edu\*sharename*\
```

where `sharename` is the
name of the Samba share you were assigned. Next click Connect and you
will be prompted for a Name and Password. This will be your cluster
username and your Samba password. At this point hit Connect again and
your share will be mounted as a drive in Finder.  

**On a Windows PC** run File Explorer 
(from the start bar it will be a folder or you can hit
the windows key and type in explorer). In the address bar at the top
enter the following; 

```{.outline}
\\samba.accre.vanderbilt.edu\*sharename*\
```

where `sharename` is the name of the Samba share you were assigned. Hit enter
and you will be prompted for a username and password. Enter your cluster
username and your Samba password and hit enter or click ok. At this
point your share will be mounted as a drive in File Explorer.
