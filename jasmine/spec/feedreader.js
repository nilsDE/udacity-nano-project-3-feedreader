/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
  describe('RSS Feeds', function() {
    /* The following makes sure that the
     * allFeeds variable has been defined and that it is not
     * empty.*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    /* The following loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    function loopURL(feed) {
      it('have a URL defined', function() {
        expect(feed).toBeDefined();
        expect(feed.length).not.toBe(0);
      });
    };
    for (feed of allFeeds) {
      loopURL(feed.url);
    };
    /* The following loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    function loopName(feed) {
      it('have a name defined', function() {
        expect(feed).toBeDefined();
        expect(feed.length).not.toBe(0);
      });
    };
    for (feed of allFeeds) {
      loopName(feed.name);
    };
  });

  describe('The menu', function() {
    /* The following ensures that the menu element is
     * hidden by default.
     */
    it('is hidden by default', function() {
      let el = document.querySelector('body');
      expect(el.classList.value.includes('menu-hidden')).toBe(true);
    });
    /* The following ensures the menu changes
     * visibility when the menu icon is clicked.
     */
    it('changes visibility when clicked', function() {
      let el = document.querySelector('.menu-icon-link');
      el.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      el.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    /* The following ensures that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });
    it('has at least a single entry within the feed container', function(done) {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });

  describe('New Feed Selection', function() {
    /* The following ensures that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    beforeEach(function(done) {
      loadFeed(2, function() {
        firstFeed = $('.feed').html();
        loadFeed(3, function() {
          secondFeed = $('.feed').html();
          done();
        });
      });
    });
    it('changes content when new feed is loaded', function() {
      expect(firstFeed).not.toEqual(secondFeed);
    });
  });
}());
