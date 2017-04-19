###### Software: How do I check which python packages are installed? {#python_check_packages}

Python users should check out our [Python
Software Page](http://www.accre.vanderbilt.edu/?page_id=2702) for tips
and best practices for using Python on the ACCRE cluster. First, make
sure you have loaded the correct version of python into your environment
(by typing something like `setpkgs -a python2`. You can check the
versions of python installed on the cluster by typing `pkginfo | grep
python`). Once you have done this, next type: 

```{.outline}
python_pkginfo.py
```

This will run a script that lists the python packages in your current
environment, including any you have installed locally (see next
section). `python_pkginfo.py` also accepts two optional arguments, `--ncol`
(for adjusting the number of columns in the output) and `--type` (this
controls whether installed packages, modules, or both are printed). For
example: 

```{.outline}
python_pkginfo.py --ncol 3 --type both 
```

would list all
installed packages and modules in three columns of output. By default,
installed packages are output in two columns. 
