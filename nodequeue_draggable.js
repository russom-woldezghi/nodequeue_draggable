(function ($) {
  Drupal.behaviors.nodequeue_draggable_highlight= {
    attach:function () {
      $('a#nodequeue_reorder_subqueue').click(function (e) {
        alert('hel');
        // Prevent default scroll to top
        e.preventDefault();

       // Add classes
       $( ".views-row" ).addClass('nodequeue-drag-outline');

       // Sortable
       $(".view-content").sortable({
        'containment': 'parent',
        'opacity': 0.6,
        update: function(event, ui) {
          var fid = Drupal.settings.recieve.nid;
          var message = 'from js';
          jQuery.ajax({
            type:'POST',
            url: Drupal.settings.basePath+'recieve/nid',
            data: 'your_message='+message,
            dataType: 'json',
            error: alert('error'),
          });
       }
     });
     })
    }
  }

  Drupal.behaviors.nodequeue_draggable = {
    attach: function(context, settings) {
      var $ajaxLink = $('#block-system-main', context);
      new Drupal.ajax('#block-system-main', $ajaxLink, {
        url: $ajaxLink.attr('href'),
        settings: {},
        event: 'click tap'
      });
    }
  }



}(jQuery));

