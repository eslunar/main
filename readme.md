PlayScript
---
A **Tiny** and **Powerful** JavaScript framework for building **AMAZING** multi-threaded web apps, fast!

###### Demo hello world
```javascript
const butt=new Element("<button>Press me!</button>")
butt.on("click",()=>alert("HELLO MOM!"))

app.body.add(butt)
```

---
### Features
- Top level async / await
- commonJS like module import exports
- Synchronous data fetching
- Multi threaded
- Quick xml and html parsing
- ⚡ fast DOM manipulation
- Advance element Query system
- Dynamic module caching for offline support
- Extendable via plugins 🔗
- API packed!


and so much more under `30kb` all in your browser, no compilation steps, no rocket science setups, no bullshit.


---
### Under the hood.
**PS** runs your javascript code in a dedicated `main` worker and relays information to the `ui` thread, overall increasing web perfomance and response time.

It also provides the **require** function to import scripts and the **module** object to export code, encouraging modular programming and ultimately making it compatible with commonJS libraries on npm.

Being multi threaded also gives **ps** an advantage boost, giving applications the ability to divide the workload into seperate threads that can cross-communicate via a simple **post** and **listen** API.

**interested?**

---
### Documentation

##### Core concepts
- [Setting up](/docs/setup.md)
- [The Module system](/docs/modules.md)
- [Threads](/docs/threads.md)

##### Base usage
- [Elements](/docs/element.md)
- [Events](/docs/events.md)
- [Queries](/docs/queries.md)

---
### But Why?

Having a back-end to do the page rendering and stuff is great and all, but the more your app scales the more resources it requires from the server, and I'm too poor to pay for anything more than the free tier on node hosts 🙈😅.

So I figured why don't the client do some work too, share the work and keep server renting prices low! JavaScript is powerful but not used to its full potential on the front-end.

With PlayScript you can make web scraping apps, search engines, clones, anything your heart desires... and still host it all for free on Github or Vercel!

Ever since NodeJS, no one seems to care about front-end JS anymore, but years have past, hardware became cheaper and more powerful device are online visiting your site, **lets take advantage!**

**Sidenote** playscript was built with es2017 which includes async / await and such, and I don't plan to go lower any time soon, majority of the internet userbase has access to modern browsers, so adding support to older browsers just seem counter productive and adds to the framework's size (which obviously means a slower response time).

happy coding!
