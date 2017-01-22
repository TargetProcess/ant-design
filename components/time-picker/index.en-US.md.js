webpackJsonp([123,210],{

/***/ 918:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "By clicking the input box, you can select a time from a popup panel."
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "TimePicker",
	    "filename": "components/time-picker/index.en-US.md"
	  },
	  "description": [
	    "section",
	    [
	      "p",
	      "To select/input a time."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ]
	  ],
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "hr"
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'13:30:56'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
	      },
	      [
	        "code",
	        "import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />"
	      ]
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "Note: ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        " is renamed to ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        " after 0.11."
	      ]
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "defaultValue"
	          ],
	          [
	            "td",
	            "to set default time"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://momentjs.com/"
	              },
	              "moment"
	            ]
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "value"
	          ],
	          [
	            "td",
	            "to set time"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://momentjs.com/"
	              },
	              "moment"
	            ]
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "placeholder"
	          ],
	          [
	            "td",
	            "display when there's no value"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "\"Select a time\""
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onChange"
	          ],
	          [
	            "td",
	            "a callback function, can be executed when the selected time is changing"
	          ],
	          [
	            "td",
	            "function(time: moment, timeString: string): void"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "format"
	          ],
	          [
	            "td",
	            "to set the time format"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "\"HH:mm:ss\"、\"HH:mm\"、\"mm:ss\""
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "disabled"
	          ],
	          [
	            "td",
	            "determine whether the TimePicker is disabled"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "disabledHours"
	          ],
	          [
	            "td",
	            "to specify the hours that cannot be selected"
	          ],
	          [
	            "td",
	            "function()"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "disabledMinutes"
	          ],
	          [
	            "td",
	            "to specify the minutes that cannot be selected"
	          ],
	          [
	            "td",
	            "function(selectedHour)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "disabledSeconds"
	          ],
	          [
	            "td",
	            "to specify the seconds that cannot be selected"
	          ],
	          [
	            "td",
	            "function(selectedHour, selectedMinute)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "hideDisabledOptions"
	          ],
	          [
	            "td",
	            "hide the options that can not be selected"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "getPopupContainer"
	          ],
	          [
	            "td",
	            "to set the container of the floating layer, while the default is to create a div element in body"
	          ],
	          [
	            "td",
	            "function(trigger)"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "addon"
	          ],
	          [
	            "td",
	            "called from timepicker panel to render some addon to its bottom"
	          ],
	          [
	            "td",
	            "function"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ]
	      ]
	    ],
	    [
	      "style",
	      ".code-box-demo .ant-time-picker { margin: 0 8px 12px 0; }"
	    ]
	  ]
	};

/***/ }

});