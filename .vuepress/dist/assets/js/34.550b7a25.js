(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{477:function(e,s,t){"use strict";t.r(s);var a=t(8),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"epochs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epochs"}},[e._v("#")]),e._v(" Epochs")]),e._v(" "),t("p",[e._v("Often in the SDK, we would like to run certain code every-so often. The purpose of the "),t("code",[e._v("epochs")]),e._v(" module is to allow other modules to set that they would like to be signaled once every period, and then execute code after this period has taken place. In other words, "),t("code",[e._v("epochs")]),e._v(" creates a generalized epoch interface to other modules so that they can easily be signalled after set periods of time.")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"queries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),t("h3",{attrs:{id:"epoch-infos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epoch-infos"}},[e._v("#")]),e._v(" epoch-infos")]),e._v(" "),t("p",[e._v("Query the currently running epochInfos")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("osmosisd query epochs epoch-infos\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Example")]),e._v(" "),t("p",[e._v("An example output:")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("epochs:\n- current_epoch: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"183"')]),e._v("\n  current_epoch_start_height: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2438409"')]),e._v("\n  current_epoch_start_time: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-12-18T17:16:09.898160996Z"')]),e._v("\n  duration: 86400s\n  epoch_counting_started: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  identifier: day\n  start_time: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-06-18T17:00:00Z"')]),e._v("\n- current_epoch: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"26"')]),e._v("\n  current_epoch_start_height: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2424854"')]),e._v("\n  current_epoch_start_time: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-12-17T17:02:07.229632445Z"')]),e._v("\n  duration: 604800s\n  epoch_counting_started: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  identifier: week\n  start_time: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2021-06-18T17:00:00Z"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])])]),e._v(" "),t("h3",{attrs:{id:"current-epoch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-epoch"}},[e._v("#")]),e._v(" current-epoch")]),e._v(" "),t("p",[e._v("Query the current epoch by the specified identifier")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("osmosisd query epochs current-epoch [identifier]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Example")]),e._v(" "),t("p",[e._v("Query the current "),t("code",[e._v("day")]),e._v(" epoch:")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("osmosisd query epochs current-epoch day\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Which in this example outputs:")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("current_epoch: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"183"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);