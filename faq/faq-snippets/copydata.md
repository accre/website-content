###### My network connection to ACCRE is really poor and I have a lot of data that I need to upload to ACCRE (or download from ACCRE). What are my options? {#copydata}

To transfer files between your local machine and ACCRE, it is recommended to install
and use FileZilla. FileZilla is a simple to use client which allows you
to use the SFTP protocol to upload and download files between systems.
To install FileZilla, simply go to their website and download the
[client](https://filezilla-project.org) The following is a beginner's
guide to FileZilla:
<https://www.ostraining.com/blog/coding/filezilla-beginner/> If you do
not want to overwrite files each time you upload a directory to the
cluster then you can do the following: go to 
`Edit > Settings > Transfers > File exists action` 
and change the `Uploads` setting to
`Overwrite file if source is newer`. Changing this setting will only
upload files that are newer than the copy on the remote system. 
