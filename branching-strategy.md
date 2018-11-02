# Branching Strategy

As teams get larger and more integrated, different ideas can often become a point of friction as they may lead to systems that are not technically compatible. The ideas behind how we structure our code and work on enhancements is the foundation of how we create build pipelines that support these ideas.

We now have multiple teams from multiple organisations all now working towards common software solutions and we are experiencing these friction points.

The goal of this document is to answer the question, what is our branching strategy?

## Striving for simplicity

At all times, we want simplicity. So simple, that how we branch and release our code should be easily understandable to people unfamiliar with our way.

To maintain simplicity, we will base our strategy off these core ideas:

*   The master branch is our production. It is the primary up to date source and always maintained to a high quality standard.
*   All new features and bug fixes are based off master in to feature branches.
*   You merge your features in to master through pull requests

## Maintaining master

Your master branch is your most important store of source code. It should always pass tests, always be deployable and always be up to date. All changes to your application are created from your master branch.

It stands to reason that maintaining master to the highest levels of quality is our primary goal and we can create policies to help maintain this quality.

Your branching policy must …

*   Require pull requests to merge code. You never commit directly to master
*   Add reviewers when you create a pull request
*   Require pull requests to pass defined build steps before merging

![](/images/github-settings.png)

## Feature branches

Create your features and other software changes in feature branches that are based on master. Your feature will be merged back in to master with a pull request.

![](/images/branch-3.svg)

### Naming your feature branches with well known conventions

Your project should establish some well known naming conventions for how you name your branches. If I use `feature/id` and other team members use`feat/id` or `features/name-of-feature`, your sense of cohesion degrades and it can become difficult to follow what is going on.

Here are some well known defaults that we use …

*   `feat/issueId-name-of-change`
*   `fix/issueId-name-of-change`
*   `docs/issueId-name-of-change`
*   `ops/issueId-name-of-change`
*   `chore/issueId-name-of-change`

If you are using tools like [conventional commits](https://conventionalcommits.org/), it would pay dividends to name things consistently with the tooling that your project has selected.

### feat/issue-762 vs feat/issue-762-update-button-label vs feat/update-button-label

One thing to strive for is naming branches to easily understand what change that brach contains. A name like `feat/issue-762` is very unique and will allow you to look up what that branch is intended for. However, people can loose track of what issue number is allocated to a particular change request and they will have to refer back to the source issue.

Naming conventions like `feat/update-button-label` help reduce this by including the name of the issue in the branch so that the intent of the change is shown. But it loses the link back to the issue management system.

A naming convention like `feat/issue-762-update-button-label` is a good compromise. It lets you link back to the issue management system and also provides a description of the intended change.

Just remember, it is not a requirement to have one branch to address all the requested changes of an issue, it can be broken down in to smaller changes in multiple branches. For example `feat/issue-762-update-button-label` and `feat/issue-762-change-button-confirm-message`. This may lead to higher quality reviews.


## Pull Requests

When you are ready to have your feature merged back in to master, you will create a pull request. Great pull requests are the foundation of great software. A great pull request isn’t so much about the code as much is it is about the reviewers. We want to do all we can to help the reviewer without burdening the mechanism with heavy processes.

*   Ensure all tests and automated build steps are green
*   Use labels to help reviewers
*   Use templates to help guide your project to high quality reviews
*   Keep things small
*   Squash and merge
*   Add reviewers to your PR

It is a good practice to use labels to inform the reviewer of the status of a PR. For example, you may want to make a PR to start the build and test process to ensure that the PR will be in a mergeable state. You don’t want this merged and you are still doing some work on it. You may consider adding a WIP (Work in Progress) and DO NOT MERGE labels to help inform people of where this PR is at. It is also possible to bootstrap a project with a set of well known labels to help get things up and running.

We also recommend adding templates for pull requests to help prompt people to help achieve higher quality reviews. Prompting for screen shots or links to the source issue may help the reviewer understand your change. Reviewers aren’t there to criticise someone’s work. They are there to help provide guidance to increase the quality of a change. No one person can know everything and leveraging good quality pull requests will help leverage the combined experience of the team. Likewise, templates for creating issues can also be added.


## Maintaining clean commit histories

To assist in identifying changes to our codebase, we strive to maintain clean commit histories

To help in this ends, we prefer to rebase over merge and to squash and merge where possible.


## Environments

#### Production

If your software is actually being used, chances are you will have multiple environments. Production will always be sourced from the master branch.

#### Staging

A staging environment is also a common practice where the upcoming change to production can be reviewed in a replica environment. Once the changes have been checked for quality in staging, you can release the changes to production. This can be accomplished with a blocking step in the build system that will await for the quality to be verified and approved for release. This will mean that there is only one branch for staging and production

![](/images/branch-2.svg)￼

#### QA environments

It may be possible to dynamically create QA environments for every feature branch. You can create these if the build step has passed and destroyed when the branch has been merged. There is overhead in creating and maintaining this mechanism so you will have to consider the complexity versus the reward for dynamic QA environments.

![](/images/branch-1.svg)

## Further reading

*   [Connventional Commits](https://conventionalcommits.org/)
*   [GitHub Flow](https://guides.github.com/introduction/flow/)

￼</div>
