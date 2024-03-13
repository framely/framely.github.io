import{_ as t,c as e,o,a4 as i,a$ as n,b0 as a}from"./chunks/framework.BGFi9fUZ.js";const y=JSON.parse('{"title":"Confirmation","description":"","frontmatter":{},"headers":[],"relativePath":"reference/annotations/confirmation.md","filePath":"reference/annotations/confirmation.md","lastUpdated":1692090474000}'),s={name:"reference/annotations/confirmation.md"},r=i('<h1 id="confirmation" tabindex="-1">Confirmation <a class="header-anchor" href="#confirmation" aria-label="Permalink to &quot;Confirmation&quot;">​</a></h1><p>Confirmations are a way for chatbots to check that they have understood the user&#39;s input correctly and that the user is happy with the actions that the chatbot is taking. They can help to build trust between the user and the chatbot. When users know that the chatbot is understanding them correctly and that they are in control of the conversation, they are more likely to trust the chatbot and use it again in the future.</p><p>Confirmations can be used in an implicit or explicit way:</p><ul><li><p><strong>Implicit confirmations</strong> are subtler and do not require the user to explicitly state that they agree with the chatbot. For example, a chatbot might say <em>&quot;Alright, 4 guests&quot;</em> after the user has said <em>&quot;I want to book a table for 4 guests.&quot;</em> This implicit confirmation shows that the chatbot has understood the user&#39;s request and is moving on to the next step.</p></li><li><p><strong>Explicit confirmations</strong> are more direct and require the user to explicitly state that they agree with the chatbot. For example, a chatbot might say <em>&quot;I understand that you want to book a table for 4 guests. Is that correct?&quot;</em> This explicit confirmation gives the user a chance to correct the chatbot if it has misunderstood their request.</p></li></ul><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Confirmations can help to prevent errors and keep users happy. You can choose the type of confirmation to display to the user based on different conditions, depending on the situation. The system will check the confirmations in the order you specify, from top to bottom. This means that the chatbot will only show the first confirmation that is met. If no condition is met, the system will not show any confirmations.</p><ul><li><p><strong>Condition</strong>: The situation that must be met before a confirmation is sent. For example, a chatbot might need to confirm the user&#39;s credit card number before making a purchase.</p></li><li><p><strong>Confirmation</strong>: The message that the chatbot sends to the user to check that they have understood the input correctly. Confirmation can be implicit or explicit:</p><ul><li><p><strong>Implicit</strong>: Messages that simply inform the user that their input has been received. They do not require the user to reply, but the user may still provide feedback if they want to make a correction.</p></li><li><p><strong>Explicit</strong>: Messages explicitly check with the user that their input or request was understood correctly. The chatbot will not perform the action until it receives a reply from the user, usually in the form of a yes/no or similar response.</p></li></ul></li></ul><p>When using explicit confirmations, you can customize how the system understands user utterances that are interpreted as yes or no. This is because there are many ways to say yes or no in different contexts, such as <em>&quot;Red is my favorite color.&quot;</em> To handle these synonym expressions of yes and no, you can use affirmative and negative expressions.</p><ul><li><p><strong>Affirmative expressions</strong> are words or phrases that mean yes, such as <em>&quot;Sounds good&quot;</em>, <em>&quot;I agree&quot;</em>, and <em>&quot;Go ahead and delete it.&quot;</em></p></li><li><p><strong>Negative expressions</strong> are words or phrases that mean no, such as <em>&quot;I&#39;m not comfortable with that&quot;</em>, <em>&quot;I&#39;m not interested&quot;</em>, and <em>&quot;Not really, I&#39;ll hold off on sending it.&quot;</em></p></li></ul><p>By using affirmative and negative expressions, you can help the system to correctly understand user utterances that are interpreted as yes or no, even if they are not explicitly saying <em>&quot;yes&quot;</em> or <em>&quot;no&quot;</em>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The common understanding of confirmations for yes and no are already supported by the system skills <code>io.opencui.core.confirmation.Yes</code> and <code>io.opencui.core.confirmation.No</code>. So, there is no need to define them again. However, if you need to customize the system skill&#39;s behavior, you can add expressions to define your own confirmations.</p></div><p>Confirmations can be set at two levels: slot level and frame level.</p><ul><li><p><strong>Slot level</strong> confirmations are used to confirm each slot that is defined. If the slot is multi-valued, multi-valued confirmation can be defined, which will confirm each value of the slot.</p><details class="details custom-block"><summary>More detailed explanation of how to set it on slot level</summary><p><img src="'+n+'" alt="confirmation"></p><ol><li>Go to the <strong>slot detail page</strong>, and select the <strong>Annotation</strong> tab.</li><li><strong>Enable</strong> Confirmation and click the <strong>Add</strong> button.</li><li>In the popup window, set the conditions, confirmations and <strong>Save</strong>.</li></ol></details></li><li><p><strong>Frame level</strong> confirmations are used to confirm after all slots on the frame/skill have been completed. The chatbot will bundle slots together for confirmation. Users can accept and modify batch confirmations.</p><details class="details custom-block"><summary>More detailed explanation of how to set it on type level</summary><p><img src="'+a+'" alt="type level confirmation"></p><ol><li>On the type level, select the <strong>Annotation</strong> tab.</li><li>In the <strong>Confirmation</strong> section, click the <strong>Add</strong> button.</li><li>In the popup window, set the conditions, confirmations and <strong>Save</strong>.</li></ol></details></li></ul><h2 id="best-practice" tabindex="-1">Best practice <a class="header-anchor" href="#best-practice" aria-label="Permalink to &quot;Best practice&quot;">​</a></h2><p>Confirmations are a great way to improve the accuracy and usability of your chatbot. They can be used to prevent errors by ensuring that users have provided accurate information, ensure user satisfaction by giving users the opportunity to correct any mistakes that have been made, and build trust between users and chatbots by showing that the chatbot is taking the user&#39;s input seriously.</p><p>When using confirmations, it is important to consider the following:</p><ol><li><p><strong>Use confirmations at key points in the conversation.</strong> This includes:</p><ul><li>When the chatbot is asking for information.</li><li>When the chatbot is about to take a significant action, such as booking a reservation or making a purchase.</li><li>When the chatbot is not sure if it has understood the user&#39;s input correctly.</li><li>When the user is likely to make a mistake, such as entering their credit card number.</li></ul></li><li><p><strong>Use confirmations consistently.</strong> This will help users know when to expect a confirmation and make it easier for them to understand what the chatbot is asking them to confirm.</p></li><li><p><strong>Use clear and concise language in your confirmations.</strong> The user should be able to easily understand what the chatbot is asking them to confirm. Avoid using jargon or technical terms that the user may not understand.</p></li><li><p><strong>Give the user a chance to correct the chatbot if it has misunderstood their request.</strong></p></li><li><p><strong>Use a friendly and conversational tone in your confirmations.</strong> This will help to build rapport with the user and make them feel more comfortable interacting with the chatbot.</p></li></ol>',17),h=[r];function l(c,u,m,d,p,f){return o(),e("div",null,h)}const b=t(s,[["render",l]]);export{y as __pageData,b as default};
