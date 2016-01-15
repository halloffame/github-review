var markAsReviewed = function () {
  this.blur(); // Remove focus from link
  $(this).parents('.file.js-details-container').toggleClass('reviewed');
  return false;
}

$('.file.js-details-container > .file-header').each(function() {
  var new_review_button = $('<button type="button" class="btn-link btn-octicon tooltipped tooltipped-nw" aria-label="Mark as reviewed"><span aria-hidden="true" class="octicon octicon-check"></span></button>');
  $(this).find(".file-actions").append(new_review_button);
  new_review_button.click(markAsReviewed);
})
