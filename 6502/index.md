---
title: 6502 Assembly
layout: default
---
The MOS Technology 6502 is an 8-bit processor first released in 1975. Loads of famous computers from 70s and 80s, including the Nintendo Entertainment System (NES) and the BBC Micro, had a 6502. I've been having some fun learning to write games for the NES in pure assembly and this page documents the learning process.

The following Gist demonstrates how to create a 16-bit counter using 6502 assembly. It increments the Least Significant Byte (LSB) and the Most Significant Byte (MSB) separately in such a way that the MSB is incremented once for every 256 increments of the LSB, totalling 65536 iterations.

{% gist 765757ad4341e1c96f5562cd9829136c %}
