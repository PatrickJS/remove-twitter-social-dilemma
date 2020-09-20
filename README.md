# Remove Twitter Social Dilemma

Don't fall into the Social Dilemma. Remove explore/trends/suggested-follows/promoted on Twitter.  
Also consider removing Ads on your google search results via [AdblockerGoogleSearch](https://github.com/PatrickJS/AdblockerGoogleSearch)

## Chrome Installation

1. Clone this repository, so it exists locally: `git clone https://github.com/PatrickJS/remove-twitter-social-dilemma.git`
2. In your browser, open the Extension Management page by navigating to `chrome://extensions` or by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the LOAD UNPACKED button and select the extension directory (this repository, where it was cloned to).

## Brave Installation

If you're using [Brave Browser](https://brave.com/) you do not need to install this but you do need to add a few css selectors.

[Click on this link for instructions](https://dev.to/donavon/disable-promoted-tweets-in-twitter-using-brave-3e37)

Enter these selectors

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

Also set your blocker to aggressive

<img width="359" alt="Screen Shot 2020-09-20 at 6 46 43 AM" src="https://user-images.githubusercontent.com/1016365/93712903-80aa1c00-fb0d-11ea-842e-e9e7159cb879.png">

---

https://www.thesocialdilemma.com/
