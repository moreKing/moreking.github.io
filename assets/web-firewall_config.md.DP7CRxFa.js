import{_ as i,c as a,a4 as n,o as l}from"./chunks/framework.D5IMKVMo.js";const g=JSON.parse('{"title":"自定义配置","description":"","frontmatter":{},"headers":[],"relativePath":"web-firewall/config.md","filePath":"web-firewall/config.md","lastUpdated":1729658672000}'),p={name:"web-firewall/config.md"};function h(k,s,t,e,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h1><p>执行安装脚本以后，配置文件路径为<code>/usr/local/web-firewalld/manifest/config/config.yaml</code>，可以根据需求进行修改。</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:     </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;:8000&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 启用https</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # httpsCertPath:   &quot;./manifest/config/server.crt&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # httpsKeyPath:    &quot;./manifest/config/server.key&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  openapiPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/api.json&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在线文档访问地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  swaggerPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/docs&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在线文档访问地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  swaggerCss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./resource/public/docs/swagger.css</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  swaggerJs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./resource/public/docs/swagger.js</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  serverRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./resource/public/html&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  indexFiles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  accessLogEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  shell操作日志存放路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shellMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bash</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # shell模式 仅支持 bash sh两种，设置成其他的无效默认sh</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shellLog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/web-firewall/shell</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/log/web-firewall/access&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 日志文件路径。默认为空，表示关闭，仅输出到终端</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # file:                  &quot;&quot; # 日志文件格式。默认为&quot;{Y-m-d}.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;access&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 日志内容输出前缀。默认为空</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 日志输出级别</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 日志是否同时输出到终端。默认true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rotateSize:            0             # 按照日志文件大小对文件进行滚动切分。默认为0，表示关闭滚动切分特性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rotateExpire:          0             # 按照日志文件时间间隔对文件滚动切分。默认为0，表示关闭滚动切分特性</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rotateBackupLimit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 按照切分的文件数量清理切分文件，当滚动切分特性开启时有效。默认为0，表示不备份，切分则删除</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rotateBackupExpire:    0             # 按照切分的文件有效期清理切分文件，当滚动切分特性开启时有效。默认为0，表示不备份，切分则删除</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rotateBackupCompress:  0             # 滚动切分文件的压缩比（0-9）。默认为0，表示不压缩</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rotateCheckInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1d&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 滚动切分的时间检测间隔，一般不需要设置。默认为1小时</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/log/web-firewall/log/&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 日志文件路径。默认为空，表示关闭，仅输出到终端</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{Y-m-d}.log&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 日志文件格式。默认为&quot;{Y-m-d}.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 日志内容输出前缀。默认为空</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 日志输出级别，不区分大小写 all 所有日志 DEBU &lt; INFO &lt; NOTI &lt; WARN &lt; ERRO &lt; CRIT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  timeFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2006-01-02T15:04:05&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 自定义日志输出的时间格式，使用Golang标准的时间格式配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  ctxKeys: [ ]                    # 自定义Context上下文变量名称，自动打印Context的变量到日志中。默认为空</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 是否打印日志的头信息。默认true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 日志是否同时输出到终端。默认true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 按照日志文件大小对文件进行滚动切分。默认为0，表示关闭滚动切分特性</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateExpire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1d&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 按照日志文件时间间隔对文件滚动切分。默认为0，表示关闭滚动切分特性</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateBackupLimit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 按照切分的文件数量清理切分文件，当滚动切分特性开启时有效。默认为0，表示不备份，切分则删除</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateBackupExpire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 按照切分的文件有效期清理切分文件，当滚动切分特性开启时有效。默认为0，表示不备份，切分则删除</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateBackupCompress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 滚动切分文件的压缩比（0-9）。默认为0，表示不压缩</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rotateCheckInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1d&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 滚动切分的时间检测间隔，一般不需要设置。默认为1小时</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stdoutColorDisabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 关闭终端的颜色打印。默认开启</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  writerColorEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 日志文件是否带上颜色。默认false，表示不带颜色</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">firewall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 配置防火墙类型，可选参数 nftables/iptables/auto 默认auto</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  typePriority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nftables</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # nftables/iptables type 为auto 设置优先检测防火墙类型，在某些系统下两种会共存 默认nftables</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  chainPriority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置链的优先级，仅type为 nftables时生效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    forward</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    prerouting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    postrouting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/log/web-firewall/sql&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sqlite::@file(./resource/db.sqlite3)&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,3)]))}const y=i(p,[["render",h]]);export{g as __pageData,y as default};