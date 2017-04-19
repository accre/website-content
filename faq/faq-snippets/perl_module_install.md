###### Software: How do I install a perl module without root privilege? {#perl_module_install}

You do not need to have root permission to
install a module. You just install your PERL module locally in your home
directory. Make a directory called, say, `lib/` in your home directory
like this: 

```{.outline}
# first navigate to your home directory 
$ cd ~ 

# now make a directory called lib 
$ mkdir lib 
```

Now you have a directory called
`~/lib` where the `~` represents the path to your home dir. `~` literally
means your home dir, but you probably know that already. All you need to
do is add a modifier to your perl `Makefile.PL` command 

```{.outline}
$ perl Makefile.PL PREFIX=~/lib LIB=~/lib 
```

This tells Make to install the
files in the lib directory in your home directory. You then just
`make`/`nmake` as before. To use the module you just need to add `~/lib` to
`@INC`. Next, you modify the top of your own scripts to look like this:

```{.outline}
#!/usr/bin/perl -w use strict; # add your ~/lib dir to @INC use lib
'/usr/home/your_home_dir/lib/'; # proceed as usual use Some::Module;
```
