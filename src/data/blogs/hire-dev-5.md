---
title: 'How To Pick A Good Software Developer (without knowing how to code) - Best Practices'
date: "2020-06-29 08:00:00"
author: 'Ty Hitzeman'
format: 'gallery'
images: ['../images/github-prs.png', '../images/github-tests.png', '../images/github-badges.png', '../images/github-wiki.png']
category: hiring
tags: 
    - non-technical
custom_slug: '/hire-dev-best-practices'
---

There are coding best practices that apply to all software projects. Finding out if a developer follows these practices is a decent way to evaluate their work quality without having to know how to code. Browse your dev's GitHub portfolio and find a project that she has released to users (not a little pet project). Then look for these quality clues:

### Tests
Devs write tests to confirm that their code works. Untested code is more likely to contain bugs. Find out if the dev has written tests by clicking though the folders in their GitHub project and looking for one named __tests__. Peek into that folder and make sure there are some files within the test folder. If so, the dev tests her code -- yay! This quick check doesn't confirm that the tests work, but it at least indicates whether she recognizes the value of testing.

Some projects include icons in the __README.md__ file (which is shown on the front-page of a GitHub project) to indicate the code's tests and resiliency. Simply having those buttons is a good enough indication that a dev puts in the effort the maintain code quality.  

### Pull Requests
Pull requests allow devs to safely introduce new code to a project. Without them, it becomes difficult to isolate and replicate issues. Look for the __Pull Requests__ tab in their project and make sure it's not empty.

### Documentation
Working code is often more important than perfect documentation. However, a dev that is willing to put in some effort to document their project makes it easier for users and other developers to get started. To quickly assess whether a dev makes any documentation effort, simply look for the existence of a __README.md__ file in their GitHub project (or just scroll down from their main page and see if anything is written). Also look for through __Wiki__ section. Read through them and see if you can get a sense of what the project is, how to get started, and what to do if you run into issues.

### Bonus: Do One Thing*
(*This tactic requires some familiarity with reading code)

Writing code sections that do more than one thing is a cardinal sin. It makes code harder to read and test, which makes it more likely to contain bugs. It also makes it difficult to adapt the code as the project evolves, slowing down development time. To approximate whether a dev has developed this bad habit, open up a few of their files (that don't start with a dot in front of them) and look at the different sections. If they're consistently really big, they likely do more than one thing. 

