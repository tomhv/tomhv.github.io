---
layout: default
title: New Ubuntu Box
---

New Ubuntu Box
==============


1. Install packages

    ```bash
    $ sudo apt-get install git vim php5 php5-mysql php5-curl ssh
    ```

2. Generate SSH key

    ```bash
    $ ssh-keygen -t rsa -b 4096 -C "tom@tomhv.uk"
    ```

3. Add SSH key to github

4. Install "My Environment"

    ``` bash 
    $ git clone git@github.com:tomhv/my.environment.git
    $ ./my.environment/install.sh
    $ source ~/.bashrc
    ```
    
5. Install composer

    ```bash
    $ curl -sS https://getcomposer.org/installer | php
    $ sudo mv composer.phar /usr/local/bin/composer
    ```
