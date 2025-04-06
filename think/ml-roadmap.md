<!-- ## Baseline
- What is Linear Regression?
- Going from Linear Regression to Ridge Regression by adding L2 regularization
- Converting between Regression and Classification

## Approaching the line of Abstraction
- What is a Support Vector Machine?
- Going from Ridge Regression to Simple SVM
- Going from Simple SVM to Infinite SVM (RBF)
- Infinite methods to kernel methods

> Paper: Infinite Svm to Kernel methods are best function approximators
> Paper: Universal Approximation Theorem

## Neural Networks
- What are Perceptrons?
- What are Multilayer Perceptrons?
- Equivalence of Neural Networks and Support Vector Machines
- Deep Learning) -->

Building up the basics of ML, from the ground up.

# Basics
### Linear Regression
When we have multiple data points with multiple values of X, y; how does one generalise to points in the future with a straight line.

> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2992018/

- NN = SVM https://ar5iv.labs.arxiv.org/html/2111.06063
- UAT https://cognitivemedium.com/magic_paper/assets/Hornik.pdf
- Linear to Ridge, Ridge to Lasso https://towardsdatascience.com/from-linear-regression-to-ridge-regression-the-lasso-and-the-elastic-net-4eaecaf5f7e6
-

Linear Regression to Ridge Regression
Ridge Regression to Simple SVM
Simple SVM to infinite SVM (RBF)
Infinite methods to kernel methods
Infinite Svm to Kernel methods are best function approximators 2111.06063 (edited)
Perceptrons


## Double Descent
Models first underfit, then fit, then overfit but then again start to fit well. This is called double descent

- https://arxiv.org/pdf/1912.02292

## Regularisation
normally training is stopped when loss stabilises
these guys show what happens when you dont stop training
https://mathai-iclr.github.io/papers/papers/MATHAI_29_paper.pdf

# LLMs
- https://transformer-circuits.pub/2023/monosemantic-features

# MAYBE LLMs?
- AWQ https://ar5iv.labs.arxiv.org/html/2306.00978
- Flash Attention https://github.com/Dao-AILab/flash-attention
