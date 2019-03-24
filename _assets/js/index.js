import highlightShare from 'highlight-share';
import * as twitterSharer from 'highlight-share/dist/sharers/twitter';
import * as facebookSharer from 'highlight-share/dist/sharers/facebook';
import * as emailSharer from 'highlight-share/dist/sharers/email';
import * as copySharer from 'highlight-share/dist/sharers/copy';
import * as linkedInSharer from 'highlight-share/dist/sharers/linked-in';
import * as facebookMessengerSharer from 'highlight-share/dist/sharers/facebook-messenger';
import * as mermaid from 'mermaid'

document.addEventListener("DOMContentLoaded", function(event) {
  const selectionShare = highlightShare({
      selector: '#post-content',
      sharers: [twitterSharer, facebookSharer, emailSharer, linkedInSharer, copySharer]
  });
  selectionShare.init();
});

mermaid.initialize({startOnLoad:true});
