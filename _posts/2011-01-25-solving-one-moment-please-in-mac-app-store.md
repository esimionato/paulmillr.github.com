--- 
layout: post
title: Solving "one moment, please" in mac app store
---

Several days ago, I had a problem with Mac App Store: when I was launching app store, it said: "One moment Please..." and nothing happened. But today I've found a fix. You need to open Terminal and write three lines of code below. Now everything works!
Code:

    rm ~/Library/Preferences/com.apple.appstore.plist
    rm ~/Library/Preferences/com.apple.storeagent.plist
    rm -rf ~/Library/Preferences/ByHost/*
