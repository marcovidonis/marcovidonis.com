---
title: "Building My New Website with Gatsby"
date: "29/12/2020"
img: "../../img/gatsby.png"
type: "article"
---

I've wanted to give static site generators a try for a while now. Here's why I chose Gatsby for the latest iteration of my website, and a few of the things I learnt in the process.

I started my design from [this template](https://github.com/shantanu-deshmukh/vhealth-gatsby), so I would have a good starting point for the design. I chose this template because it looked clean and modern, and it had a few of the elements I knew I'd need, such as project cards. I also knew there would be space for personalisation: Adding the articles section, creating all secondary pages, and modifying site navigation (more on this below).


## Why Gatsby
Being completely new to the concept of static site generators, I found the tutorial and docs on the Gatsby site super friendly and easy to understand. Before I knew it, I was building a website with pages generated from Markdown files automatically -- precisely what I wanted! And the speed of the `Link` elements does feel magical!

Another advantage of Gatsby, for me, was React. As I was just getting started with React when I set out to rebuild my site, this seemed like a perfect opportunity to get some practice with the language and the basic concepts.

I'm sure other SSGs out there can do the same, perhaps even better. I will probably try them out in the future. However, the simplicity in getting started and the use of React were the two main reasons that got me into Gatsby.


## Improvements
I personalised the template to my taste, and I made a few changes and improvements where I felt they were needed.

### Bottom navbar on mobile
I first heard about this from [Vitaly Friedman](https://www.smashingmagazine.com/author/vitaly-friedman/)'s talk at the 2020 All Day Hey! conference. The idea is that, while mobile phones' screens are growing larger and larger, a navbar at the top becomes harder and harder to reach for the user. Mobile apps have had their most important navigation links at the bottom for years, but for some reason websites are slow in adopting this design pattern. There's a great [Smashing Magazine article](https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/) that goes in much more detail.

That talk was eye-opening for me. The template I chose for my website would transition to a side panel menu for smaller screens. While this would make sense for long menus with several links, my website only has 4 pages. The bottom navbar is definitely the best option. I decided to use SVG icons rather than text for the links, as I believe they're more intuitive.

### Profile picture on small viewports
In the original template, the hero image would be hidden in smaller viewports. It just took a few modifications to the CSS and the React components for the image to appear, resized, at the top of the page in small screens!

### Footer
Some small adjustments here. I fixed the sticky footer (it wasn't sticky on pages with shorter content). I also kept all links visible on smaller viewports (they would be hidden in the original template), I just rearranged them in another row.
Finally, I added the free SVG icons attribution. Since these are used only in the bottom navbar, the attribution only shows on small viewports.

### Contact page
I wanted to add a little bit of fun here with an animated SVG icon. I drew a very simple envelope shape and exported it as an SVG path. Then I followed [this article](https://www.tiny.cloud/blog/guide-svg-animation/) to create the drawing animation effect.


## Things I learnt

* **Organisation of components.** Using a template gave me a good primer on how to organise my pages taking full advantage of React components. Each part of each page is a component that I built separately. This makes composing a page very neat, and it's easy to make changes.
* **SVG.** This was the first time I've used SVG icons and animation. I definitely liked hiding each SVG in its own component, it made their use very clean.
* **Material-UI.** Another first for me. The thing I like most about it is probably the ripple effect on buttons. However, there are quite a few things that I don't fully understand:
  * Too many components..! Do I really need `Hidden`, `Grid` and `Box`?
  * Why Bootstrap?
  * `ThemeProvider`: Personally, this feels to me like it could just be a global CSS file. But maybe I should just read the docs...

  Since the template I chose was heavily based on Material-UI, I decided to keep it as it is. After all, the UI is the very reason why I chose this template! However, for my future projects, I think I'll go for a more minimalistic approach, importing just the components I need and handling the rest with CSS.


## Conclusions
The new site is *fast*. Not that the old version was slow: It was made in plain HTML and CSS. But the benefits of Gatsby are clear: Lazy image loading and super quick links between pages of the site come free with Gatsby.

I'll admit the infrastructure for such a small site feels a bit overkill. However, being able to use components and to automatically create pages from Markdown files makes updating the website so much easier.

Down the line, this will mean more frequent updates (hopefully!) and less risk of mistakes -- definitely a new page for my website!
