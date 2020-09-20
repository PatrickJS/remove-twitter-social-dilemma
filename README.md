# Remove Twitter Social Dilemma

Don't fall into the Social Dilemma. Remove explore/trends/suggested-follows/promoted on twitter.

## Chrome Installation

1. Clone this repository, so it exists locally: `git clone https://github.com/PatrickJS/remove-twitter-social-dilemma.git`
2. In your browser, open the Extension Management page by navigating to `chrome://extensions` or by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the LOAD UNPACKED button and select the extension directory (this repository, where it was cloned to).

## Brave Installation

If you're using [Brave Browser](https://brave.com/) you do not need to install this but you do need to add a few css selectors. Follow the instructions in this link with these list of selectors
```
div[aria-label="Timeline: Trending now"]
```
```
aside[aria-label="Who to follow"]
```
```
a[aria-label="Search and explore"]
```
```
nav[aria-label="Footer"]
```

https://dev.to/donavon/disable-promoted-tweets-in-twitter-using-brave-3e37

---

https://www.thesocialdilemma.com/
