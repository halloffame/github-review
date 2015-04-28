$('.file.js-details-container > .file-header').each(function() {
  var new_review_button = $('<a href="#" class="mark_as_reviewed octicon-btn tooltipped tooltipped-nw" rel="nofollow" data-skip-pjax="" aria-label="Mark as reviewed"><span class="octicon octicon-check"></span></a>');
  $(this).find(".file-actions").append(new_review_button);
})

$('.mark_as_reviewed').click(function(){
  $(this).parents('.file.js-details-container').toggleClass('reviewed');
  return false;
})
