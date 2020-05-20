jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';
  let $clientId = $('#client-id');
  let $clientSecret = $("#client-secret");
  let config = kintone.plugin.app.getConfig(PLUGIN_ID);

  $clientId.val(config.clientId);
  $clientSecret.val(config.clientSecret);

  // save button
  $('.js-submit-settings').on('submit', function(e) {
    e.preventDefault();
    let id = $clientId.val();
    let secret = $clientSecret.val();

    kintone.plugin.app.setConfig({
      clientId: id,
      clientSecret: secret
    }, function() {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
  // cancel button
  $('.js-cancel-button').on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
