---
title: Shannon entropy function
layout: default
---
I've been experimenting with [LZ77]({% link compression/lz77/index.md %}) a lot recently and I needed a quick way to measure the entropy of a given input file.

I wrote this quick Node.js script that measures a files Shannon entropy. It returns a value between 0 and 8 that theoretically represents the minimum number of bits required to represent the range of unique byte patterns within a file.
{% gist aba0b9a5edf7f526f1543cb102cb0ef8 %}
