
###### Jobs: How can I determine whether or not I have all the processor cores in a node assigned to my job (and why would I want to do so)? {#determinewholenode} 

As mentioned above, if
your SBATCH script asks for 8 cores your job could land on either an 8 or
12 core node. Intel CPUs support hyperthreading, which essentially
allows each physical core to appear to be two cores. Many
multi-processor applications can take advantage of hyperthreading to run
in significantly less time. Please see
<http://www.intel.com/content/www/us/en/architecture-and-technology/hyper-threading/hyper-threading-technology.html>
for more information on hyperthreading.
