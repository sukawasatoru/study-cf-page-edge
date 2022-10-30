Study of Next.js Edge Runtime on Cloudflare Pages
=================================================

How to deploy
-------------

### Create project ###

```shell
wrangler pages project create <project name>
```

If before 2022-11-30, add environment variable `NODE_VERSION=14` (14 or higher) and add `streams_enable_constructors` and `transformstream_enable_standard_constructor` flags.

ref. [And here's another one: the Next.js Edge Runtime becomes the fourth full-stack framework supported by Cloudflare Pages](https://blog.cloudflare.com/next-on-pages/#deploy-your-next-js-app-to-cloudflare-pages)

### Build ###

```shell
npx @cloudflare/next-on-pages --experimental-minify
```

### Publish ###

*Do not add `/` to trailing the path.*
```shell
wrangler pages publish .vercel/output/static
```

LICENSE
-------

```
   Copyright 2017, 2018, 2021, 2022 sukawasatoru

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
