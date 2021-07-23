---
title: Book wall - JAMStack project
slug: book-wall
date: 2021-05-01
excerpt: Here's another small project to get used to Gridsome, a static site generator for VueJS.  I had been using the Goodreads app to track my reading but wanted something more visual to see the books I'm reading.
---

Here's another small project to get used to [Gridsome](https://gridsome.org/), a static site generator for VueJS.  I had been using the Goodreads app to track my reading but wanted something more visual to see the books I'm reading.

To achieve this, I used the data layer of Gridsome to [pull all of the books](https://github.com/jamiewatsonuk/books.wtsn.dev/blob/master/gridsome.server.js) from my Goodreads account using the RSS feeds provided.  Once I had these, I used the built in GraphQL functionality to query the collected data and present each book in a grid.

<figure class="md:-mx-12">

![Book wall using Gridsome and Tailwind](./books.png)
<figcaption class="text-center">Book wall using Gridsome and Tailwind - <a href="https://github.com/jamiewatsonuk/books.wtsn.dev/" target="_blank">Source</a></figacaption>
</figure>