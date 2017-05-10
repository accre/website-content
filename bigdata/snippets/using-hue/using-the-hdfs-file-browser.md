# Using the HDFS file browser

--

If you've used the web UIs for Dropbox, Google Drive, etc., then this step
is a piece of cake. The File Browser is accessed from the 
dog-eared-piece-of-paper icon near the top right of the screen. In the file
broswer, you're able to navigate the directory structure of HDFS and even
view the contents of text files.

---

## Using the HDFS file browser

- When a new user logs into Hue, Hue creates an HDFS directory for that user
at `/user/<vunetid>` which becomes that user's home directory.

--

- *Note that, by default, logging in to Hue creates a new user's home directory
with read and execute permissions enabled for the world!*

--

- Files can be uploaded to your directories using the drag-and-drop mechanism; however, 
the file size for transferring through the WebUI is capped at around 50GB, 
so other tools like `scp` or `rsync` are necessary for moving large files
onto the cluster.

---

## Using the HDFS file browser

In addition to your own data, ACCRE hosts some publicly available datasets
at `/data/`:

|Directory             | Description
|:-------------------- |:-----------
|babs                  | Bay Area bikeshare data
|capitalbikeshare data | DC area bikeshare data
|citibike-tripdata     | NYC bikeshare data
|google-ngrams         | n-grams collected from Google Books
|nyc-tlc               | NYC taxi trip data
|stack-archives        | historic posts from StackOverflow, et al.

If you know of other datasets that may appeal to the Vanderbilt community at
large, just let us know!
