--- 
layout: post
title: Useful Mac OS X commands
---

Disable useless Safari page previews:

    defaults write com.apple.Safari DebugSnapshotsUpdatePolicy -int 2

Disable downloaded applications warning dialogue:

    defaults write com.apple.LaunchServices LSQuarantine -bool NO

Install gevent:

    sudo python setup.py install -I /opt/local/include -L /opt/local/lib
