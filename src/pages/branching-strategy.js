import React from 'react'
import Link from 'gatsby-link'

const BranchingStrategyPage = () => (
  <div>
    <a id="intro" />
    <p>
      As teams get larger and more integrated, different ideas can often become
      a point of friction as they may lead to systems that are not technically
      compatible. The ideas behind how we structure our code and work on
      enhancements is the foundation of how we create build pipelines that
      support these ideas.{' '}
    </p>
    <p>
      We now have multiple teams from multiple organisations all now working
      towards common software solutions and we are experiencing these friction
      points.{' '}
    </p>
    <p>
      The goal of this document is to answer the question, what is our branching
      strategy?
    </p>
    <a id="simplicity" />
    <h2>Striving for simplicity</h2>
    <p>
      At all times, we want simplicity. So simple, that how we branch and
      release our code should be easily understandable to people unfamiliar with
      our way.
    </p>
    <p>
      To maintain simplicity, we will base our strategy off these core ideas:
    </p>
    <ul>
      <li>
        The master branch is our production. It is the primary up to date source
        and always maintained to a high quality standard.
      </li>
      <li>
        All new features and bug fixes are based off master in to feature
        branches
      </li>
      <li>You merge you features in to master through pull requests</li>
    </ul>
    <a id="master" />
    <h2>Maintaining master</h2>
    <p>
      Your master branch is your most important store of source code. It should
      always pass tests, always be deployable and always be up to date. All
      changes to your application are created from your master branch.
    </p>
    <p>
      It stands to reason that maintaining master to the highest levels of
      quality is our primary goal and we can create policies to help maintain
      this quality.
    </p>
    <p>Your branching policy must …</p>
    <ul>
      <li>
        Require pull requests to merge code. You never commit directly to master
      </li>
      <li>Add reviewers when you create a pull request</li>
      <li>Require pull requests to pass defined build steps before merging</li>
    </ul>
    <img src="/static/branching-strategy/github-settings.png" />
    <a name="feature-branches" />
    <h2>Feature branches</h2>
    <p>
      Create your features and other software changes in feature branches that
      are based on master. Your feature will be merged back in to master with a
      pull request.
    </p>
    <img src="/static/branching-strategy/branch-3.svg" />
    <h3>Naming your feature branches with well known conventions</h3>
    <p>
      Your project should establish some well known naming conventions for how
      you name your branches. If I use <code>feature/id</code> and other team
      members use
      <code>feat/id</code> or <code>features/name-of-feature</code>, your sense
      of cohesion degrades and it can become difficult to follow what is going
      on.
    </p>
    <p>Here are some well known defaults that we use …</p>
    <ul>
      <li>
        <code>feat/issueId-name-of-change</code>
      </li>
      <li>
        <code>fix/issueId-name-of-change</code>
      </li>
      <li>
        <code>docs/issueId-name-of-change</code>
      </li>
      <li>
        <code>ops/issueId-name-of-change</code>
      </li>
      <li>
        <code>chore/issueId-name-of-change</code>
      </li>
    </ul>
    <p>
      If you are using tools like [conventional
      commits](https://conventionalcommits.org/), it would pay dividends to name
      things consistently with the tooling that your project has selected.
    </p>
    <h3>
      feat/issue-762 vs feat/issue-762-update-button-label vs{' '}
      feat/update-button-label
    </h3>
    <p>
      One thing to strive for is naming branches to easily understand what
      change that brach contains. A name like `feat/issue-762` is very unique
      and will allow you to look up what that branch is intended for. However,
      people can loose track of what issue number is allocated to a particular
      change request and they will have to refer back to the source issue.{' '}
    </p>
    <p>
      Naming conventions like `feat/update-button-label` help reduce this by
      including the name of the issue in the branch so that the intent of the
      change is shown. But it loses the link back to the issue management
      system.
    </p>
    <p>
      A naming convention like `feat/issue-762-update-button-label` is a good
      compromise. It lets you link back to the issue management system and also
      provides a description of the intended change.{' '}
    </p>
    <p>
      Just remember, it is not a requirement to have one branch to address all
      the requested changes of an issue, it can be broken down in to smaller
      changes in multiple branches. For example
      `feat/issue-762-update-button-label` and
      `feat/issue-762-change-button-confirm-message`. This may lead to higher
      quality reviews.
    </p>
    <a id="pull-requests" />
    <h2>Pull Requests</h2>
    <p>
      When you are ready to have your feature merged back in to master, you will
      create a pull request. Great pull requests are the foundation of great
      software. A great pull request isn’t so much about the code as much is it
      is about the reviewers. We want to do all we can to help the reviewer
      without burdening the mechanism with heavy processes.
    </p>
    <ul>
      <li>Ensure all tests and automated build steps are green</li>
      <li>Use labels to help reviewers</li>
      <li>Use templates to help guide your project to high quality reviews</li>
      <li>Keep things small</li>
      <li>Squash and merge</li>
      <li>Add reviewers to your PR</li>
    </ul>
    <p>
      It is a good practice to use labels to inform the reviewer of the status
      of a PR. For example, you may want to make a PR to start the build and
      test process to ensure that the PR will be in a mergeable state. You don’t
      want this merged and you are still doing some work on it. You may consider
      adding a WIP (Work in Progress) and DO NOT MERGE labels to help inform
      people of where this PR is at. It is also possible to bootstrap a project
      with a set of well known labels to help get things up and running.
    </p>
    <p>
      We also recommend adding templates for pull requests to help prompt people
      to help achieve higher quality reviews. Prompting for screen shots or
      links to the source issue may help the reviewer understand your change.
      Reviewers aren’t there to criticise someone’s work. They are there to help
      provide guidance to increase the quality of a change. No one person can
      know everything and leveraging good quality pull requests will help
      leverage the combined experience of the team. Likewise, templates for
      creating issues can also be added.
    </p>
    <a id="clean-histories" />
    <h2>Maintaining clean commit histories</h2>
    <p>
      To assist in identifying changes to our codebase, we strive to maintain
      clean commit histories
    </p>
    <p>
      To help in this ends, we prefer to rebase over merge and to squash and
      merge where possible.
    </p>
    <a id="environments" />
    <h2>Environments</h2>
    <h4>Production</h4>
    <p>
      If your software is actually being used, chances are you will have
      multiple environments. Production will always be sourced from the master
      branch.
    </p>
    <h4>Staging</h4>
    <p>
      A staging environment is also a common practice where the upcoming change
      to production can be reviewed in a replica environment. Once the changes
      have been checked for quality in staging, you can release the changes to
      production. This can be accomplished with a blocking step in the build
      system that will await for the quality to be verified and approved for
      release. This will mean that there is only one branch for staging and
      production
    </p>
    <img src="/static/branching-strategy/branch-2.svg" />
    ￼
    <h4>QA environments</h4>
    <p>
      It may be possible to dynamically create QA environments for every feature
      branch. You can create these if the build step has passed and destroyed
      when the branch has been merged. There is overhead in creating and
      maintaining this mechanism so you will have to consider the complexity
      versus the reward for dynamic QA environments.
    </p>
    <img src="/static/branching-strategy/branch-1.svg" />
    <a id="further-reading" />
    <h2>Further reading</h2>
    <ul>
      <li>
        <a href="https://conventionalcommits.org/">Connventional Commits</a>
      </li>
      <li>
        <a href="https://guides.github.com/introduction/flow/">GitHub Flow</a>
      </li>
    </ul>
    ￼
  </div>
)

export default BranchingStrategyPage
