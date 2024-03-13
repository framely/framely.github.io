import{_ as e,c as t,o,a4 as a,bQ as i,bR as n,bS as r,bT as c,bl as s,bm as l,bn as h,bU as u,bV as p,bW as f}from"./chunks/framework.BGFi9fUZ.js";const k=JSON.parse('{"title":"WeChat Official Account","description":"","frontmatter":{},"headers":[],"relativePath":"reference/channels/wpa.md","filePath":"reference/channels/wpa.md","lastUpdated":1682328852000}'),g={name:"reference/channels/wpa.md"},m=a('<h1 id="wechat-official-account" tabindex="-1">WeChat Official Account <a class="header-anchor" href="#wechat-official-account" aria-label="Permalink to &quot;WeChat Official Account&quot;">​</a></h1><p><img src="'+i+'" alt="test"></p><p>A WeChat Official Account exists in the form of a Wechat user&#39;s contact and chat is the basis for the interaction between the Official Account and its users.</p><p>We are going to show here how to integrate OpenCUI with WeChat and deploy the chatbot to a OpenCUI hosted environment. For the private deployment, please consult systems in your organization.</p><p>Follow these steps to configure:</p><nav class="table-of-contents"><ul><li><a href="#before-you-begin">Before you begin</a></li><li><a href="#set-up-wechat-official-account">Set up WeChat Official Account</a></li><li><a href="#configure-wechat-from-opencui">Configure WeChat from OpenCUI</a></li><li><a href="#finish-wechat-official-account-setup">Finish WeChat Official Account setup</a></li><li><a href="#test-your-chatbot">Test your chatbot</a></li></ul></nav><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h2><p>If you don&#39;t have WeChat Official Account, set up one first.</p><ol><li>Go to <a href="https://mp.weixin.qq.com/?lang=en_US&amp;token=" target="_blank" rel="noreferrer">WeChat Official Account Platform</a>, click <strong>Register Now</strong></li><li>Select <strong>Service Account</strong> or <strong>Subscription Account</strong>, and follow the instructions that are provided on the screen to complete the process.</li></ol><p><img src="'+n+'" alt="register"></p><h2 id="set-up-wechat-official-account" tabindex="-1">Set up WeChat Official Account <a class="header-anchor" href="#set-up-wechat-official-account" aria-label="Permalink to &quot;Set up WeChat Official Account&quot;">​</a></h2><ol><li>Go to <a href="https://mp.weixin.qq.com" target="_blank" rel="noreferrer">WeChat Official Account Platform</a> and log in with your WeChat Official Account.</li><li>In the <strong>Setting and Development</strong> field, click <strong>Basic configuration</strong>.</li><li>In the <strong>Official Account development information</strong> field, 📋 copy <em>Developer ID(AppID)</em> and <em>Developer Password(AppSecret)</em></li></ol><p><img src="'+r+'" alt="set up wechat official account"></p><div class="tip custom-block"><p class="custom-block-title">Notice</p><p>If you used <em>Developer Password(AppSecret)</em> before but didn&#39;t store it, you can click <strong>Reset</strong> to get a new one.</p></div><ol start="4"><li>Click <strong>Configuration</strong> (or <strong>View</strong>), add <em>123.56.222.81</em> to <em>IP whitelist</em> and click <strong>Confirm modification</strong> to save the modification.</li></ol><p><img src="'+c+'" alt="config whitelist"></p><h2 id="configure-wechat-from-opencui" tabindex="-1">Configure WeChat from OpenCUI <a class="header-anchor" href="#configure-wechat-from-opencui" aria-label="Permalink to &quot;Configure WeChat from OpenCUI&quot;">​</a></h2><ol><li><p>On OpenCUI platform, go to service component <a href="https://build.opencui.io/org/io.opencui/agent/channel/struct/service_schema" target="_blank" rel="noreferrer">io.opencui.channel</a>:</p><ol><li>Click <strong>Import</strong> button on the second topbar.</li><li>Select the chatbot you want to configure WeChat channel and <strong>Save</strong>.</li></ol><p><img src="'+s+'" alt="import channel component"></p></li><li><p>Once you have done, switch to your chatbot to wire WeChat channel:</p><ol><li>On <strong>STRUCT</strong> level, head to <strong>Settings</strong> page, in the <strong>Integrations</strong> tab, select the service you just import. In this case, please select <strong>io.opencui.channel.IChannel</strong>.</li><li>A configuration dialog opens, at <strong>Service Provider</strong> field, select <strong>io.opencui.wechatOfficialAccount</strong> to wiring WeChat channel.</li></ol><p><img src="'+l+'" alt="select the service"><em>Select service io.opencui.channel.IChannel</em></p><p><img src="'+h+'" alt="select a channel"><em>Wire WeChat channel</em></p></li><li><p>Continue inside the dialog, configure WeChat integration as following:</p><ul><li><strong>Label</strong>: Enter channel label, should be <strong>unique</strong>.</li><li><strong>App ID</strong>: Paste the developer ID you copied during the WeChat Official Account setup above.</li><li><strong>App Secret</strong>: Paste the developer password you copied during the WeChat Official Account setup above.</li><li><strong>Token</strong>: Enter any token you desire. 📋 Copy this value. This will be used to configure the WhatsApp Webhook.</li><li><strong>Payment</strong>: Whether to use WeChat Pay.</li><li><strong>Locale</strong>: Select locale which determines the default language used by your bot.</li><li><strong>Callback URL</strong>: 📋 Copy this value after setting the label and locale. This will be used to configure the WeChat Server Configuration.</li></ul><p><img src="'+u+'" alt="add channel"></p></li><li><p>Before you go to next step, don&#39;t forget to merge your changes into master and deploy your chatbot.</p></li></ol><h2 id="finish-wechat-official-account-setup" tabindex="-1">Finish WeChat Official Account setup <a class="header-anchor" href="#finish-wechat-official-account-setup" aria-label="Permalink to &quot;Finish WeChat Official Account setup&quot;">​</a></h2><ol><li>Back to <a href="https://mp.weixin.qq.com" target="_blank" rel="noreferrer">WeChat Official Account Platform</a>, In the <strong>Server Configuration</strong> (服务器配置) field, click <strong>Change Configuration</strong>. Paste <em>Callback URL</em> and <em>Token</em> you copied.</li></ol><p><img src="'+p+'" alt="config server"></p><ol start="2"><li>Click <strong>Random Generation</strong> to generate <em>EncodingAESKey</em> and click <strong>Submit</strong>.</li></ol><p><img src="'+f+'" alt="generate key"></p><h2 id="test-your-chatbot" tabindex="-1">Test your chatbot <a class="header-anchor" href="#test-your-chatbot" aria-label="Permalink to &quot;Test your chatbot&quot;">​</a></h2><p>Once you deploy successfully, you can try to send messages to your WeChat Official Account to test your chatbot now. If you get a response, you have fully set up your app for receiving messages! 🎉</p>',25),d=[m];function b(C,y,_,w,v,W){return o(),t("div",null,d)}const O=e(g,[["render",b]]);export{k as __pageData,O as default};
