import{_ as e,c as t,o as i,a4 as o}from"./chunks/framework.BGFi9fUZ.js";const u=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"reference/providers/overview.md","filePath":"reference/providers/overview.md","lastUpdated":1682328852000}'),r={name:"reference/providers/overview.md"},a=o('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>The goal of OpenCUI is to make it easy to build conversational user interfaces for services. Following best practices, all services on OpenCUI are modeled in two parts: interfaces and implementations, so that the producers and consumers of these functionalities can be developed independently. More importantly, conversational behaviors are based only on these interfaces, which makes it possible to switch to different implementations.</p><p>The implementations of interfaces, which we call providers, are available in two kinds: native providers and scripted providers. Native providers are implementations developed in Java/Kotlin, and system-level interfaces are typically implemented in the form of native providers. Scripted providers allow builders to implement in other script languages, such as SQL or JSON. Application-related interfaces, which we call services, are typically implemented in scripted providers.</p><p>Once you have a provider and the corresponding backend running, you need to wire this provider to its service interface in your chatbot, which allows the chatbot to communicate with the backend.</p><h2 id="native-providers" tabindex="-1">Native providers <a class="header-anchor" href="#native-providers" aria-label="Permalink to &quot;Native providers&quot;">​</a></h2><p>Native providers are developed in the form of extensions, which are software modules developed to supply one or more providers to the platform. OpenCUI is implemented in Kotlin, so these extensions are naturally developed as standard Kotlin modules using standard toolchains like Gradle and popular framework Spring Boot. Extensions are developed in four simple steps:</p><ol><li>Define the interface on the OpenCUI platform (builders can only do this at the application level for services).</li><li>Generate the code stubs for these interfaces as a basis for implementation.</li><li>Develop the extension. You are encouraged to contribute your extension to opencui/extensions.</li><li>Register each provider developed in the extension on the platform so that it can be wired to chatbots and provide its version of implementation to these chatbots.</li></ol><p>These native providers can be registered as external, in which case the builder does not need to make its source available to the OpenCUI platform. However, if a chatbot relies on even one external provider, it cannot be hosted by OpenCUI. Instead, the builder needs to export the generated Kotlin project and build and deploy it according to their DevOps rules. Regardless of whether the providers are external, extension builders need to register their providers on the platform so that we can generate the frontend code for them.</p><p>For more details, see <a href="./native.html">Native Provider</a> or <a href="./extension.html">extension</a>.</p><h2 id="scripted-providers" tabindex="-1">Scripted providers <a class="header-anchor" href="#scripted-providers" aria-label="Permalink to &quot;Scripted providers&quot;">​</a></h2><p>Sometimes, the backend implementations of a service are accessible through some scripted language like SQL or JSON instead of native code. The providers for these backends, known as scripted providers, come in two types: hosted provider type and stub provider type.</p><ul><li>OpenCUI currently supports only one hosted provider: PostgreSQL. When we say &#39;hosted,&#39; we mean that OpenCUI manages the backend implementation, which includes the database, tables, and SQL-based function implementation.</li><li>For stub providers, OpenCUI does not host any data or have explicit knowledge about the data schema. Instead, OpenCUI handles function invocation through them. There will be many stub provider types available, including a Google Sheets-based provider.</li></ul><p>Scripted providers are typically defined in three steps:</p><ol><li>Define the service application-dependent interface on the platform.</li><li>Decide on the provider type you want. The provider type determines how to access the actual data source and what scripting language to use for each function implementation declared in the service interface.</li><li>Use the scripting language required by the provider type to implement the service functions. Functions can also be implemented in Kotlin, known as native functions.</li></ol><p>See <a href="./postgrest.html">PostgreSQL provider</a> for details.</p>',15),n=[a];function s(d,l,p,c,h,v){return i(),t("div",null,n)}const f=e(r,[["render",s]]);export{u as __pageData,f as default};
