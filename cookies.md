---
title: Snoocore cookie login
layout: default
---

# Authenticating with Cookies

Simply apply the parameter guidelines and make a call to [`/api/login`](http://www.reddit.com/dev/api#POST_api_login):

```javascript
var loginPromise = reddit.api.login({
    user: 'yourUsername',
    passwd: 'yourPassword',
    rem: true,
    api_type: 'json'
});
```

Note that the parameters `api_type` and `rem` are *required*. Snoocore does not tamper with the standard Reddit API calls in any way.

## Pretty Login

The above works, but the url parameters `rem` and `api_type` are a little clunky for the average user. Snoocore provides an alternate login function that can be used:

```javascript
var loginPromise = reddit.login({ 
    username: 'yourUsername', 
    password: 'yourPasswd' 
});
```

<sub>If needed, rem and api_type can be passed in as well. They default to **true** and **json** respectively.</sub>

## Logout

A function `logout` is provided if the functionality is needed.

```javascript
var logoutPromise = reddit.logout();
``` 


## Modhash & Cookie login

If for some reason you need to login with a Modhash & Cookie instead of the traditional Username & Password cookie login, you can do so using the `reddit.login` provided to perform traditional logins, just pass it a modhash and cookie instead:

```javascript
var Snoocore = require('snoocore');
var reddit = new Snoocore({ userAgent: 'someUserAgent' });

var loginPromise = reddit.login({
    cookie: {}, /* your cookie */
    modhash: 'yourModhash'
});
```