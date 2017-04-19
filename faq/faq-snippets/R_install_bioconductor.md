###### Software: How do I install and load an R package from Bioconductor? {#R_install_bioconductor} 

R users should take a look at our 
[R Software Page](http://www.accre.vanderbilt.edu/?page_id=2760) for
details and best practices for using R on the ACCRE cluster. Here is an
example that uses the `goseq` package. Login to the cluster, and in your
home directory create a directory for your R packages. Here is an
example: 

```{.outline}
mkdir -p R/rlib 
```

You will need to add both the R and the gcc
compiler with `setpkgs`: 

```{.outline}
setpkgs -a R gcc_compiler 
```

Now start R: 
```{.outline}
R
``` 

At the
R-prompt "&gt;" tell R where you will keep your packages: 

```{.outline}
> .libPaths("~/R/rlib") 
```

Next, point R to the Bioconductor site: 

```{.outline}
> source("http://bioconductor.org/biocLite.R") 
```

Next, ask R to get the
package, compile and install it in your personal R library (`~/R/rlib`)

```{.outline}
> biocLite("goseq") 
```

`goseq` and its dependencies will be downloaded,
compiled, and installed. If everything succeeds you will see 

```{.outline}
* DONE (goseq)
```

After that, you may get a series of warnings about packages
needing to be upgraded. You may ignore the warnings. To test your
install quit R 

```{.outline}
> quit() 
```

Restart R and at the prompt 

```{.outline}
> .libPaths("~/R/rlib") 
> library("goseq") 
```

You should see `goseq` and
the two dependencies loaded. You need to remember to add these two lines
to any script you feed to R if you intend to use goseq. If you wind up
installing many packages from Bioconductor you can put the
`.libPaths("~/R/rlib")` command in your `.Rprofile`.
