--- 
layout: post
title: Notes about hackintosh install
---

#### Hardware
Q6600, ASUS P5KC P35, DDR2-800 8GB, 9600GT 512mb, Atheros L1 network card, PATA drive in AHCI mode (JMicron controller), SATA hard drive.

#### We'll need
8GB flash drive.

#### Steps

- Download <a href="http://www.tonymacx86.com/Public/iBoot.zip">iBoot</a>, burn it.
- Download <a href="http://rutracker.org/forum/viewtopic.php?t=2166520">Mac OS X 10.6 Retail</a>, restore image to flash drive.
- Download <a href="http://osx86.sojugarden.com/2010/04/myhack-installer-1-0-1-released">MyHack</a>, install it on the flash drive.
- Boot with iBoot, insert flash drive, boot flash drive.
- Format Hard Drive in GUID (not MBR) mode.
- Install OS, reboot, boot with iBoot to new OS in 32-bit mode (arch=i386).
- Install <a href="http://rutracker.org/forum/viewtopic.php?t=3290565">EasyKit</a>&nbsp;kexts, DSDT and chameleon 2.
- We're done!
