# Building an application

Hue uses Oozie to compose workflows on the cluster, and to access it, you'll 
need to follow the tabs `Workflows -> Editors -> Workflows`. 

--

From here, click
the `+ Create` button, and you'll arrive at the workflow composer screen. You
can drag and drop an application into your workflow, for instance a Spark job. 
Here you can specify the jar file (which, conveniently, 
you can generate from our 
[GitHub repo](https://github.com/bigdata-vandy/spark-wordcount)) 
and specify options and inputs.

--

If you want to interactively select your input and output files each time you
execute the job, you can use the special keywords `${input}` and `${output}`, which
is a nice feature for generalizing your workflows.
