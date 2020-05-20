jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  //#TODO 更新イベント確認
  kintone.events.on('app.record.index.show', function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);
    let token = getToken(config.clientId, config.clientSecret);
    let lead = {};
    upsertLead(token, lead);
  });

  // API Token を取得する
  function getToken(clientId, clientSecret) {

  }

  // Marketo リードを更新する
  function upsertLead(token, lead) {

  }
})(jQuery, kintone.$PLUGIN_ID);
