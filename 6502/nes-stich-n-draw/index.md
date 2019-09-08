---
title: 8-bit Nintendo (NES) 6502 stitch n draw
layout: default
---

The following Gist demonstrates how to get the 8-bit Nintendo (NES) to render a 4 part sprite of /sprites/ with 6502 pure assembly. I generally shadow SPR-RAM in general purpose RAM from address $0200 and when the VBlank NMI occurs, I ask the Direct Memory Access controller at $4014 to transfer RAM to SPR-RAM.

You cannot write to the Picture Processing Unit's internal RAM when it's busy working (unless you want visible rendering glitches), you have to wait for the V-Blank Non-Maskable Interrupt (NMI); V-Blank means that the last scan-line for the current frame has been drawn to the screen and that the PPU will be idle for approximately 2250 (exact number varies depending on the exact NES model) CPU cycles.

{% gist fb28607d7c4cee3dd10725fc0f08a0ec %}
