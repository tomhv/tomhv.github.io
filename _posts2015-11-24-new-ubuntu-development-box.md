---
layout: post
title: New Ubuntu Box
---

New Ubuntu Box
==============

Run all commands in ~ unless otherwise specified.

1. Install packages

    ```bash
    $ sudo apt-get install git vim php5 php5-mysql php5-curl php5-intl ssh mysql-server
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
    
5. Set timezone in PHP

    ```bash
    $ sudo sed -i 's/;date.timezone =/date.timezone = America\/New_York/' /etc/php5/cli/php.ini
    $ sudo sed -i 's/;date.timezone =/date.timezone = America\/New_York/' /etc/php5/apache2/php.ini
    ```

6. Install composer

    ```bash
    $ curl -sS https://getcomposer.org/installer | php
    $ sudo mv composer.phar /usr/local/bin/composer
    ```

7. Install symfony-standard

    Use all defaults for params

    ```bash
    $ git clone https://github.com/symfony/symfony-standard.git
    $ cd symfony-standard
    $ composer install -v
    ```
    
8. Ensure Symfony requirements are met

    ```bash
    $ php ./app/check.php
    $ ./app/console server:run
    ```
    
    Browse to http://127.0.0.1:8000/config.php
