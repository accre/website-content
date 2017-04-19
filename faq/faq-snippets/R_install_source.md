###### How do I install an R package from source code? {#R_install_source}

R users should take a look at our 
[R Software Page](http://www.accre.vanderbilt.edu/?page_id=2760) 
for details and
best practices for using R on the ACCRE cluster. Here is an example that
uses the `nlme` package. Login to the cluster, and, if you have not
already done so, in your home directory create a directory for your R
packages. Here is an example: 

```{.outline}
mkdir -p R/rlib 
```

You will also need a tmp
directory in your home directory, so do this in your home directory:

```{.outline}
mkdir tmp/ 
```

You will need to add both the R and the gcc compiler with
`setpkgs`: 

```{.outline}
setpkgs -a R gcc_compiler 
```

Now change to your `tmp` directory,
and download the source code: 

```{.outline}
cd tmp/ 
wget http://cran.r-project.org/src/contrib/nlme_3.1-104.tar.gz 
```

Generally, it
will only take a few seconds to download the "tarball", but sometimes it
can take longer. Now start R: 

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
> install.packages("nlme_3.1-104.tar.gz", repos = NULL, type="source") 
```

R will now compile and install `nlme` into your
personal R library: `~/R/rlib` 

To test your install quit R 

```{.outline}
> quit()
```

Restart R and at the prompt 

```{.outline}
> .libPaths("~/R/rlib") 
> library("nlme") 
```

You should see nlme loaded. You need to remember to add
these two lines to any script you feed to R if you intend to use nlme.
If you wind up installing many packages you can put the
`.libPaths("~/R/rlib")` command in your `.Rprofile`. You may now delete the
sourcecode package: 

```{.outline}
rm nlme_3.1-104.tar.gz 
```

What happens if R says that
there are needed dependencies? This sometimes happens, and you will need
to download and install those packages before installing the one you
wanted. Just follow the steps outlined above until you have downloaded
and installed all the packages.
