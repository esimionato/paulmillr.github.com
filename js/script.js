(function() {
  /* Author: Paul Miller
  */

  var sidebar, _ref;
  if ((_ref = window.useSidebar) == null) window.useSidebar = false;
  sidebar = {
    init: function() {
      var $navlist;
      $navlist = $(".navigation-list");
      return $(".tag-bar > h2[id]").each(function() {
        var $item, $this, id, text;
        $this = $(this);
        text = $this.text();
        id = $this.attr("id");
        $item = $("<li><a href='#" + id + "'>" + text + "</a></li>");
        return $navlist.append($item);
      });
    }
  };
  $(function() {
    if (window.useSidebar) return sidebar.init();
  });
}).call(this);
