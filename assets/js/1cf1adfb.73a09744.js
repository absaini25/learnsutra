"use strict";(self.webpackChunklearnsutra=self.webpackChunklearnsutra||[]).push([[6707],{6775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Stack/Monotonic Stack/next-larger-or-smaller-element","title":"Next Smaller/Larger Element","description":"Computing the Next Smaller Element (NSE) and Next Larger Element (NLE) involves determining for each element in an array the first smaller or larger element to its right. These problems are commonly solved using a monotonic stack for efficiency, ensuring \\\\(O(n)\\\\) time complexity.","source":"@site/docs/Stack/Monotonic Stack/next-larger-or-smaller-element.md","sourceDirName":"Stack/Monotonic Stack","slug":"/Stack/Monotonic Stack/next-larger-or-smaller-element","permalink":"/docs/Stack/Monotonic Stack/next-larger-or-smaller-element","draft":false,"unlisted":false,"editUrl":"https://github.com/absaini25/learnsutra/docs/Stack/Monotonic Stack/next-larger-or-smaller-element.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Line Sweep: A Logical Overview","permalink":"/docs/Miscleneous/line-sweep"},"next":{"title":"Previous larger/smaller element","permalink":"/docs/Stack/Monotonic Stack/previous-larger-or-smaller-element"}}');var l=t(4848),s=t(8453);const i={},c="Next Smaller/Larger Element",h={},o=[{value:"<strong>Next Smaller Element (NSE)</strong>",id:"next-smaller-element-nse",level:3},{value:"Goal:",id:"goal",level:4},{value:"Algorithm (Monotonic Stack Approach):",id:"algorithm-monotonic-stack-approach",level:4},{value:"Example (NSE):",id:"example-nse",level:4},{value:"<strong>Next Larger Element (NLE)</strong>",id:"next-larger-element-nle",level:3},{value:"Goal:",id:"goal-1",level:4},{value:"Algorithm (Monotonic Stack Approach):",id:"algorithm-monotonic-stack-approach-1",level:4},{value:"Example (NLE):",id:"example-nle",level:4},{value:"<strong>Key Observations</strong>",id:"key-observations",level:3},{value:"<strong>Code Implementation</strong>",id:"code-implementation",level:3},{value:"Next Smaller Element (NSE)",id:"next-smaller-element-nse-1",level:4},{value:"Next Larger Element (NLE)",id:"next-larger-element-nle-1",level:4},{value:"<strong>Applications</strong>",id:"applications",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"next-smallerlarger-element",children:"Next Smaller/Larger Element"})}),"\n",(0,l.jsxs)(n.p,{children:["Computing the ",(0,l.jsx)(n.strong,{children:"Next Smaller Element (NSE)"})," and ",(0,l.jsx)(n.strong,{children:"Next Larger Element (NLE)"})," involves determining for each element in an array the first smaller or larger element to its right. These problems are commonly solved using a ",(0,l.jsx)(n.strong,{children:"monotonic stack"})," for efficiency, ensuring (O(n)) time complexity."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"next-smaller-element-nse",children:(0,l.jsx)(n.strong,{children:"Next Smaller Element (NSE)"})}),"\n",(0,l.jsx)(n.h4,{id:"goal",children:"Goal:"}),"\n",(0,l.jsx)(n.p,{children:"For each element in the array, find the first element to the right that is smaller."}),"\n",(0,l.jsx)(n.h4,{id:"algorithm-monotonic-stack-approach",children:"Algorithm (Monotonic Stack Approach):"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Initialize a stack"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The stack will store indices of elements in the array."}),"\n",(0,l.jsxs)(n.li,{children:["It will maintain a ",(0,l.jsx)(n.strong,{children:"monotonic increasing order"})," of element values (from top to bottom)."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Iterate through the array from right to left"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For each element:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["While the stack is not empty and the element at the top of the stack is ",(0,l.jsx)(n.strong,{children:"greater than or equal to"})," the current element, ",(0,l.jsx)(n.strong,{children:"pop"})," the stack.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'This ensures that the stack only contains indices of elements that could be the "next smaller" for future elements.'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["If the stack is not empty after the above step, the ",(0,l.jsx)(n.strong,{children:"top of the stack"})," points to the ",(0,l.jsx)(n.strong,{children:"next smaller element"})," for the current element."]}),"\n",(0,l.jsx)(n.li,{children:"Push the current element's index onto the stack."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For every element, if no smaller element exists, the result will be (-1)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h4,{id:"example-nse",children:"Example (NSE):"}),"\n",(0,l.jsx)(n.p,{children:"Input: ([4, 2, 1, 5, 3])"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Index"}),(0,l.jsx)(n.th,{children:"Element"}),(0,l.jsx)(n.th,{children:"Stack (Top to Bottom)"}),(0,l.jsx)(n.th,{children:"NSE"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"[4]"}),(0,l.jsx)(n.td,{children:"-1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"[4, 3]"}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"[2]"}),(0,l.jsx)(n.td,{children:"-1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"[2, 1]"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"[2, 1, 0]"}),(0,l.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Result: ([2, 1, -1, 3, -1])"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"next-larger-element-nle",children:(0,l.jsx)(n.strong,{children:"Next Larger Element (NLE)"})}),"\n",(0,l.jsx)(n.h4,{id:"goal-1",children:"Goal:"}),"\n",(0,l.jsx)(n.p,{children:"For each element in the array, find the first element to the right that is larger."}),"\n",(0,l.jsx)(n.h4,{id:"algorithm-monotonic-stack-approach-1",children:"Algorithm (Monotonic Stack Approach):"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Initialize a stack"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The stack will store indices of elements in the array."}),"\n",(0,l.jsxs)(n.li,{children:["It will maintain a ",(0,l.jsx)(n.strong,{children:"monotonic decreasing order"})," of element values (from top to bottom)."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Iterate through the array from right to left"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For each element:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["While the stack is not empty and the element at the top of the stack is ",(0,l.jsx)(n.strong,{children:"less than or equal to"})," the current element, ",(0,l.jsx)(n.strong,{children:"pop"})," the stack.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'This ensures that the stack only contains indices of elements that could be the "next larger" for future elements.'}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["If the stack is not empty after the above step, the ",(0,l.jsx)(n.strong,{children:"top of the stack"})," points to the ",(0,l.jsx)(n.strong,{children:"next larger element"})," for the current element."]}),"\n",(0,l.jsx)(n.li,{children:"Push the current element's index onto the stack."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For every element, if no larger element exists, the result will be (-1)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h4,{id:"example-nle",children:"Example (NLE):"}),"\n",(0,l.jsx)(n.p,{children:"Input: ([4, 2, 1, 5, 3])"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Index"}),(0,l.jsx)(n.th,{children:"Element"}),(0,l.jsx)(n.th,{children:"Stack (Top to Bottom)"}),(0,l.jsx)(n.th,{children:"NLE"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"[4]"}),(0,l.jsx)(n.td,{children:"-1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"5"}),(0,l.jsx)(n.td,{children:"[3]"}),(0,l.jsx)(n.td,{children:"-1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"[3, 2]"}),(0,l.jsx)(n.td,{children:"5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"[3, 1]"}),(0,l.jsx)(n.td,{children:"5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"[3, 0]"}),(0,l.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Result: ([5, 5, 5, -1, -1])"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"key-observations",children:(0,l.jsx)(n.strong,{children:"Key Observations"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Stack Property"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"For NSE, the stack ensures the elements in it are smaller than the current element (monotonic increasing stack)."}),"\n",(0,l.jsx)(n.li,{children:"For NLE, the stack ensures the elements in it are larger than the current element (monotonic decreasing stack)."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Efficiency"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Each element is pushed onto and popped from the stack at most once, ensuring (O(n)) time complexity."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Edge Cases"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If the array is sorted in increasing order, all elements will have (-1) as their NSE."}),"\n",(0,l.jsx)(n.li,{children:"If the array is sorted in decreasing order, all elements will have (-1) as their NLE."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"code-implementation",children:(0,l.jsx)(n.strong,{children:"Code Implementation"})}),"\n",(0,l.jsx)(n.h4,{id:"next-smaller-element-nse-1",children:"Next Smaller Element (NSE)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def nextSmallerElements(arr):\n    n = len(arr)\n    nse = [-1] * n\n    stack = []\n    \n    for i in range(n - 1, -1, -1):  # Traverse from right to left\n        while stack and arr[stack[-1]] >= arr[i]:\n            stack.pop()\n        if stack:\n            nse[i] = arr[stack[-1]]\n        stack.append(i)\n    \n    return nse\n"})}),"\n",(0,l.jsx)(n.h4,{id:"next-larger-element-nle-1",children:"Next Larger Element (NLE)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"def nextLargerElements(arr):\n    n = len(arr)\n    nle = [-1] * n\n    stack = []\n    \n    for i in range(n - 1, -1, -1):  # Traverse from right to left\n        while stack and arr[stack[-1]] <= arr[i]:\n            stack.pop()\n        if stack:\n            nle[i] = arr[stack[-1]]\n        stack.append(i)\n    \n    return nle\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"applications",children:(0,l.jsx)(n.strong,{children:"Applications"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Histogram Problems"}),": Computing NSE is crucial for solving the largest rectangle in a histogram."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Stock Span/Price Problems"}),": NLE is used to determine the next higher price in stock span problems."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Sliding Window Problems"}),": NLE and NSE help identify max/min in subarrays efficiently."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);