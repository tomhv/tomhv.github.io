---
layout: post
title: Using empty_data with mandatory constructor arguments
location: Massachusetts, US
---

Consider the following classes:

```php
<?php

namespace My\App;

class EmailAddress
{
    protected $emailAddress;
    
    public function __construct($emailAddress)
    {
        $this->emailAddress = $emailAddress;
    }
}
```
