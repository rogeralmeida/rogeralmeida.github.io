console.log("Main index file");

// ES6
import highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';
import * as facebookMessengerSharer from 'highlight-share/dist/sharers/facebook-messenger';


console.log("importest")

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("page loaded");
  const selectionShare = highlightShare({
      selector: '#shareable',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
  });

  selectionShare.init();
});
