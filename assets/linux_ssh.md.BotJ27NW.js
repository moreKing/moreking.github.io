import{_ as i,c as a,ai as n,o as l}from"./chunks/framework.DcWFUpHS.js";const c=JSON.parse('{"title":"ssh 相关操作","description":"","frontmatter":{},"headers":[],"relativePath":"linux/ssh.md","filePath":"linux/ssh.md","lastUpdated":1737611111000}'),p={name:"linux/ssh.md"};function e(h,s,t,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ssh-相关操作" tabindex="-1">ssh 相关操作 <a class="header-anchor" href="#ssh-相关操作" aria-label="Permalink to &quot;ssh 相关操作&quot;">​</a></h1><h3 id="_1-生成密钥对" tabindex="-1">1 生成密钥对 <a class="header-anchor" href="#_1-生成密钥对" aria-label="Permalink to &quot;1 生成密钥对&quot;">​</a></h3><p>用法: ssh-keygen [-q] [-a rounds] [-b bits] [-C comment] [-f output_keyfile]</p><table tabindex="0"><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>-t</td><td>指定生成密钥格式：dsa / ecdsa / ecdsa-sk / ed25519 / ed25519-sk / rsa</td></tr><tr><td>-b</td><td>指定密钥长度</td></tr><tr><td>-C</td><td>说明，会追加在密钥中</td></tr><tr><td>-f</td><td>文件保存路径</td></tr><tr><td>-P</td><td>私钥加密密码</td></tr></tbody></table><p>例如：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@more .ssh]# ssh-keygen -t rsa</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Generating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public/private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pair.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (/root/.ssh/id_rsa): </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/root/.ssh/id_rsa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> already</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exists.</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Overwrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (y/n)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#文件已存在，y表示覆盖</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passphrase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (empty </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passphrase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入密钥加密密码，无密码直接回车</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passphrase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> again:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 再次输入密钥加密密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> identification</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saved</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.ssh/id_rsa</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saved</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fingerprint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHA256:PsQDo2Dq3c1ms05sjcrcFkGuTl/jbldS+uM9uHot57U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@more.top</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key&#39;s randomart image is:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+---[RSA 3072]----+</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|                 |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|       .         |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|  o   =          |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">| o . . *     .   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|.   . . S   o    |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|. . .o++o+ o .   |</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">| . .o..@*.. + o .|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|    o.Boo+ . *.+o|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">|     +o+o...+o*E.|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+----[SHA256]-----+</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[root@more .ssh]#</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_2-扫描指定主机信息" tabindex="-1">2 扫描指定主机信息 <a class="header-anchor" href="#_2-扫描指定主机信息" aria-label="Permalink to &quot;2 扫描指定主机信息&quot;">​</a></h3><p>用法: ssh-keyscan [-p port] [-T timeout] [host | addrlist namelist]</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@more .ssh]# ssh-keyscan -p 22 192.168.1.26</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.26:22 SSH-2.0-OpenSSH_8.8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.26:22 SSH-2.0-OpenSSH_8.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">192.168.1.26</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh-rsa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AAAAB3NzaC1yc2EAAAADAQABAAABgQC6BDdgX1hKPXlitr0xCP7kOffF7uXp9mdyfY2Qgie4nunI4Q7qDFlFDFBXfdHKBgvpSe7oDSGei6JwDOhK5BTjBcO6nrdXbtBUIyJ4tev+V2xqOSPEukkDz51x+01Yv8scC25phXcJPTsVLTbaQCDmoKnYO0QrzRpptJU2yLgps75mLhEZXa5QdEPg9MfKTBz+WuIgGvI7beIImch5UTZLkbxfmuSwllfBIdJ/zLjaaieW55hd5DX5fjLuu1HWlYgLdMkW4F7vyjD5DTfLRXmfK+PYuLk0LkOuYhYlIwwJnpU3WIg8pOIa7PaaiLpZs4NHO+LEK8E9iQb7zSYvBYyaw/U8UnpTLT7QiuYcDNuH6CmT/ZKYHwmDiHlCPENGAWm/E32cNVuHr6Fc7DGJii25nf4KFAu9WhZJmBSdlhpBEtSm9Nb1423o7cfUNDrGTeOQVZi9/tIZ5XJIO8MOB/Gu2/aKOhjTq04tDroDTMArlh4WFWA9G4srQzM5MDpywZc=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.26:22 SSH-2.0-OpenSSH_8.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">192.168.1.26</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh-ed25519</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AAAAC3NzaC1lZDI1NTE5AAAAID+naT7cLc9IBvBTFGRZpTwTgVXnMJtqqaLdHUegny33</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.26:22 SSH-2.0-OpenSSH_8.8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 192.168.1.26:22 SSH-2.0-OpenSSH_8.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@more .ssh]#</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>可以用它来扫描添加信任主机</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keyscan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.1.26</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/known_hosts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="_3-私钥生成公钥" tabindex="-1">3. 私钥生成公钥 <a class="header-anchor" href="#_3-私钥生成公钥" aria-label="Permalink to &quot;3. 私钥生成公钥&quot;">​</a></h3><p>通过已有私钥生成公钥</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成ssl公钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -pubout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private_key.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public_key.pem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成ssh公钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa.pub</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,13)]))}const g=i(p,[["render",e]]);export{c as __pageData,g as default};
