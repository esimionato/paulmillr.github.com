### Author: Paul Miller ###
window.useSidebar ?= no


sidebar =
  init: ->
    $navlist = $(".navigation-list")
    $(".tag-bar > h2[id]").each ->
      $this = $(this)
      text = $this.text()
      id = $this.attr "id"
      $item = $("<li><a href='##{id}'>#{text}</a></li>")
      $navlist.append $item


$ ->
  sidebar.init() if window.useSidebar
