module.exports = {
  "extends": "stylelint-config-standard",
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-order": [
      [{
        groupName: "layouts",
        emptyLineBefore: "always",
        order: "flexible",
        properties: [
          "position",
          "top",
          "bottom",
          "right",
          "left",
          "display",
          "align-items",
          "justify-content",
          "float",
          "clear",
        ]
      }, {
        groupName: "Box Model",
        emptyLineBefore: "always",
        order: "flexible",
        properties: [
          "margin",
          "margin-top",
          "margin-right",
          "margin-bogttom",
          "margin-left",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
        ]
      }, {
        groupName: "Visual",
        emptyLineBefore: "always",
        order: "flexible",
        properties: [
          "background",
          "background-position",
          "background-repeat",
          "background-size",
          "background-color",
          "background-clip",
          "border",
          "border-style",
          "border-width",
          "border-color",
          "border-top-style",
          "border-top-width",
          "border-top-color",
          "border-right-style",
          "border-right-width",
          "border-right-color",
          "border-bottom-style",
          "border-bottom-width",
          "border-bottom-color",
          "border-left-style",
          "border-left-width",
          "border-left-color",
          "border-outline",
          "border-radius",
          "box-shadow",
          "filter",
          "list-style",
          "opacity",
          "outline",
          "resize",
          "visibility",
          "animation",
          "transition",
        ]
      }, {
        groupName: "Font",
        emptyLineBefore: "always",
        order: "flexible",
        properties: [
          "color",
          "font-size",
          "font-family",
          "font-weight",
          "line-height",
          "text-align",
          "text-justify",
          "text-indent",
          "text-overflow",
          "text-decoration",
          "text-shadow",
          "white-space",
          "word-break",
        ]
      }, {
        groupName: "Misc",
        emptyLineBefore: "always",
        order: "flexible",
        properties: [
          "overflow",
          "overflow-x",
          "overflow-y",
          "cursor",
          "z-index",
        ]
      }], {
        "unspecified": "bottomAlphabetical"
      }
    ],
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["function", "for", "each", "include", "mixin", "define-mixin"]
    }]
  }
};
