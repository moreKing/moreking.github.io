import{_ as a,c as t,ai as i,o as n}from"./chunks/framework.DcWFUpHS.js";const _=JSON.parse('{"title":"ACA限制接口调用频率","description":"","frontmatter":{},"headers":[],"relativePath":"shterm/aca_nginx_limit.md","filePath":"shterm/aca_nginx_limit.md","lastUpdated":1742718866000}'),o={name:"shterm/aca_nginx_limit.md"};function c(d,e,s,r,l,p){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="aca限制接口调用频率" tabindex="-1">ACA限制接口调用频率 <a class="header-anchor" href="#aca限制接口调用频率" aria-label="Permalink to &quot;ACA限制接口调用频率&quot;">​</a></h1><p>升级到3.3.12-f6后，用户调用API时，从同一客户端调用同一接口访问同一节点，默认调用频率上限为：1秒调用5次或1分钟调用100次。超过此上限将会触发RIS系统告警，API返回429错误码。</p><blockquote><p>3312-F6是一个分界线，F6以后内部实现了限流且不可更改，如果要实现调整必须要关闭内置限流，使用NGINX的限流</p></blockquote><p>3312-F6以上，请先关闭内置限流，并重启tomcat</p><p>在 <code>shterm.conf</code>文件中新增, 重启 <code>tomcat</code></p><div class="language-conf vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api.ratelimiter.onlywarning=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="nginx限流" tabindex="-1">nginx限流 <a class="header-anchor" href="#nginx限流" aria-label="Permalink to &quot;nginx限流&quot;">​</a></h3><p>执行 <code>cd /usr/share/shterm/bin</code> 执行目录</p><p>执行 <code>tar -xvf nginx-limit.tar</code>解压<code>nginx-limit.tar</code>文件</p><p>执行<code>cd nginx-limit</code>进入解压后的<code>nginx</code>目录。</p><p>分别执行<code>vim nginx/conf.d/limit_http.con</code>f和<code>vim nginx/conf.d/limit_location.conf</code>，对配置文件<code>limit_http.conf</code>和<code>limit_location.conf</code>进行相关设置。</p><p>总结，速度限制需要在<code>limit_http.conf</code>中定义，具体引用需要在<code>limit_location.conf</code>中配置</p>',12)]))}const h=a(o,[["render",c]]);export{_ as __pageData,h as default};
