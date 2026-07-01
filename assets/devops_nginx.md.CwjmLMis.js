import{_ as n,o as a,c as i,a4 as e}from"./chunks/framework.DkKDtR5x.js";const g=JSON.parse('{"title":"NGINX","description":"","frontmatter":{},"headers":[],"relativePath":"devops/nginx.md","filePath":"devops/nginx.md"}'),p={name:"devops/nginx.md"};function l(t,s,c,r,o,h){return a(),i("div",null,[...s[0]||(s[0]=[e(`<h1 id="nginx" tabindex="-1">NGINX <a class="header-anchor" href="#nginx" aria-label="Permalink to “NGINX”">​</a></h1><ul><li><a href="https://www.youtube.com/watch?v=9t9Mp0BGnyI&amp;t=5s" target="_blank">NGINX Tutorial for Beginners</a></li><li><a href="https://docs.solo.io/gloo-edge/main/guides/gloo_federation/service_failover/" target="_blank">Gloo Failover</a></li></ul><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h2><p>NGINX is open-source web server software used for reverse proxy, load balancing, caching and https SSL termination.</p><p><img src="https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffxcyimfz2388pj7nrct9.jpg" alt="what is nginx" height="300px"><img src="https://media.licdn.com/dms/image/v2/D5612AQGAUqXk7zxViQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732258247083?e=2147483647&amp;v=beta&amp;t=K6IjqFrfDZ29v4I2k3lXQNFr3jvtHSs3RXNzICQcAww" alt="nginx" height="200px"></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # starts nginx</span></span></code></pre></div><p><code>nginx.conf</code> - configures the reverse proxy</p><h2 id="nginx-terms" tabindex="-1">Nginx Terms <a class="header-anchor" href="#nginx-terms" aria-label="Permalink to “Nginx Terms”">​</a></h2><ul><li>context - blocks</li><li>directives - key value pair</li></ul><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>events { # context</span></span>
<span class="line"><span>    worker_connections 1024; # directive</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="serve-static-site" tabindex="-1">serve static site <a class="header-anchor" href="#serve-static-site" aria-label="Permalink to “serve static site”">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # types {</span></span>
<span class="line"><span>    #     text/html html;</span></span>
<span class="line"><span>    #     text/css css;</span></span>
<span class="line"><span>    # }</span></span>
<span class="line"><span>    include mime.types;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 8080;</span></span>
<span class="line"><span>        root ./devops/nginx/mysite;</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            index index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location /fruits {</span></span>
<span class="line"><span>            root ./devops/nginx/mysite;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location /carbs {</span></span>
<span class="line"><span>            alias ./devops/nginx/mysite;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location /vegetables {</span></span>
<span class="line"><span>            root ./devops/nginx/mysite;</span></span>
<span class="line"><span>            try_files /veggies.html /index.html =404;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location ~* /count/[0-9] {</span></span>
<span class="line"><span>            root ./devops/nginx/mysite;</span></span>
<span class="line"><span>            try_files /count.html /index.html =404;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        # Redirect</span></span>
<span class="line"><span>        location /crops {</span></span>
<span class="line"><span>            return 307 /fruits;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        # Rewrite</span></span>
<span class="line"><span>        rewrite ^/number/(\\w+)$ /count/$1 break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="as-load-balancer" tabindex="-1">As Load Balancer <a class="header-anchor" href="#as-load-balancer" aria-label="Permalink to “As Load Balancer”">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backendserver {</span></span>
<span class="line"><span>        server 127.0.0.1:1111;</span></span>
<span class="line"><span>        server 127.0.0.1:1112;</span></span>
<span class="line"><span>        server 127.0.0.1:1113;</span></span>
<span class="line"><span>        server 127.0.0.1:1114;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 8080;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://backendserver/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://computingforgeeks.com/wp-content/uploads/2019/11/nginx-configurations.png" alt="How To host Multiple Sites on Nginx with same Domain (FQDN)"><img src="https://assets.bytebytego.com/diagrams/0423-why-is-nginx-so-popular.png" alt="byte byte go"></p>`,15)])])}const k=n(p,[["render",l]]);export{g as __pageData,k as default};
