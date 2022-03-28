PlayScript - Cache Strategies
---
To implement one, you need to pass one of the following options to to the `cache` option on your require function.

- Network first `default` - creates a network request and sets / resets the expiry date, falls back to cache.
- cache first - serves cache first, falls back to network.
- Network only - only serves network provided data, throw an error on fail.
- Limit ${size in kb} - like network first, but only catches if the response data is smaller than the limit size `experimental`.

###### Example:
```javascript
const script=require("./path/to/script",{
  expire:30,
  cache:"cache only"
})

const script2=require("./path/to/script2",{
  expire:30,
  cache:"limit 120"
})
```
`Side note` - even though your app data may be fully offline, your app won't be until you add a [service worker](./service-worker.md) to cache your `index.html` and the playscript entry file, this also makes your app installable 
