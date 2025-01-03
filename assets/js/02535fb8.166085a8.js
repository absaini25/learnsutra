"use strict";(self.webpackChunklearnsutra=self.webpackChunklearnsutra||[]).push([[4614],{2141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Dynamic Programming/Questions/longest-common-subsequence","title":"Longest common subsequence","description":"Given two strings\xa0text1\xa0and\xa0text2, return\xa0the length of their longest\xa0common subsequence.\xa0If there is no\xa0common subsequence, return\xa00.","source":"@site/docs/Dynamic Programming/Questions/longest-common-subsequence.md","sourceDirName":"Dynamic Programming/Questions","slug":"/Dynamic Programming/Questions/longest-common-subsequence","permalink":"/docs/Dynamic Programming/Questions/longest-common-subsequence","draft":false,"unlisted":false,"editUrl":"https://github.com/absaini25/learnsutra/docs/Dynamic Programming/Questions/longest-common-subsequence.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Real-World Applications of Dynamic Programming","permalink":"/docs/Dynamic Programming/real-world-examples"},"next":{"title":"Maximal square in a matrix","permalink":"/docs/Dynamic Programming/Questions/maximal-square"}}');var s=t(4848),o=t(8453);const r={},c="Longest common subsequence",a={},l=[{value:"Solution",id:"solution",level:3},{value:"Python Code with Comments",id:"python-code-with-comments",level:3},{value:"Java Code with Comments",id:"java-code-with-comments",level:3},{value:"<strong>Explanation of the Approach</strong>",id:"explanation-of-the-approach",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"longest-common-subsequence",children:"Longest common subsequence"})}),"\n",(0,s.jsxs)(n.p,{children:["Given two strings\xa0",(0,s.jsx)(n.code,{children:"text1"}),"\xa0and\xa0",(0,s.jsx)(n.code,{children:"text2"}),", return\xa0*the length of their longest\xa0common subsequence.\xa0*If there is no\xa0common subsequence, return\xa0",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A\xa0subsequence\xa0of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example,\xa0",(0,s.jsx)(n.code,{children:'"ace"'}),"\xa0is a subsequence of\xa0",(0,s.jsx)(n.code,{children:'"abcde"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A\xa0common subsequence\xa0of two strings is a subsequence that is common to both strings."}),"\n",(0,s.jsx)(n.p,{children:"Example 1:"}),"\n",(0,s.jsx)(n.p,{children:'Input: text1 = "abcde", text2 = "ace"\nOutput: 3\nExplanation: The longest common subsequence is "ace" and its length is 3.'}),"\n",(0,s.jsx)(n.p,{children:"Example 2:"}),"\n",(0,s.jsx)(n.p,{children:'Input: text1 = "abc", text2 = "abc"\nOutput: 3\nExplanation: The longest common subsequence is "abc" and its length is 3.'}),"\n",(0,s.jsx)(n.p,{children:"Example 3:"}),"\n",(0,s.jsx)(n.p,{children:'Input: text1 = "abc", text2 = "def"\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.'}),"\n",(0,s.jsx)(n.p,{children:"Constraints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= text1.length, text2.length <= 1000"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text1"}),"\xa0and\xa0",(0,s.jsx)(n.code,{children:"text2"}),"\xa0consist of only lowercase English characters."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"python-code-with-comments",children:"Python Code with Comments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Get the lengths of the two input strings\n        m, n = len(text1), len(text2)\n\n        # Initialize a cache for memoization.\n        # cache[i][j] stores the LCS length for text1[i:] and text2[j:].\n        # Using None to differentiate between uncomputed values and computed results.\n        cache = [[None] * n for _ in range(m)]\n        \n        # Recursive helper function to compute the LCS length\n        def computeMaxLen(i: int, j: int) -> int:\n            # Base case: If either string is fully processed, LCS length is 0\n            if i == m or j == n:\n                return 0\n            \n            # If the result for this state is already computed, return it\n            if cache[i][j] is not None:\n                return cache[i][j]\n            \n            # If characters match, increment the LCS length and move diagonally\n            if text1[i] == text2[j]:\n                cache[i][j] = 1 + computeMaxLen(i + 1, j + 1)\n            else:\n                # Otherwise, take the maximum of two possibilities:\n                # 1. Skip the current character in text1\n                # 2. Skip the current character in text2\n                cache[i][j] = max(computeMaxLen(i + 1, j), computeMaxLen(i, j + 1))\n                \n            return cache[i][j]\n        \n        # Start the computation from the beginning of both strings\n        return computeMaxLen(0, 0)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With @cache annotation from ",(0,s.jsx)(n.code,{children:"functools"})," module."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        m, n = len(text1), len(text2)\n        \n        @cache\n        def computeMaxLen(i: int, j: int) -> int:\n            if i == m or j == n:\n                return 0\n            \n            if(text1[i] == text2[j]):\n                return 1 + computeMaxLen(i + 1, j + 1)\n            else:\n                return max(computeMaxLen(i + 1, j), computeMaxLen(i, j + 1))\n                        \n        return computeMaxLen(0, 0)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"java-code-with-comments",children:"Java Code with Comments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length(); // Get the length of the first string\n        int n = text2.length(); // Get the length of the second string\n        \n        // Initialize a 2D array for memoization.\n        // cache[i][j] stores the LCS length for text1.substring(i) and text2.substring(j).\n        Integer[][] cache = new Integer[m][n];\n        \n        // Helper function to compute the LCS length recursively\n        return computeMaxLen(0, 0, text1, text2, cache);\n    }\n\n    private int computeMaxLen(int i, int j, String text1, String text2, Integer[][] cache) {\n        // Base case: If either string is fully processed, LCS length is 0\n        if (i == text1.length() || j == text2.length()) {\n            return 0;\n        }\n\n        // If the result for this state is already computed, return it\n        if (cache[i][j] != null) {\n            return cache[i][j];\n        }\n\n        // If characters match, increment the LCS length and move diagonally\n        if (text1.charAt(i) == text2.charAt(j)) {\n            cache[i][j] = 1 + computeMaxLen(i + 1, j + 1, text1, text2, cache);\n        } else {\n            // Otherwise, take the maximum of two possibilities:\n            // 1. Skip the current character in text1\n            // 2. Skip the current character in text2\n            cache[i][j] = Math.max(\n                computeMaxLen(i + 1, j, text1, text2, cache),\n                computeMaxLen(i, j + 1, text1, text2, cache)\n            );\n        }\n\n        return cache[i][j];\n    }\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"explanation-of-the-approach",children:(0,s.jsx)(n.strong,{children:"Explanation of the Approach"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Recursive with Memoization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The solution uses a recursive function to explore all possible subsequences of the two strings."}),"\n",(0,s.jsx)(n.li,{children:"A 2D cache is used to store intermediate results to avoid redundant computations."}),"\n",(0,s.jsx)(n.li,{children:"If the characters at the current indices match, the length of the LCS increases by 1, and we move diagonally in the two strings."}),"\n",(0,s.jsx)(n.li,{children:"If the characters don\u2019t match, we explore the possibilities of skipping a character in either string and take the maximum."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Time Complexity"}),": (O(m \\times n))"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each state ((i, j)) is computed only once, and there are (m \\times n) states."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Space Complexity"}),": (O(m \\times n))"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For the cache. Additionally, recursion depth is (O(m + n))."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);