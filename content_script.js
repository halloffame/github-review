$('.file.js-details-container > .meta').each(function() {
  var new_review_button = $('<a href="#" class="mark_as_reviewed octicon-button tooltipped tooltipped-nw" rel="nofollow" data-skip-pjax="" aria-label="Mark as reviewed"><span class="octicon octicon-check"></span></a>');
  $(this).find(".actions").append(new_review_button);
})

$('.mark_as_reviewed').click(function(){
  $(this).parents('.file.js-details-container').toggleClass('reviewed');
  return false;
})
