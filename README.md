# 100 days of CSS challenge

## About this repository

100 days of CSS - OR: 100 days of trying not to suck at CSS.

My goal: to write animations with no javascript. Pure CSS (or pure PostCSS, if you will).
I'll make an exception for Pug, because although it's technically Javascript pre-processing
HTML, you can't really expect me to write 400 divs by hand, lol.

And PostCSS is technically Javascript post-processing HTML, but the whole point of this is
to learn PostCSS, really, so that doesn't count either.

## Run

```$xslt
npm install
npm run dev
```

Open `localhost:1234/index.html`. Please don't forget the `index.html`.

## Develop

### Create a new challenge template

```$xslt
npm run new
```

Enter a new challenge from the prompt. Name should be a 3-digit number ranged from 0 to 100 
(ie. 046).

### Start a dev server

```$xslt
npm run dev
```

### Debug

Open `localhost:1234/${day_number}/index.html` to see the page. Where day_number is a 3-digit 
number ranged from 0 to 100 (ie. 046).

## Build

```$xslt
npm run build
```

## Other

This is an exercise in the following technologies:

* [Pug](https://pugjs.org)
* [Parcel](https://parceljs.org)
* CSS
* [PostCSS](https://postcss.org)

And the following abilities:

* To not give up and not smash one's computer
* To investigate, explain and enforce industry standards as well as I can.
* To find and bookmark some very useful CSS sites
* To hopefully write some reusable CSS snippets
