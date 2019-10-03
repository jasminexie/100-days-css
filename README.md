# 100 days of CSS challenge

## 🎃 Hacktoberfest 2019 Update

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) contributions are welcome! Any GitHub user may contribute. You may review the issues section; you are welcome to fix any bugs in the existing challenges, add features, or you can submit your own challenge!

### To submit a challenge:

1. Fork this repository. Clone the forked repository and install dependencies.
2. Go to [100 Days CSS](https://100dayscss.com/) Challenge homepage.
3. Select a challenge that is not completed yet on this repo.
4. Review this document (especially the sections on development) and start on a challenge. Complete the challenge. You are not required to write the `README.md` on your challenge, but if you do, please write it in English and add your GitHub id somewhere on the page, so credit will go where credit is due.
5. Commit your changes. Please try to use the [conventional commit syntax](https://github.com/conventional-commits/conventionalcommits.org) when commiting. It's recommended to commit once per challenge, with a commit message of `feat: 012`. Please submit an individual PR for each challenge.

### Before opening a PR, please rebase against the latest master branch.

0. Discard all changes to `package-lock.json`.
1. Add this repository to your fork's upstream if you haven't already: `git remote add upstream git@github.com:jasminexie/100-days-css.git`
2. Fetch the latest master from upstream: `git fetch upstream master`
3. Rebase against upstream master: `git rebase upstream/master`
4. If there are conflicts, please resolve them. Mark them as resolved with `git add <conflicted_file>` or `git rm <conflicted_file>`.
5. Once all conflicts are resolved, run `git rebase --continue`.
6. Now you can make a pull request!

### Other Notes

PRs will not be merged if:

* They are spam, irrelevent, or offensive. These PRs will be marked as `invalid`.
* The `README.md` of other existing challenges are modified. Please respect other contributors' work and leave them as they are!

I will request changes if:

* No dependencies are updated but `package-lock.json` is modified.
* There are obvious quality problems in the code.

Issues and PRs are welcome!

---

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
