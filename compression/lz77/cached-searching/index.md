---
title: LZ77 Cached dictionary
layout: default
---

My idea was to cache lookup operations against the sliding window (or dictionary) to reduce the number of repeated search operations when the LZ77 algorithm is looking for prefix repetitions. I haven't managed to make it faster because inputs that have lots of repeated prefixes tend to have a distribution which makes searching easy and cheap while files with low repetitions will have a very high cache miss rate. If the code usually ends up
doing a cold lookup, the overhead of checking the cache for every candidate prefix will quite substantial. If I were to continue to explore this concept, I would look at using either [Memcached](https://memcached.org/) or [Redis](https://redis.io/), but there are important limitations that stopped me doing this in the first place.

Whatever structure you use to speed up searches has to:
  
- Have the ability to calculate the offset of a prefix right now (not when it was recorded).
- Be able to determine if the value still exists within the sliding window (otherwise you create problems for the decompression process)
- Respect the read order and age ordering of the bytes (always read the lookahead from 0 up; organise the look back, oldest to newest)

The first diagram illustrates the general idea behind using a cached dictionary as well as the high level implementation of [`lz77-nodejs-streams`](https://github.com/spacekitcat/lz77-nodejs-streams).

![A high level overview of this implementation of the LZ77 compression algorithm. It explains that this implementation uses a cached dictionary to optimise the process of finding repeated token prefixes, which is does with the goal of compressing the input stream by eliminating redundancies.](/images/cached-lz77.svg){:class="img-responsive"}

## Implementation

The [implementation on GitHub](https://github.com/spacekitcat/lz77-nodejs-streams) provides the compression process using some libraries I created for this project.

- [https://github.com/spacekitcat/lz77-nodejs-streams](https://github.com/spacekitcat/lz77-nodejs-streams)
- [https://github.com/spacekitcat/tiny-toatie-cache](https://github.com/spacekitcat/tiny-toatie-cache)
- [https://github.com/spacekitcat/cloakroom-smart-buffer-proxy](https://github.com/spacekitcat/cloakroom-smart-buffer-proxy)
- [Shannon entropy]({% link entropy/shannon/index.md %})
