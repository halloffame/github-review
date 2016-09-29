var markAsReviewed = function () {
  this.blur(); // Remove focus from link
  $(this).parents('.file.js-details-container').toggleClass('reviewed');
  return false;
};

$('.file.js-details-container > .file-header').each(function() {
  var new_review_button = $('<a href="#" class="btn-octicon tooltipped tooltipped-nw" rel="nofollow" aria-label="Mark file as reviewed"><svg aria-hidden="true" class="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg></a>');
  $(this).find(".file-actions").append(new_review_button);
  new_review_button.click(markAsReviewed);
});
