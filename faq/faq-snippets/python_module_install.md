###### Software: How do I install a python package from source code? {#python_module_install}

Python users should check out our [Python Software
Page](http://www.accre.vanderbilt.edu/?page_id=2702) for tips and best
practices for using Python on the ACCRE cluster. Here is an example that
uses the SQLAlchemy package. You will also need a tmp directory in
your home directory, so do this in your home directory: 

```{.outline}
mkdir -p temp/SQLAlchemy 
cd temp/SQLAlchemy 
```

Download the source code, and untar
it: 

```{.outline}
wget http://pypi.python.org/packages/source/S/SQLAlchemy/SQLAlchemy-0.7.9.tar.gz
tar xzf SQLAlchemy-0.7.9.tar.gz 
```

You will need to add the appropriate
version of python (the example below loads python2; you can check the
versions of python installed on the cluster by typing `pkginfo | grep
python`) as well as the gcc compiler and the atlas library with `setpkgs`:

```{.outline}
setpkgs -a python2 
setpkgs -a gcc_compiler 
setpkgs -a atlas 
```

Install the module: 

```{.outline}
cd SQLAlchemy-0.7.9 
python setup.py install --user 
```

This installs
the package to `/home/YOUR.VUNETID/.local`. All packages installed to that
directory are automatically added into the python environment.
