###### Jobs: What are the ACCRE cluster defined attributes I can use in my SBATCH scripts corresponding to the available node properties? {#pbs_node_attributes}

The properties of our [compute
nodes](/?page_id=63#nodes) can be specified with combinations of
available attributes (defined by us), e.g.: `haswell, sandy_bridge,
eight` Note that the `haswell` attribute requests the latest Intel
processors, while `sandy_bridge` requests the previous generation. The
`eight` attribute requests nodes that only have eight processors, and
the scheduler will avoid placing the job on the 12-core nodes. In your
batch script you could specify: `#SBATCH --contsraint=haswell`. This
would instruct the scheduler to run the job only on a node with an Intel
Xeon Haswell processor. Note that your job may take longer to start when
these attributes are included as you are limiting the pool of resources
the scheduler can choose from. For a full list of available features,
trying running the `sinfofeatures` command while logged into the
cluster. Find more examples in subsequent [FAQ](#pbs_nodes).
