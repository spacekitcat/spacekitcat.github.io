# LZ77 Cached dictionary

This page is a work in progress, I'm filling it in a wee bit at a time.

The first diagram illustrates the general idea behind using a cached dictionary as well as the high level implementation of [`lz77-nodejs-streams`](https://github.com/spacekitcat/lz77-nodejs-streams). The idea was to reduce the number of raw search operations carried out against a sliding window by caching previously found token prefixes, but it didn't really work. It turns that redundancy of the input stream does not mean redundancy in the generated prefixes. I'll add some graphs to illustrate this soon.

![A high level overview of this implementation of the LZ77 compression algorithm. It explains that this implementation uses a cached dictionary to optimise the process of finding repeated token prefixes, which is does with the goal of compressing the input stream by eliminating redundancies.](/images/cached-lz77.svg){:class="img-responsive"}

- [https://github.com/spacekitcat/prototype-libz77](https://github.com/spacekitcat/prototype-libz77)
- [https://github.com/spacekitcat/lz77-nodejs-streams](https://github.com/spacekitcat/lz77-nodejs-streams)
- [https://github.com/spacekitcat/tiny-toatie-cache](https://github.com/spacekitcat/tiny-toatie-cache)
- [https://github.com/spacekitcat/cloakroom-smart-buffer-proxy](https://github.com/spacekitcat/cloakroom-smart-buffer-proxy)
- [Shannon entropy]({% link entropy/shannon/index.md %})
