---
title: 6502 16-bit counter
layout: default
---

The following Gist demonstrates how to create a 16-bit counter using 6502 assembly. It increments the Least Significant Byte (LSB) and the Most Significant Byte (MSB) separately in such a way that the MSB is incremented once for every 256 increments of the LSB, totalling 65536 iterations.

{% gist 765757ad4341e1c96f5562cd9829136c %}
