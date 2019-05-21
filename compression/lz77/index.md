---
title: LZ77 compression algorithm
layout: default
---
Compression algorithms are designed to reduce the storage requirements of a given block of data and they achieve by identifying repeating sequences and re-encoding this data with a reduced level of redundancy. The compression function must work in a way that can be reversed by a decompression algorithm.


The [LZ77 compression algorithm](https://en.wikipedia.org/wiki/LZ77_and_LZ78) reduces the redundancy of its input by identifying repeated prefix strings and replacing them with pointers to blocks within a byte buffer, usually known as a sliding window. The prefix pointers are encoded in a way that's context dependant, so for each compression packet (describing a token and a prefix pointer), the state of the window during compression and decompression must be the same. The Sliding Window ensures it's integrity by observing the following rules:

- Only the token value gets appended to the sliding window.
- Every generated packet has a token.
- Tokens have a size of 1 byte.
- Prefixes define offsets relative to the Sliding Window's history buffer before (simplification) appending the current token.

I've created a diagram to show how LZ77 would go about compressing the string `AABAAABAB`. In order (packet 1, 2, 3 and 4), the sliding window contents would be `[]`, `[A]`, `[A, B]` and `[A, B, A]`. It would end with the contents `[A, B, A, B]`.


![A diagram showing that the string `AABAAABAB` compresses to `ABAA`](/images/lz7.svg){:class="img-responsive"}

- [Cached dictionary]({% link compression/lz77/cached-searching/index.md %})

## Example code

I've created an [example implementation of LZ77](https://github.com/spacekitcat/lz77-nodejs-streams) that can generate the compression packets for a given input.
