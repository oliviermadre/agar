# agar

Docker version of client+server Agar.io fork for local network ! NOT OFFICIAL !


## Requirements

 * Docker >= 1.6.0
 * Docker-compose >= 1.2.0

To install the requirements (tested on Ubuntu 14.04) :

```
$ sudo su
$ wget -qO- https://get.docker.com/ | sh
$ curl -L https://github.com/docker/compose/releases/download/1.3.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
```


## Build Agar Server

Just build the dockerfile in the server folder, or use the convenient makefile shortcut :
```
make build
```


## Run

To run the Agar Client + Server, just run the docker-compose, or use the convenient makefile shortcut :
```
make run
```


## Use

The client will be available on the host IP, port 80 (you can configure this in the docker-compose).

The server will be available on the host IP, port 443 (you can configure this in the docker-compose + gameserver.ini + client/web/index.html (at the bottom of the file, the port is hardcoded atm).

When you connect to the client with your browser, you'll be automatically connected to the server, just fill the username and press the play button !

You can tweak the server configuration with the gameserver.ini in the server folder.

Have fun with your friends / colleagues !
