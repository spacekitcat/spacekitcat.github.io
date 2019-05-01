# LZ77

This page is a work in progress, I'm filling it in a wee bit at a time. The first diagram illustrates the general idea behind using a cached dictionary as well as the high level implementation of [`lz77-nodejs-streams`](https://github.com/spacekitcat/lz77-nodejs-streams).

![A high level overview of this implementation of the LZ77 compression algorithm. It explains that this implementation uses a cached dictionary to optimise the process of finding repeated token prefixes, which is does with the goal of compressing the input stream by eliminating redundancies.](/images/cached-lz77.svg){:class="img-responsive"}

- [https://github.com/spacekitcat/prototype-libz77](https://github.com/spacekitcat/prototype-libz77)
- [https://github.com/spacekitcat/lz77-nodejs-streams](https://github.com/spacekitcat/lz77-nodejs-streams)
- [https://github.com/spacekitcat/tiny-toatie-cache](https://github.com/spacekitcat/tiny-toatie-cache)
- [https://github.com/spacekitcat/cloakroom-smart-buffer-proxy](https://github.com/spacekitcat/cloakroom-smart-buffer-proxy)
- [Shannon entropy]({% link shannon-entropy.md %})
