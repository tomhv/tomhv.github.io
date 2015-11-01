---
layout: post
title: Using <code>empty_data</code> with mandatory constructor arguments
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
