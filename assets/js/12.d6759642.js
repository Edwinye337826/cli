(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{450:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentry"}},[t._v("#")]),t._v(" Sentry")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/sentry-bg.jpg"),alt:"sentry"}})]),t._v(" "),a("h2",{attrs:{id:"什么是-sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sentry"}},[t._v("#")]),t._v(" 什么是 Sentry")]),t._v(" "),a("p",[t._v("Sentry 是一个开源的实时错误追踪系统，可以帮助开发者实时监控并修复异常问题。它主要专注于持续集成、提高效率并且提升用户体验。Sentry 分为服务端和客户端 SDK，前者可以直接使用它家提供的在线服务，也可以本地自行搭建；后者提供了对多种主流语言和框架的支持，包括 React、Angular、Node、Django、RoR、PHP、Laravel、Android、.NET、JAVA 等。同时它可提供了和其他流行服务集成的方案，例如 GitHub、GitLab、bitbuck、heroku、slack、Trello 等。")]),t._v(" "),a("p",[t._v("目前公司的前端项目也都在逐步应用上 Sentry 进行错误日志管理。")]),t._v(" "),a("p",[t._v("可以打开"),a("a",{attrs:{href:"https://sentry.workplus.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://sentry.workplus.io"),a("OutboundLink")],1),t._v("进行访问，若需要申请账号，请联系相关负责人。")]),t._v(" "),a("h2",{attrs:{id:"为什么使用-sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-sentry"}},[t._v("#")]),t._v(" 为什么使用 Sentry")]),t._v(" "),a("p",[t._v("任何项目发布上线，都会经过测试部门的检验。但往往线上问题，都存在偶发性、特殊性，或者难以重现。借助 Sentry，通过异常捕捉或者主动提交日志，可以更快地掌握异常的相关信息，大大减少排查问题成本。")]),t._v(" "),a("p",[t._v("一份异常日志，会包含用户的点击行为，网络请求等。同时可以通过 SourceMap 技术，对混淆压缩后的 js 文件进行反编译，精准定位错误代码位置。")]),t._v(" "),a("h2",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("p",[t._v("Sentry 官方支持多种前端框架，使用方式大同小异，下面以 Vue 为例：")]),t._v(" "),a("blockquote",[a("p",[t._v("更多的框架接入文档，请访问"),a("a",{attrs:{href:"https://docs.sentry.io/platforms/javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.sentry.io/platforms/javascript/"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"安装-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-sdk"}},[t._v("#")]),t._v(" 安装 SDK")]),t._v(" "),a("p",[t._v("要使用 Sentry，需先安装相应的 SDK，即"),a("code",[t._v("@sentry/browser")]),t._v("，至于"),a("code",[t._v("@sentry/integrations")]),t._v("，主要是用于跟 Vue 关联起来。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save  @sentry/browser @sentry/integrations\n")])])]),a("p",[t._v("@sentry/browser 将报告通过应用程序触发的任何被捕获的异常。此外，通过 Vue 的 errorHandler 钩子，可以定位到异常所在的组件。")]),t._v(" "),a("h3",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("p",[t._v("在入口文件敲入以下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Sentry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@sentry/browser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" VueIntegration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@sentry/integrations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dsn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://examplePublicKey@o0.ingest.sentry.io/0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  integrations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueIntegration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attachProps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样，Sentry 已经成功接入，但仅能上报全局上捕获的异常！")]),t._v(" "),a("p",[t._v("此外，VueIntegration 可以配置以下参数：\n：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue")]),t._v(" 可选的，如果不传入，则 window.Vue 必须存在；")]),t._v(" "),a("li",[a("code",[t._v("attachProps")]),t._v(" 可选的，默认为 true；若设置为 false，将不上报组件相关信息；")]),t._v(" "),a("li",[a("code",[t._v("logErrors")]),t._v(" 可选的，默认为 false；若设置为 true，若出现异常，Vue 的 logError 同样会输出到控制台。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("关于 logErrors")]),t._v(" "),a("p",[t._v("一旦启用 VueIntegration，异常将不会打印到开发者调试器的 console 中，若需要，请确保 logErrors 为 true。")])]),t._v(" "),a("h3",{attrs:{id:"主动上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动上报"}},[t._v("#")]),t._v(" 主动上报")]),t._v(" "),a("p",[t._v("偶尔需要对某些特殊功能或者关键性功能进行跟踪，此时可以使用 sentry sdk 提供的 API，主动上报日志。")]),t._v(" "),a("ul",[a("li",[t._v("captureEvent")]),t._v(" "),a("li",[t._v("captureMessage")]),t._v(" "),a("li",[t._v("captureException")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Sentry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Capture exceptions, messages or manual events")]),t._v("\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Good bye'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Manual'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  stacktrace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("通常使用以上 3 个 API 为主，详情其查看"),a("a",{attrs:{href:"https://github.com/getsentry/sentry-javascript/tree/master/packages/browser#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口用例"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"关于-dsn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-dsn"}},[t._v("#")]),t._v(" 关于 dsn")]),t._v(" "),a("p",[t._v("一个 dsn，大概是长下面的样子，每个项目的 dsn 都是唯一的：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http（不推荐）")]),t._v("\nhttp://d4c5b124775b2484ac6d4dbb48b@121.40.118.145:8080/232\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https（推荐）")]),t._v("\nhttps://d4c5b124775b2484ac6d4dbb48b@sentry.workplus.io/232\n")])])]),a("p",[t._v("在 Sentry 上创建项目后，将可获取到相应的 dsn。")]),t._v(" "),a("p",[t._v("需要注意的是，目前配置获取到的是 http 的 ip段 dsn，在一些以 https 访问的应用上，日志无法正常上报，所以，"),a("strong",[t._v("请确保使用 https 协议")]),t._v("。")]),t._v(" "),a("p",[t._v("如上，把"),a("code",[t._v("http://")]),t._v("协议改成"),a("code",[t._v("https://")]),t._v("，同时，"),a("code",[t._v("IP+端口")]),t._v("，改成域名访问地址"),a("code",[t._v("sentry.workplus.io")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"多环境区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多环境区分"}},[t._v("#")]),t._v(" 多环境区分")]),t._v(" "),a("p",[t._v("大多情况下，一个项目需要经过开发、测试到发布的阶段，而每个阶段，可能存在多种环境。")]),t._v(" "),a("p",[t._v("为了可以清晰地区分不同的环境，可以使用"),a("code",[t._v("configureScope")]),t._v("进行设置，如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Sentry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@sentry/browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set user information, as well as tags and further extras")]),t._v("\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureScope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("scope")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExtra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'battery'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_mode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4711'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scope.clear();")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果是主动上报的日志，可以通过拼装用户信息到日志标题中，用于快速区分，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 message 中带上用户id")]),t._v("\nSentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("登录异常-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  stacktrace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("关于开发阶段")]),t._v(" "),a("p",[t._v("开发阶段尽可能不要开启日志上报功能，除非需要处理特殊的事情，否则将会产生过多无谓的异常日志。可以通过"),a("code",[t._v("process.env.NODE_ENV")]),t._v("来判断，若为"),a("code",[t._v("development")]),t._v("，即不初始化 Sentry。")])]),t._v(" "),a("h2",{attrs:{id:"上传-sourcemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传-sourcemap"}},[t._v("#")]),t._v(" 上传 SourceMap")]),t._v(" "),a("p",[t._v("通过 w6s-cli 创建的项目，已经具备这样的功能（非默认），通过简单配置，即可实现上传功能，"),a("RouterLink",{attrs:{to:"/#sentry"}},[t._v("查看配置")]),t._v("。")],1),t._v(" "),a("p",[t._v("该功能是通过"),a("a",{attrs:{href:"https://github.com/getsentry/sentry-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sentry/webpack-plugin"),a("OutboundLink")],1),t._v("实现，其他非 w6s-cli 创建的项目，可以直接使用该插件来实现 sourceMap 文件上传，但请注意，"),a("strong",[t._v("请不要把 sourceMap 文件发布到生产环境")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);