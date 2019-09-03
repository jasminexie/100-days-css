# 013

Time taken: ~1.5hrs

This took longer than I expected...

Things I learnt:

*  According to MDN:
    
    <quote>
    The `visibility` CSS property shows or hides an element without changing 
    the layout of a document. 
    </quote>
    
    Elements with `visibility: hidden` still occupy space. But unlike
    `opaity: 0`, the element will not respond to events.
    
    `visibility` can be used with transition but `display` ignores it!
    
    Child elements will inherit this property.
    
This SO post
<https://stackoverflow.com/questions/272360/does-opacity0-have-exactly-the-same-effect-as-visibilityhidden>
explains it:

Additional effects -
1. Collapses the space that the element would normally occupy
2. Responds to events (e.g., click, keypress)
3. Participates in the taborder


|                     | Collapse | Events | Taborder  | Can have visible children |
|---------------------|----------|--------|-----------|---------------------------|
| opacity: 0          | No       | Yes    | Yes       | No                        |
| visibility: hidden  | No       | No     | No        | Yes (visibility: visible) |
| visibility: collapse| *        | No     | No        | Yes (visibility: visible) |
| display: none       | Yes      | No     | No        | No                        |

\* Yes inside a table element, otherwise No.

Additionally, with `opacity: 0` Flash objects are rendered, and sprite's
constructor is triggered, but with others it won't.

Accessibility readers will read items with `opacity: 0`, but not those with
`visibility: hidden` or `display: none`.

Using opacity, you can not make a child element more opaque than its parent.
Elements with opacity create new stacking context.
