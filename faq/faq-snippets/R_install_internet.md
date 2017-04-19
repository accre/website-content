###### Software: How do I download and install an R package from the internet? {#R_install_internet}

R users should take a look at our 
[R Software Page](http://www.accre.vanderbilt.edu/?page_id=2760) for
details and best practices for using R on the ACCRE cluster. Here is an
example that uses the `Zelig` package. Login to the cluster, and, if you
have not already done so, in your home directory create a directory for
your R packages. Here is an example: 

```{.outline}
mkdir -p R/rlib 
```

You will need to
add both the R and the gcc compiler with `setpkgs`: 

```{.outline}
setpkgs -a R gcc_compiler 
```

Now start R: 

```{.outline}
R 
```

At the R-prompt (denoted by `>`) tell R where you
will keep your packages: 

```{.outline}
> .libPaths("~/R/rlib") 
```

Next tell R to
install the package: 

```{.outline}
> install.packages("Zelig") 
```

R will now give you
a list of repositories to download from. Choosing the Tennessee
repository seems good. That is choice `80`. R will now download, compile
and install Zelig into your personal R library, `~/R/rlib`. 

To test your install, quit R 

```{.outline}
> quit() 
```

Restart R and at the prompt 

```{.outline}
> .libPaths("~/R/rlib") 
> library("Zelig") 
```

You should see Zelig
loaded. You need to remember to add these two lines to any script you
feed to R if you intend to use Zelig. If you wind up installing many
packages you can put the `.libPaths("~/R/rlib")` command in your
`.Rprofile`.
