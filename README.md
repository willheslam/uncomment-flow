# uncomment-flow
Turns flow comment syntax into pure flow syntax.

See [the flow blog](flowtype.org/blog/2015/02/20/Flow-Comments.html) for flow comment syntax. This is intended to be paired with the [flow comments babel plugin](https://github.com/babel-plugins/babel-plugin-flow-comments) in order to fix problems with comments having their position correctly restored in otherwise 'lossless' code transforms.

Comments are not first class citizens in current JS ASTs so until a CST or appropriately detailed AST is invented, this will turn your pretend flow into true flow so it can be correctly transformed by babel.