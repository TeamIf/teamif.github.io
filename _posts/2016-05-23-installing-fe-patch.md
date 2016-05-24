---
layout: post
title:  "3DS Hacking Tutorial and FE Patching Guide"
date:   2016-3-27
author: Thedude28
tags: [tutorial]
---

This is Thedude28's (kinda) extensive guide to patching Fire Emblem Fates/If v2. My extensive guide will show you how to patch the game. It is mainly for CFW users. Prepare yourself, because this guide assumes that you don't have an idea on what you need to do.

You will need:

* A 3DS that you're willing to hack/get homebrew for
* Homebrew
* Shadowtrance's Decrypt9 (for homebrew)
* Gateway Launcher (for homebrew)
* Python 2.7 (the latest version, not 2.7.0)
* (Recommended but not required) An SD card with a size of 8gb or larger
* Retail version of the game (doesn't matter which version)  

<hr>

## Part 1: Checking your 3DS firmware and getting Homebrew

This can be done by going to system settings and checking your firmware version. If you don't want to read and use a flowchart instead, here's a link to it: <a href="http://imgh.us/3DSHex.svg">http://imgh.us/3DSHex.svg</a>.

**If your 3DS is on the latest firmware (10.7.0) as of the time of writing (3/27/2016)**

You can temporarily patch the game via HANS, or you can downgrade to 9.2 and get CFW to apply
a permanent patch. You can access all online functions within the game, and you can get DLC if your 3DS is the
same region as the game's region. Your options for homebrew are limited to:

* Ninjhax
* OoTHax (with or without a powersave)
* SmashHax (only on N3DS)

---

**If your 3DS is on firmware less than 10.7.0**

You can temporarily patch the game via HANS, or you can downgrade to 9.2 and get CFW to apply
a permanent patch. If you choose to patch the game via HANS, you may not be able to access the eShop to get DLC because
you are not on the latest firmware. 

If you are on firmware 10.6.0, your options for homebrew are:

* Ninjhax
* OoTHax (with or without a powersave)
* SmashHax (only on N3DS)

If you are on firmware 10.5.0, you have more options:

* Everything listed above
* MenuHax
* BrowserHax

If you are on firmware less than 10.5.0, you have even more options:

* Everything listed above
* TubeHax
* IronHax
* And some other ones that I may have forgotten

<hr>

### About Homebrew

Homebrew is 100% safe and will not hurt your 3DS in any way shape or form. You need to get Homebrew for your 3DS so that you can either downgrade or use HANS. Details on how to install homebrew from the entry points listed above can be found here: <a href="http://smealum.github.io/3ds/">http://smealum.github.io/3ds/</a>.

About TubeHax DNS: It is a Connection Setting (in Internet Settings) that automatically blocks updates and also prevents you from using the eShop too. It is completely optional if you wish to use it. I will not be listing the steps on how to install homebrew here, there are plenty of tutorials out there, so just google it.

<hr>

### About CFW

If your firmware is >9.2, you'll need to downgrade to firmware 9.2.0 in order to get CFW. If your firmware is between 9.2 and 9.0, you're good to go. However, downgrading is not 100% safe, regardless of how much research you do.

Here are a few options for CFW and some notes about them:

* **ReiNand and CakesFW**
  * Minimalist CFW, provides the bare minimum of what you need.
  * ReiNand removes regionlock, while CakesFW does not.
  * CakesFW has support for multiple Emunands
  * CakesFW has support for updated Sysnand (not too sure about ReiNand though)

* **Luma3DS**
  * The main CFW for A9LH (more info on A9LH below)
  * Utilizes the CPU Clock for ALL 3DS games (N3DS ONLY)
  * Support for region/language emulation for SPECIFIC games (not your console)
  * Removes region lock
  * Able to run many different payloads (depending on which button you press)
  * Support for updated Sysnand (definition for "Updated Sysnand" can be found in A9LH section)
    * Updated Sysnand can also be updated to the latest version (from System Settings)
    * Updated Sysnand will persist even through soft reboots (i.e. exitting System Settings)

* **RxTools**
  * CFW with lots of tools that you'll probably never utilize (but still nice to have).
  * Supposedly the bootrates are lower than ReiNand/Cakes?
  * Removes region lock
  * Has been outdated for a while

* **Gateway CFW**
  * DOES NOT ALLOW YOU TO PLAY CUSTOM DLC (Unless you tinker with it some more)
    * Translated DLC counts as custom DLC as well.
  * Requires the Gateway RED card (you'll have to buy that)
  * Gateway Red is also a flashcard
  * Removes region lock

* **Arm9LoaderHax (or A9LH)**
  * Currently the "best" entrypoint out there
  * Tedious to set up
  * Definitely the riskiest entrypoint to set up (for noobs)
  * Able to boot into CFW in mere seconds
  * Able to have Updated Sysnand
    * Updated Sysnand is basically a permanently patched CFW Sysnand (can only be removed by flashing a clean copy of your NAND)

**NOTE: ALL CFW CAN BE UPDATED TO THE LATEST VERSION (I don't know about RxTools though)**


I will not be listing the steps on how to install CFW here, there are plenty of tutorials out there, so just google it. Please note that some guides you may encounter are outdated, so be sure that the guide you're following is up to date.

<hr>

### Decision of Fate (Picking CFW or HANS)

In this section I will describe the Pros and Cons of HANS or CFW.

#### **HANS**

| :--------------: | :-----------: |
| **Pros**         | **Cons**      |
| :--------------: | :-----------: |
| Easy to use      | Have to use HANS every time you want to use the patch |
| Less work to set up      | May not be able to recognize DLC |
| Works just as well as if you played it on CFW | May not be able to use online functions (depending on your 3DS region and firmware) |
| Does not mess around with saves |          |

<hr>

#### **CFW**

| :--------------: | :-----------: |
| **Pros**         | **Cons**      |
| :--------------: | :-----------: |
| Once you have CFW set up, you have more freedom with what you can do to your 3DS      | (Gateway users only) Cannot play modified DLC |
| Works just as well as if you played it on HANS      | Downgrading is not 100% safe and MAY brick your 3DS (applies to those who need to downgrade) |
| You can permanently patch the game | Lots of work to do just to set it up |
| You will be able to access online functions/eShop (depending on your 3DS region) |          |

It is completely up to you to decide which one you want to use, I will be mainly covering the CFW option.

<hr>
<hr>

## Part 2: Preparing the patch

This part assumes that you have Homebrew set up, and that you can consistently access it. The next step depends on if you picked CFW or HANS.

If you want to do the work for CFW, but still use HANS, follow the steps for CFW below.

If you plan on patching the game HANS, MyLegGuy wrote a guide (with pictures) for that here: <a href="http://wololo.net/talk/viewtopic.php?f=80&t=45669">http://wololo.net/talk/viewtopic.php?f=80&t=45669</a>

The steps listed below are for CFW Users.

<hr>

### Step 1: Dumping the game into a .3ds file

You have a few options here, and it doesn't matter which option you pick. I'm also sure that there are other ways of dumping it, but I will be focusing on using the Gateway Launcher since it is pretty easy to use.

**NOTE: YOU DO NOT NEED GATEWAY TO ACCESS THE GATEWAY LAUNCHER, YOU JUST NEED HOMEBREW. 
YOU ALSO NEED TO BE ON FIRMWARE VERSION 9.2 OR LESS TO USE THE GATEWAY LAUNCHER.**

**a.** First we will be downloading Gateway. All you need to do is go to this website: <a href="http://www.gateway-3ds.com/downloads/">http://www.gateway-3ds.com/downloads/</a>.

**b.** And download the latest version of "Firmware GW". Once you have that downloaded, extract the folder inside and place it anywhere.

**c.** Insert your 3DS SD Card and copy the following into the root of the SD card:

* a 3ds folder found in "GW_3dsx.zip" (when prompted to merge folders, select yes)
* Launcher.dat found in the folder "GW_Ultra_3.7.1_BETA"

**d.** Once you have done that, start up homebrew and select Gateway.

**e.** Now that you're in the Gateway Menu, the option we will be selecting is the "Backup 3DS Game Cartridge"

**f.** Once you have selected "Backup 3DS Game Cartridge" insert your copy of Fire Emblem and press START.

**g.** Now you will have to wait a while for it to dump the game.

**h.** Once it has finished, you will need to power off your 3DS. (You can do this quickly in the Gateway Menu by holding L+R+B+Down)

**i.** Insert your SD card again and you will find a new file with the extension ".3DS"

**j.** Copy this file onto your computer (can be anywhere you want), and now you have a personal dump of the game!

<hr>

### Step 2: Getting Xorpads

This step assumes that you have Python 2.7.X installed.

**a.** Download Shadowtrance's decrypt9 and extract it to wherever you want.

**b.** Inside the decrypt9 folder there will be a folder named "scripts"

**c.** Drag and drop your .3DS file on top of the file "ncchinfo_gen.py". This will generate a ncchinfo.bin file. We will need that later.

* **NOTE**: If you cannot drag and drop your .3DS file on top of it, you will need to move your .3DS file to the scripts folder.

**d.** Then you CTRL+SHIFT+Right Click anywhere in the folder to open up a menu.

**e.** Then you click "Open Command Window Here" and a command prompt opens up.

**f.** Then type the command "python ncchinfo_gen.py <INSERT NAME OF .3DS FILE HERE>.3ds". This will generate a ncchinfo.bin file. We will need that later.

**g.** Now that you have a ncchinfo.bin file, set up decrypt9 on your 3DS. Do this by copying the "Decrypt9UI" folder to the "3ds" folder for homebrew.

**h.** You will also need to copy D9UI to the root of your SD card, as well as create a new folder called "Decrypt9" on the root of your SD card.

**i.** In the folder Decrypt9, paste your ncchinfo.bin as well as slot0x25KeyX.bin in it. You can find slot0x25KeyX.bin on the internet, I will not be linking it because that is illegal.

At this point your SD card should have the following files/folders in it:

        -3ds  
        -- Decrypt9UI (inside 3ds)  
        -- GW (inside 3ds)  

        -Decrypt9  
        -- slot0x25KeyX.bin (inside Decrypt9)  
        -- ncchinfo.bin (inside Decrypt9)  

        Launcher.dat  
        D9UI  

**j.** If you have all of the above on your SD card, boot up decrypt9 from homebrew.

**k.** Once decrypt9 loads up, select NCCH PADGEN (it should be the first option highlighted anyways) Then you sit down, have a snack or something, and wait for it to decrypt and generate Xorpads.

**l.** Now reinsert your SD card and go inside the Decrypt9 folder and check the Xorpads you obtained.

You should get 7 xorpads in total, and 4 of them are needed:

        Xorpads Needed:  
            Main.exefs_7x  
            Main.exefs_norm  
            Main.exheader  
            Main.romfs  

        Xorpads Not Needed:  
            Manual.romfs  
            Partition7.romfs  
            UpdateData.romfs  

If you do not have all the Xorpads Needed, you probably did something wrong. If you do have all of them, congrats! You're almost done!

<hr>
<hr>

## Part 3: Patching the Game

**a.** If you haven't downloaded the patch by now, you should download it now. 

**b.** Create a new folder where you'll be placing everything to patch the game, it'll keep everything neat and organized. 

**c.** So extract the patch into the workplace folder, then create a new folder called "Xorpads" and throw all your Xorpads you generated in there.

<hr>

### EXTRA Step: Combining all patches (Restoration Patch Users Only!)

If you are using the restoration patch and want to combine patches, all you need to do is extract them all into one location and merge folders.

Then you'll need to go inside the "patch" folder and create a new empty folder called "exe"

You don't necessarily need to put anything in "exe", so you can leave it alone.

So it should look something like this:

        -patch
        --rom (inside patch, this is the contents of what you're patching)
        --exe (inside patch, an empty folder)

<hr>

**d.** Extract the patcher and throw that in workplace folder, as well as your dump of the game, and that should be everything you need.

Here's what it should look like:

        -patch
        --rom
        --exe

        -Xorpads
        --All the xorpads needed

        YourDumpedGame.3ds
        Fire Emblem If+Fates Patcher.exe

If your workplace folder does not have the all of the things listed above, you did something wrong.

**e.** Now you'll open up the patcher, and link your ROM, your Xorpad Folder, and your Patch folder.

**f.** Validate Xorpads, let it do its thing, then you'll be presented with an option to build a .3ds or a .cia. These two file types can only be used with CFW:

* A .cia file can be installed on any 3DS with a title manager (such as FBI/DevMenu/BBM, you should have one installed in EmuNAND/A9LH)  
* A .3ds file can only be used on a Gateway Red card (and not a Sky3DS because Sky3DS cannot handle modified roms)  

So select whatever format you want, and have fun!

<hr>

### EXTRA Step: Making this HANS compatible

Just in case you're too lazy and don't want to scroll back up, I'll link his guide again. <a href="http://wololo.net/talk/viewtopic.php?f=80&t=45669">http://wololo.net/talk/viewtopic.php?f=80&t=45669</a>.

When you patch the game and it spits out a patched version of it, it generates a tmp folder.

This folder has the "rom" folder, which we will need.

So first you will want to create a backup, in case something goes wrong.

Then you will want to take the "rom" folder of your patch, and merge it with the folder in "tmp". Overwrite whatever's in there.

Then you take the "rom" folder in "tmp" and use that to rebuild your RomFS

Refer to MyLegGuy's tutorial to rebuild your romfs (step 10 onwards, you can find RomFS builder at the top of his post)

