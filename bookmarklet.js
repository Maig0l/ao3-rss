// Bookmarklet template file
// TODO: Should be modified when rendering the homepage
//  to change the domain stored in `parser` var (from host header maybe?)

javascript: (() => {
  let parser = "ao3rss.service.tld";
  // AO3 enforces non-WWW domain; don't worry about that
  if (document.domain == "archiveofourown.org" && document.URL.match(/\/(works|series)\/[0-9]+/)) {
    let redir = document.URL.replace(document.domain, parser);
    
    // TODO: Check if AO3 'series' also have subcategories like this and catch those too
    if (document.URL.includes('chapters/')) {
      redir = redir.match(/.{0,}\/works\/[0-9]{0,}/)[0]
    }
    window.location.assign(redir);
  } else {
    alert("You're not browsing an AO3 work/series right now.");
  }
})();
