import{_ as e,c as t,o as i,a4 as s,aS as a}from"./chunks/framework.BGFi9fUZ.js";const f=JSON.parse('{"title":"Document CUI design","description":"","frontmatter":{},"headers":[],"relativePath":"essentials/document-requirement-for-cui.md","filePath":"essentials/document-requirement-for-cui.md","lastUpdated":1682421189000}'),n={name:"essentials/document-requirement-for-cui.md"},o=s('<h1 id="document-cui-design" tabindex="-1">Document CUI design <a class="header-anchor" href="#document-cui-design" aria-label="Permalink to &quot;Document CUI design&quot;">​</a></h1><p>While service chatbots can improve customer experience, their development can be complex and costly. To minimize these costs and risks, it&#39;s important to answer many questions before writing any code, such as what exactly needs to be built, who can provide assistance, how much specific features will cost, and when they will be available. Holding several rounds of discussions with all stakeholders is necessary to answer these questions. Effective communication of requirements and design is crucial for making these discussions productive.</p><p>Flow diagrams, such as wireflows, are a popular way of documenting requirements and designs for graphical user interaction. These diagrams document both user choices and desired system responses in a series of turns, with system responses defined based on the entire interaction flow up to that point. A flow-based documentation can precisely describe the design or requirements and is easily modifiable since users can only interact with the GUI app in the ways that have been designed for them. However, conversational interaction can result in an exponentially larger number of possible conversational flows, which raises the question of whether a flow-based approach is still suitable for designing and documenting conversational interaction. If not, what is?</p><p><img src="'+a+`" alt="wireflow"></p><h2 id="service-driven-design" tabindex="-1">Service driven design <a class="header-anchor" href="#service-driven-design" aria-label="Permalink to &quot;Service driven design&quot;">​</a></h2><p>Conversational driven design involves analyzing the conversation history. However, subtle semantic differences between utterances can lead to unnecessary deliberation if they are not grounded to available services. For example, phrases like &quot;Are you guys open now?&quot;, &quot;What are your hours on Tuesday?&quot;, and &quot;When do you guys close?&quot; may appear to have different intents, but they could all be served by invoking the same service. Documenting user intents can be useful in requirement exploration, but it has little production value if user intent can be fulfilled by one of the existing services.</p><p>A better approach is to design a conversational user interface based on the services that a business wants to expose. This is because creating even a simple service requires a large team of experts, including architects, developers, database managers, and devops personnel. Compared to user intentions, service APIs generally have less redundancy. By focusing on how user intention can be grounded to available services, it becomes easier to determine whether an intention is distinct and can be served by one API or not. Additionally, it is possible to identify whether a particular conversation flow requires special attention or not, as the service to be invoked does not depend on the order in which the user specifies their preferences.</p><h2 id="slot-filling" tabindex="-1">Slot filling <a class="header-anchor" href="#slot-filling" aria-label="Permalink to &quot;Slot filling&quot;">​</a></h2><p>In order to provide a service to a user, a chatbot and the user must first agree on the service configuration, which includes the service name and slot values required by that service. For instance, to sell movie tickets, the chatbot needs to confirm with the user that they want to purchase a movie ticket and then gather their preferences regarding the movie title, showtime, format, and number of tickets. As users often do not provide all the necessary information at once, chatbots must engage in effective conversations to gather these missing information.</p><table><thead><tr><th style="text-align:left;">Schema</th><th style="text-align:left;">Interaction Logic</th><th style="text-align:left;">Language Perception</th></tr></thead><tbody><tr><td style="text-align:left;">movie title</td><td style="text-align:left;"><ul><li> Required. </li><li> Provide options.</li><li> Need verified.</li></ul></td><td style="text-align:left;"><ul><li> Which movie do you want to see? </li><li> Which film are you interested in watching? </li><li> What movie do you have in mind? </li><li> Which film are you considering going to see? </li><li> ... </li></ul></td></tr><tr><td style="text-align:left;">showtime</td><td style="text-align:left;"><ul><li> Required. </li><li> Provide options.</li><li> Need verified.</li></ul></td><td style="text-align:left;"><ul><li> Which showtime would you like? </li><li> At what time would you like to see the show? </li><li> What time would you like to go to the movie? </li><li> ... </li></ul></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr><tr><td style="text-align:left;">number of tickets</td><td style="text-align:left;">...</td><td style="text-align:left;">...</td></tr></tbody></table><p>A good strategy for filling the slots of a service so that the chatbot can deliver what the user wants is to proceed deterministically by going through the slots in a predefined order. For each slot, the chatbot can follow a set of stages, including initialization, prompting, value recommendation, value check, and confirmation. These stages can interact with the production system through service APIs, engaging in a systematic conversation with the user based on both API return values and user input. For example, after receiving a user&#39;s initial choice for a movie title, the chatbot can check with the production system to see if there are still available showtimes or seats. Based on this information, the chatbot can then either move on to the next slot or prompt the user for a new movie title.</p><h2 id="contextual-snippet" tabindex="-1">Contextual snippet <a class="header-anchor" href="#contextual-snippet" aria-label="Permalink to &quot;Contextual snippet&quot;">​</a></h2><p>The conversational behavior of the chatbot for a given service can be described using a set of contextual snippets, along with the schema representation of that service. The schema representation of a service is simply a label for the service and all its required slots, along with their types that define what value can be used to fill each slot. A contextual snippet for the service consists of a label, description, precondition, annotated dialog snippet, and an end state. The preconditions are defined by the dialog states in the form of slot/value pairs, along with the service API&#39;s result, and annotated dialog snippets showcase how the chatbot should behave under such conditions. The end state defines the dialog state the chatbot ends up with after the sample conversation snippet is completed.</p><p>Let&#39;s use movie ticket selling service as an example. The schema representation of the service can be sketched as follows:</p><ol><li><code>movieTitle</code> <strong>MovieTitle</strong> Required. The title of the movie.</li><li><code>showtime</code> <strong>LocalTime</strong> Required. The time and date of the movie showing.</li><li><code>format</code> <strong>MovieFormat</strong> Required. The format of the movie, e.g. IMAX 3D, Digital 3D, Standard.</li><li><code>numberOfTicket</code> <strong>Integer</strong> Required. The number of tickets being purchased.</li></ol><p>The service&#39;s conversational behavior is described in the following contextual snippets:</p><h3 id="contextual-snippet-1-happy-path" tabindex="-1">Contextual snippet 1: Happy path <a class="header-anchor" href="#contextual-snippet-1-happy-path" aria-label="Permalink to &quot;Contextual snippet 1: Happy path&quot;">​</a></h3><p>This snippet shows how the chatbot can successfully complete a transaction for a user who wants to buy movie tickets. The chatbot asks for the user&#39;s preferred showtime and number of tickets, and then confirms the purchase with the user before processing the payment.</p><ol><li>Description: Defines what happens if everything goes well.</li><li>Precondition: N/A</li><li>Annotated conversation<div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Two tickets for the Star Wars, please.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Great choice! Do you want watch IMAX for that?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Yes, please.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;There are two available showtimes: 6:00pm and 10:00pm, which one do you like?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6:00pm please.&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;That is two tickets for 6:00pm IMAX Star Wars, total $24. Would you like to proceed with the purchase?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Yes.&quot;</span></span></code></pre></div></li><li>End state: Slots <code>movieTitle</code>, <code>showtime</code>, <code>format</code> and <code>numberOfTicket</code> are filled.<div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;movieTitle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Star Wars&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;showtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;18:00&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IMAX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;numberOfTicket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h3 id="contextual-snippet-2-invalid-input" tabindex="-1">Contextual snippet 2: Invalid input <a class="header-anchor" href="#contextual-snippet-2-invalid-input" aria-label="Permalink to &quot;Contextual snippet 2: Invalid input&quot;">​</a></h3><p>This snippet shows how the chatbot can handle invalid input successfully complete service. In this case, when there are no IMAX tickets available, the chatbot offers the user tickets in standard format instead.</p><ol><li>Description: When the chatbot receives a value for a slot that is not serviceable, it will provide another value if it can or ask the user to provide another value. Using the <code>format</code> as an example.</li><li>Precondition: Slots <code>movieTitle</code> is filled.</li><li>Annotated conversation<div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chatbot: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IMAX are sold out today. There are two available showtimes in standard format: 6:00pm and 10:00pm, which one do you like?&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6:00pm please.&quot;</span></span></code></pre></div></li><li>End state: Slots <code>movieTitle</code>, <code>showtime</code> and <code>format</code> are filled.</li></ol><p>Contextual snippets allow you to describe the requirements for a conversational user interface in a piecemeal fashion. You can start with just the happy path and gradually add requirements for rarer and rarer corner cases. The happy path requirements do not need to be changed with these new corner cases. The stability provided by this way of documenting requirements allows us to build better and better conversational experiences.</p><h2 id="parting-words" tabindex="-1">Parting words <a class="header-anchor" href="#parting-words" aria-label="Permalink to &quot;Parting words&quot;">​</a></h2><p>Good requirement and design documentation makes it possible for stakeholders to discuss what should be built without writing a single line of code. Assuming that the chatbot should work on one service at a time and deterministically follow a predefined strategy to fill the slots, we introduce contextual snippets as a method to document requirements for the conversational user interface (CUI) frontend. This method is easy to pick up, can precisely document the expected conversational behavior for delivering a service, and is useful regardless of which platform is used to build the conversational user interface. While there is no explicit global view of all possible interactions, this localized requirement documentation method allows for incrementally building the conversational experience. We hope that this systematic way of documenting CUI requirements can reduce the risk and associated cost in building your next chatbot and make your customers happier.</p>`,25),l=[o];function r(h,d,c,p,u,m){return i(),t("div",null,l)}const k=e(n,[["render",r]]);export{f as __pageData,k as default};
