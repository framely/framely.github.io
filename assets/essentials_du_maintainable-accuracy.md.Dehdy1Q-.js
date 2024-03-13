import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.BGFi9fUZ.js";const m=JSON.parse('{"title":"6: Maintainable accuracy","description":"","frontmatter":{},"headers":[],"relativePath":"essentials/du/maintainable-accuracy.md","filePath":"essentials/du/maintainable-accuracy.md","lastUpdated":1683562229000}'),i={name:"essentials/du/maintainable-accuracy.md"},r=n('<h1 id="_6-maintainable-accuracy" tabindex="-1">6: Maintainable accuracy <a class="header-anchor" href="#_6-maintainable-accuracy" aria-label="Permalink to &quot;6: Maintainable accuracy&quot;">​</a></h1><p>One of the main hurdles in building chatbots is the dialog understanding (DU) module. It is needed to turn user utterance into some structured event, which then is processed by the dialog engine to move the conversation forward and eventually connect users with their desired service.</p><p>There are two closely related understanding problems here: figuring out what the user wants or their implied intentions, and figuring out what their preferences or slot values are. For example, when the user input is: ‘I like to fly to Shanghai tomorrow,’ we need to convert this into a frame event in the form of ‘book_flight(destination=Shanghai, date=…)’, where ‘book_flight’ is the intent and ‘Shanghai’ is the value for the destination slot, and so on.</p><p>Today these natural language understanding problems are generally solved by deep learning methods. This means we first prepare a labeled dataset, consisting of pairs of potential user utterance and corresponding frame events. Then we pass this dataset onto natural language understanding (NLU) training pipeline which turn this dataset into a production worthy model. The model is then used to convert user utterance into structured events.</p><p>Today, these natural language understanding problems are generally solved by deep learning methods. This involves first preparing a labeled dataset, which consists of pairs of potential user utterances and their corresponding frame events. Next, the dataset is fed to a natural language understanding (NLU) training pipeline to produce a production-worthy model. This model is then used to convert user utterances into structured events.</p><p>With recent advance in large language models, the amount of the labeled data required is reducing while the prediction accuracy is moving up. Unfortunately, we still don’t yet have 100% accurate language understanding technology. So launching a chatbot is not the end, but the beginning of iterative dialog understanding improvements. What we really need is maintainable accuracy: a dialog understanding model that can be fixed easily.</p><p>However, escalating every understanding issue to the dedicated NLU/ML team/pipeline for a fix is not a good option. The latency is too high to maintain a reasonable user experience. Asking the existing development team to become proficient in statistical learning-based natural language understanding is not practical. Beyond that, it will take a long time due to the steep learning curve. Asking them to be skilled in both fields is also challenging, as the statistical way of thinking involved in ML is a sharp departure from their deterministic modeling of the application. This greatly limits the number of teams that can create an effective conversational user interface and is partially responsible for the nonexistence of good conversational experiences, despite the widely claimed benefits for end-users.</p><p>Luckily, with the recent advances in NLU research, we can create a tool that hides all the statistical learning concepts and implementation, but can still be used to hot fix any understanding issues simply by providing a labeled example. Let’s use the implicature calculation problem to explain how nonparametric few shot methods can help us get here.</p><p>The starting point for the intent prediction problem is a set of labeled examples, {(x[i], y[i])…}, where x[i] is the ith user example utterance from all possible user utterances X and y[i] is the corresponding intent from the set of all possible intents a chatbot needs to understand.</p><p>The goal of the intent classification training is to produce a model, which is a function that can map any user utterance x into an intent y (for now, assuming there is a catch-all Other intent for ease of discussion). While this problem is well-studied in the past, it is not production-friendly: every time we add a new intent to the chatbot or just want to fix an understanding bug, we need both expertise and sizable labeled data to retrain the model, which is slow and costly.</p><p>However, by combining recent sample-efficient learning algorithms based on pretraining with the nonparametric approach, we can solve the problem in the following way: given a new user utterance x, we can find the correct understanding as follows. First, we use text retrieval to obtain a small set of example utterances that closely resemble x. Then, we use a text equivalency model E to find the best match example for x, and use the corresponding y as the structured understanding. The text equivalency model E, based on BERT, is used to determine if two sentences are the same. It can be pre-trained and then fine-tuned for any intents, even those not seen in the training dataset. This approach is straightforward to implement and can be used to quickly improve the understanding model, allowing for a better user experience without requiring extensive machine learning training.</p><p>With the tools and processes that can deliver maintainable accuracy by the existing development team, we can build effective CUI applications without the need for NLU/MU experts, whether internal or external. This can reduce the cost of building service chatbots overnight and potentially make the conversational experience a lot more accessible.</p><p>Reference:</p><ol><li>Xing Shi, Scot Fang, Kevin Knight, <a href="https://drive.google.com/file/d/1PRPx3lfJTtX-V23uTFOIPdB0LhQDBFq5/view" target="_blank" rel="noreferrer">A BERT-based Unified Span Detection Framework for Schema-Guided Dialogue State Tracking</a></li><li>Vahid Noroozi, Yang Zhang, Evelina Bakhturina, Tomasz Kornuta, <a href="https://arxiv.org/pdf/2008.12335.pdf" target="_blank" rel="noreferrer">A Fast and Robust BERT-based Dialogue State Tracker for Schema-Guided Dialogue Dataset</a></li></ol>',14),o=[r];function s(l,d,c,h,u,p){return a(),t("div",null,o)}const f=e(i,[["render",s]]);export{m as __pageData,f as default};
