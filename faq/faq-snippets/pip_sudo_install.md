###### Software: How do I install a python module without root privilege? {#pip_sudo_install}

It's normally not necessary to use `sudo` to install python modules and 
packages. 
When trying to install a python module with `pip`, if you see an error 
similar to:

```{.outline}
error: could not create
'/usr/local/python2/2.7.4/x86_64/gcc46/nonet/lib/python2.7/site-packages/doc':
Permission denied
```

you should provide the `--user` option to `pip`, e.g.:

```{.outline}
pip install word-count --user
```

For more information, see [our python software pages][python].

However, we do encourage users to create virtual environments, either through
[`virtualenv`][virturalenv] or [`anaconda`][anaconda],
to avoid dependency conflicts between packages.

[python]: http://www.accre.vanderbilt.edu/?page_id=2702#installing-new-packages
[virturalenv]: https://virtualenv.pypa.io/en/stable/ 
[anaconda]: http://www.accre.vanderbilt.edu/?page_id=2702#managing-packages-with-anaconda
