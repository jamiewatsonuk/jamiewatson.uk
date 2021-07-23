---
title: Laravel gates for guest users
slug: laravel-gates-for-guest-users
date: 2020-05-23
excerpt: If you want to use Laravel's authorization gates in conjunction with a guest / non-authenticated user, make sure to set your user parameter as nullable.  Simple enough, but easily forgetten.
---

It's not often that I use [authorization gates](https://laravel.com/docs/7.x/authorization#gates) for guest access to resources, if it ever happens.  So it took me a moment to work out why the gate I was writing would always deny (and not even run the function) when a user was not logged in.

The solution is trivial, of course, but one that caught me out nonetheless.

If you want your Authorization gates to work for unauthenticated users, you'll need to make your User parameter nullable.

```php
Gate::define('view-post', function (?User $user, $post) {
    // ..
});
```

### Digging a little deeper

We can see why this is required if we dig a little deeper into the Gate class `Illuminate\Auth\Access\Gate`.  Along the way, Laravel makes a call to this method:

```php
/**
 * Determine if the callback allows guests.
 *
 * @param  callable  $callback
 * @return bool
 *
 * @throws \ReflectionException
 */
protected function callbackAllowsGuests($callback)
{
    $parameters = (new ReflectionFunction($callback))->getParameters();

    return isset($parameters[0]) && $this->parameterAllowsGuests($parameters[0]);
}
```

This method uses reflection to make some checks against your user parameter.  If there's no default or if it's not nullable Laravel will stub a blank function in place of your defined gate.