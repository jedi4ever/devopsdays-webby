Updating the devopsdays.org website using Windows
-------------------------------------------------
Unfortunately the devopsdays.org website and webby aren't friendly to use on Microsoft Windows. This guide will help you setup an environment so you can clone, edit and test the devopsdays.org website.  The guide could also be used for Mac and Linux operating systems but the focus is on Windows.


#### Why doesn't it work on Windows already?

 - Installing Ruby and all of the required gems can be hard
 - There are files in the repository which contain invalid characters e.g. colon ':' or question mark '?'. These are seen by git as a file delete.


#### How do I it edit then?

To edit devopsdays.org you need to create a Virtual Machine running Linux and then edit the files in the virtual filesystem.  Fortunately most of the work has already been done as the project maintainers have created a Vagrant build for it.  

#### What do I need to know?
- Basic Linux skills (How to login, basic shell commands)
- Basic VirtualBox skills (Start/Stop VM, edit VM settings)
- Basic git skills (Clone, branch and commit from command line)


## Setting up the environment

The guide below uses `C:\DevOpsDays` as a working directory, but you can use something different.

If you intend to submit a Pull Request (PR) with changes, make sure you fork the repository first (https://github.com/jedi4ever/devopsdays-webby)  and use that as the Git source.

### Install the prerequisites
- Install Vagrant (https://www.vagrantup.com/)
- Install git client (http://git-scm.com/downloads)
- Install VirtualBox (https://www.virtualbox.org/)
- Install SSH Client (http://www.putty.org/)

You can install these easily with Chocolatey
```
choco install vagrant git virtualbox putty
```

Optionally you can install an FTP client or text editor with FTP support e.g. Filezilla or Notepad++ with NppFTP plugin.
```
choco install filezilla
choco install notepadplusplus
```

### Create the Virtual Machine

**Clone the repository on Windows**
```
git clone <git source URL> c:\DevOpsDays
```
*Note - Ignore the file errors as you only the need the Vagrant setup and support files*

**Configure Vagrant**

Edit `C:\DevOpsDays\VagrantFile` and uncomment the following lines.  This is required for the FTP server that will be installed later;
```
  config.vm.network "forwarded_port", guest: 21, host: 2121
  config.vm.network "forwarded_port", guest: 10100, host: 10100
```

**Start Vagrant**

Open an administrator command prompt and start the Vagrant process
```
CD /D C:\DevOpsDays
vagrant up
```
... and now wait while your Virtual Machine is created

Once the build process has finished try the website by browsing to `http://127.0.0.1:8000`

### Install an FTP server in the Virtual Machine

**Install an FTP Server**

SSH into the Virtual Machine (127.0.0.1 Port 2222).  Use the default vagrant credentials (both username and password are "vagrant")

Install VSFTPD using the following command line;
```
sudo apt-get install vsftpd
```

**Configure the FTP Server**

Edit the configuration file.  This guide uses nano, but use an editor you are comfortable with
```
sudo nano /etc/vsftpd.conf
```
Add the following text at the top;
```
local_enable=YES
write_enable=YES
pasv_enable=Yes
pasv_max_port=10100
pasv_min_port=10100
pasv_address=127.0.0.1
```
Save the changes to the configuration file.  This enables users to login and write files and enables Passive mode transfers. Passive mode is required as the Virtual Machine is behind a NAT network.

Restart the FTP server
```
sudo service vsftpd restart
```
Test the connection to the FTP server `ftp://127.0.0.1:2021`.  If the connection is successful but you are unable to do a directory listing then there may be an issue with the passive transfer settings.

### Clone the repo into the Virtual Machine

**Remove the Vagrant shared folder**
* Open Virtual Box and edit the settings for the Virtual Machine
* Open the Shared Folders settings
* Remove the Vagrant shared folder

**Restart the Virtual Machine**

A restart is required to remove the shared folder.
Login using SSH and restart the Virtual Machine
```
sudo shutdown -r now
```

**Clone the repository**

Once the Virtual Machine has booted login using SSH
```
sudo chown vagrant /vagrant
git clone <git source URL> /vagrant
```
This changes the owner of the vagrant directory from root to vagrant and then clones the repository into the vagrant directory.

*Remember to checkout and pull any other branches you require*


### Start Webby

Login using SSH

You can do a one off webby build
```
cd /vagrant/site
webby build
```
or watch the filesystem and perform a build when files change
```
cd /vagrant/site
webby autobuild
```
Browse to http://127.0.0.1:8000 to see your handy work

### Edit the website

Now that you have a functional webby development environment and a good git clone it's time to make some edits.  You can upload files from your Windows desktop using an FTP client, like FileZilla.  A better approach would be to use a text editor like Notepad++ with an FTP plugin.


### Other notes

You can use standard git commands in the Virtual Machine to commit and push changes back to the remote repository.

Don't forget to setup git for the first time

http://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

https://help.github.com/articles/keeping-your-email-address-private/
