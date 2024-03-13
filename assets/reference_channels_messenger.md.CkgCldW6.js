import{_ as e,c as o,o as t,a4 as s,bs as r,bt as n,bu as a,bv as i,bw as l,bx as p,by as c,bz as g,bA as h}from"./chunks/framework.BGFi9fUZ.js";const T=JSON.parse('{"title":"Messenger","description":"","frontmatter":{},"headers":[],"relativePath":"reference/channels/messenger.md","filePath":"reference/channels/messenger.md","lastUpdated":1682396091000}'),d={name:"reference/channels/messenger.md"},u=s('<h1 id="messenger" tabindex="-1">Messenger <a class="header-anchor" href="#messenger" aria-label="Permalink to &quot;Messenger&quot;">​</a></h1><p>The <a href="https://developers.facebook.com/docs/messenger-platform/introduction" target="_blank" rel="noreferrer">Messenger Platform</a> allows your app to send and receive messages between your Facebook Page and your customers. Messenger from Meta is a messaging service that allows a business&#39; Facebook Page to respond to messages from customers. By integrating Messenger with OpenCUI, businesses can use OpenCUI&#39;s chatbot to handle customer messages more quickly and efficiently.</p><p>This tutorial will show you how to integrate Messenger with an OpenCUI chatbot in the OpenCUI production environment. For private deployments, please check with your organization&#39;s DevOps team.</p><p><img src="'+r+'" alt="test"></p><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h2><p>On the Messenger side, please ensure you have all of the following:</p><ul><li><strong>Facebook Page</strong>: A Facebook Page will be used as the identity of your Messenger experience. To create a new Page, visit <a href="https://www.facebook.com/pages/create" target="_blank" rel="noreferrer">Create a Page</a>.</li><li><strong>Developer Account</strong>: Your developer account is required to create new apps. To create a new developer account, go to the <a href="https://developers.facebook.com/" target="_blank" rel="noreferrer">Meta Developers</a> website and click the &#39;Get Started&#39; button.</li><li><strong>Facebook App</strong>: The Facebook app contains the settings for your Messenger experience, including access tokens. To create a new app, visit your <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer">app dashboard</a> and click on &#39;Create App&#39; in the top right corner.</li></ul><h2 id="set-up-messenger" tabindex="-1">Set up Messenger <a class="header-anchor" href="#set-up-messenger" aria-label="Permalink to &quot;Set up Messenger&quot;">​</a></h2><ol><li><p>Use <a href="https://developers.facebook.com/apps" target="_blank" rel="noreferrer">Meta App Dashboard</a> to add the Messenger product to your Meta App:</p><ol><li>Enter the App you want to configure, click <strong>Add Product</strong> on the left sidebar menu.</li><li>Click <strong>Set Up</strong> button on <strong>Messenger</strong> product.</li></ol><p><img src="'+n+'" alt="add messenger"></p></li><li><p>Subscribe your app to a Facebook page. Go to <strong>Messenger &gt; Settings</strong> panel, scroll down to <strong>Access Tokens</strong> section, click <strong>Add or Remove Pages</strong> button and select your page.</p><p><img src="'+a+'" alt="add page"></p></li><li><p>Then you will be provided with an access token at this step. In the <strong>Access Tokens</strong> section, click <strong>Generate Token</strong> button. 📋 Copy this value. This token will be used to configure the integration from the OpenCUI platform.</p><p><img src="'+i+'" alt="generate token"></p></li></ol><h2 id="configure-messenger-from-opencui" tabindex="-1">Configure Messenger from OpenCUI <a class="header-anchor" href="#configure-messenger-from-opencui" aria-label="Permalink to &quot;Configure Messenger from OpenCUI&quot;">​</a></h2><p>OpenCUI allows you to configure multiple Messenger channels. This section will show you how to configure a single channel, but you can repeat the process for any number of channels you need.</p><p>Inside your chatbot, in the <strong>Settings</strong> tab and under <strong>Integrations</strong> page.</p><ol><li><p>In the <strong>Deploy service provider</strong> section, select <code>io.opencui.channel.IChannel</code> for setting up channel.</p><p><img src="'+l+'" alt="select the service"></p></li><li><p>A popup window will appear. In the <strong>Service provider</strong> dropdown, select <code>io.opencui.messenger</code>. Then the necessary configuration information required by the Messenger channel will be displayed in the same window.</p><p><img src="'+p+'" alt="select a channel"></p></li><li><p>Continue inside the popup window, configure the following settings and save:</p><ul><li><strong>Label</strong>: Set a label for this channel type, should be unique in the chatbot.</li><li><strong>Verify Token</strong>: Enter any private token you desire. This value will be needed to configure Messenger Webhook on Meta&#39;s side.</li><li><strong>Page Access Token</strong>: Enter the access token you copied from Messenger when you set it up.</li><li><strong>Locale</strong>: Select a locale that determines the default language used by your chatbot.</li><li><strong>Callback URL</strong>: Copy this value after setting the label and locale. This will be needed to configure Messenger Webhook.</li></ul><p><img src="'+c+'" alt="add channel"></p></li><li><p>Before you move on to the next step, be sure to deploy your chatbot to the OpenCUI production environment.</p></li></ol><h2 id="finish-messenger-setup" tabindex="-1">Finish Messenger setup <a class="header-anchor" href="#finish-messenger-setup" aria-label="Permalink to &quot;Finish Messenger setup&quot;">​</a></h2><p>Configure the Messenger webhook for your app. Back to your Meta App:</p><ol><li><p>Go to <strong>Messenger &gt; Settings</strong> panel, scroll down to <strong>Webhooks</strong> section, click <strong>Add Callback URL</strong> button.</p></li><li><p>A Webhook setting dialog opens, use the <strong>Callback URL</strong> and <strong>Verify Token</strong> values you copied above, then click <strong>Verify and Save</strong>.</p><p><img src="'+g+'" alt="config webhook"></p></li><li><p>In the <strong>Webhooks</strong> section, click <strong>Add subscriptions</strong> button and enable <code>messages</code> and <code>messaging_postbacks</code> in the page subscriptions.</p><p><img src="'+h+'" alt="add subscriptions"></p></li></ol><h2 id="test-your-chatbot" tabindex="-1">Test your chatbot <a class="header-anchor" href="#test-your-chatbot" aria-label="Permalink to &quot;Test your chatbot&quot;">​</a></h2><ol><li>To test that your app setup was successful, go to your page and send a message to yourself. If you get a response, you have fully set up your app for receiving messages! 🎉</li><li>To make the app accessible to the public, switch to <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode" target="_blank" rel="noreferrer">live mode</a>.</li></ol><div class="tip custom-block"><p class="custom-block-title">Two app modes in Facebook apps</p><ul><li>In the <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode" target="_blank" rel="noreferrer">development mode</a>, only the administrator and tester that you invited can access the app. In this case, talk to the chatbot.</li><li>In the <a href="https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode" target="_blank" rel="noreferrer">live mode</a>, apps can request <a href="https://developers.facebook.com/docs/permissions/reference" target="_blank" rel="noreferrer">permissions</a> from anyone, but only permissions approved through <a href="https://developers.facebook.com/docs/app-review" target="_blank" rel="noreferrer">App Review</a>. Click <a href="https://developers.facebook.com/docs/messenger-platform/app-review/" target="_blank" rel="noreferrer">here</a> to submit your app for review.</li></ul></div>',19),b=[u];function m(f,k,y,v,_,w){return t(),o("div",null,b)}const C=e(d,[["render",m]]);export{T as __pageData,C as default};
