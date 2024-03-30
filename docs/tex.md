---
title: "Why Tex is Crap"
desc: "Why I am unable to can deal with TeX and the absolute dinosaur that it is. To be clear the problem is not the Math part, it's the English part."
date: 25 September 2022
image: "/docs/tex.png"
caption: "TeX icon. It's literally written in spongebob case"
---

This is not just about LaTex, but the Tex system as a whole, including [ConTexT](https://wiki.contextgarden.net/Main_Page)

## Convenience
### Someone Else's
It is worth understanding first and foremost that LaTex is not some specifically designed language. It is a set of **macros** that Donald Knuth wrote for his book, *The Art of Computer Programming*. It is a set of macros that he wrote for his own use, and then released over and above Tex.

> Tex: is a typesetting system. LaTex is a set of macros to program Tex.

This inherently means, it was created FOR HIM and his specific use in 1977. It was not created for you, or me, or anyone else. It was created for him. And we know very well that its difficult to adapt to someone else's idiosyncrasies.

### Seperation of Concerns
In the web at least HTML & CSS offer a clear seperation of concerns. HTML is for content and CSS is for styling. This is not the case with Tex. Tex is a language for both content and styling. It means that you have to write a lot of code to do simple things. For example, to write a simple document with a title, author and date, you have to write the following

```tex
\documentclass{article}
\title{My First Document}
\author{Author's Name}
\date{Today}
\begin{document}
   \maketitle
   Hello World!
\end{document}
```

This is a lot of code for a simple document. Compare this to Markdown

```md
# My First Document
*Author's Name*
Today

Hello World!
```

## Turing Completeness
Latex IS complicated. This is not up for debate. Consider the fact that the most used programming language in the world for machine learning and quantum computing is Python. And even Python has less syntax than Latex. And yet for all it's complexity Tex can still not parse Natural Language Math. Something both Sympy Python and Matlab can do.

TeX is Turing complete which means now instead of just writing a 20 page thesis you start coding latex packages like `tikz-timing`, `standalone`, `svn-multi` etc. But that aside, by virtue of being Turing Complete, Tex is subject to [Rice's Theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem). Which means given a general document `d` and a tex source `t`, it is undecidable whether `t` will compile to `d`. I'm gonna go out on a limb and say that for academic documentation, this is not a good thing.

### Compatibility
This additonally also implies that unless using a language which is equivalent in grammar to Tex or in output isomorphic to `dvi`/`pdf` it is impossible to write a compiler from tex to any other language. This however has not been the case for other languages like SGML which are simple and still fully forwards and compatible with HTML5

### Error Tolerance
Carrying forward from HTML we come to error tolerance. HTML is a very error tolerant language. You could replace a lot of statements with gibberish and it would render approximately ok. Whereas in Tex a stray "SPACE" can cause the entire document to catastrophically explode.

## Syntax Issues
### Self Consistency
Tex is not self consistent. It is not a single language. It is one big clusterfuck of hacks.

- We have `\eq` and `\neq`, so if `\in` why `\notin` and not `\nin`
- Why are there only 4 Hebrew letters $(\aleph, \beth, \gimel, \dalet)$, where are the rest?
- Why is `\sqrt` pre-defined but not `\abs`
- Why is `\Re` and `\Im` but `\mathbb R` and `\mathbb C`
- Why do remaps even exist? So sometimes `ff` being left arrow makes Affine: `A&larr;ine` and Diffraction: `Di&larr;raction`

### Some specifc Misc problems
Unintuitive Syntax: `\subtitle * &lcub;something&rcub;` WHAT IN GODS GREEN EARTH IS THE "*" DOING THERE.

After like 2 minutes of any equation there is just one big mess of `&lcub;&lcub;&lcub;&lcub;&lcub;&lcub;`. How am I even supposed to properly match brackets here?

Centering: `\begin&lcub;center&rcub;`, `\centering`, `\Centering`, and of course `|c|`

`\textbf&lcub;takes stuff in&rcub;` but `\Huge takes stuff outside declaration`

`\item` takes stuff outside but tables take stuff in `& &lcub;here&rcub; & \\`

### Rendering Issues
- You cannot change the DPI
- Images auto rescale unless they are PDFs. Really..? -\_-
- SVGs and therefore none of the modern fonts/diagrams are supported
- It is EIGHT BLOODY GIGABYTES. Chrome is 300MB (Best part is that like 50% of HUMANITY already has it.) and some Javascript to literally rewrite the compiler may be 100s of kbs. Even all of libre office is like 500MB. **WHY IS THIS 8GB?????**
- Images are inconsistent about `[h]`, `[H]`, `[ht]` and `[htb]` and `[H]` is not even the default


## Evolution
To all senior academics using Tex now. I can understand why you use it. And I'm not against that. But it is painful for all involved parties to enfore it even on students unless the source of the document is required. If you only need a PDF, let them use whatever they want to

You probably started writing Technical documents before I was born, which means that was before: Laser Printers, The World Wide Web and Javascript existed. In fact that was even before LLVM existed let alone Markdown. The world has changed and does the way we write documents need to

This &darr; is what LaTex was created for

![Linotype Machine](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Linotype_machines%2C_Anthony_Hordern_and_Sons_department_store%2C_c._1935.jpg/1280px-Linotype_machines%2C_Anthony_Hordern_and_Sons_department_store%2C_c._1935.jpg)

and this &darr; is what it is still used for

![Global Internet Backbone](https://upload.wikimedia.org/wikipedia/commons/8/89/Submarine_cable_map_umap.png)

### Non-Arguments
"But Manav you are resistant to change. Just learn something new!".

I will learn something completely perfectly well if it makes sense. I learnt: Rust, Haskell, Javascript, C and C++ all over the last 10 years. I'm not resistant to change. I'm resistant to change for the sake of change. I'm resistant to change for the sake of change when it is not an improvement. I'm resistant to change when it is not an improvement and it is forced upon me.

I am not resistant to change. I learned everything I had to along my way. You are resistant to change. You are resistant to change because you are still using a 45 year old technology that was created for a completely different purpose and are forcing it on me because YOU don't want to change.

### Pretentiousness
Latex is also Pretentious, its very deliberately unhelpful. The following is the output of `man latex`

```bash
latex [first-line]

This manual page is a mere skeleton.

The LaTeX language is described in the book LaTeX - A Document Preparation System. LaTeX is a TeX macro package, not a modification to the TeX source program, so all the capabilities described in tex(1) are present.
```

Ok thanks man. I'll just go read a 300 page book to learn how to write a document. I'm sure that's a good use of my time. Also very helpful manual page. I'm sure I'll be able to write a document with that.

I'm not salty. This is Groff (GNU Troff) which is a typesetting system that is older than Latex just for reference

```bash
groff [-abcCeEgGijklNpRsStUVXzZ] [-d  ctext] [-d  string= text] [-D  fallback-encoding] [-f  font-family] [-F  font-directory] [-I  inclusion-directory] [-K  input-encoding] [-L  spooler-argument] [-m  macro-package] [-M  macro-directory] [-n  page-number] [-o  page-list] [-P  postprocessor-argument] [-r  cnumeric-expression] [-r  register= numeric-expression] [-T  output-device] [-w  warning-category] [-W  warning-category] [file . . .] groff -h groff --help groff -v [option . . .] [file . . .] groff --version [option . . .] [file . . .]<br/>

groff is the primary front end to the GNU roff document formatting system. GNU roff is a typesetting system that reads plain text input files that include formatting commands to produce output in PostScript, PDF, HTML, DVI, or other formats, or for display to a terminal. Formatting commands can be low-level typesetting primitives, macros from a supplied package, or user-defined macros. All three approaches can be combined. If no file operands are specified, or if file is “-”, groff reads the standard input stream.
```


### Alternatives
Markdown, with some preprocessing scripts. You won't even know the difference.

`\end&lcub;document&rcub;`