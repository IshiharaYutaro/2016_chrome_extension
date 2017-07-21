var cnt = 1;
 
function click(){
  console.log("test");
}



$(function (){
  // テンプレート
  var template = document.getElementById('template');
  var tabTemplate = document.getElementById('tab-template');
   
  // Window取得
  chrome.windows.getAll(null, function(windows){
     
    for (var i=0; i<windows.length; i++) {
      var winId = windows[i].id;
 
      // Window.idからWindowのタブを取得
      chrome.tabs.getAllInWindow(winId, function(tabs){
 
        var winInfo = template.cloneNode(true);
        winInfo.removeAttribute('id'); // id削除
 
        // タイトル部分
        $(winInfo).find('.window_name').text('Window' + cnt); // Window名
        cnt++;
 
        // タブ一覧
        for (var j=0; j<tabs.length; j++) {
 
          var tab = tabTemplate.cloneNode(true);
          tab.removeAttribute('id'); // id削除
 
          // ファビコン
         $(tab).find('img').attr('src', tabs[j].favIconUrl);
         console.log(tabs[j].index);
          // タブタイトル
         $(tab).find('.tab_title').text(tabs[j].title);

          // タブURL
         $(tab).find('.tab_url').text(tabs[j].url);
          // リストに追加
         $(winInfo).find('#tab_list').append(tab);

        }
 
        $('#window_list').append(winInfo);
 
      });
 
    }
 
  });
 
});