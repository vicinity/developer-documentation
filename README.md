# Developer Documentation

## Recommended Technology Stack

### Techniques

* Infrastructure as code :thumbsup:
Setting up a new environment or changing an infrastructure should be scripted and executed automatically by a build pipeline.

* Serverless architecture :thumbsup:
Serverless applications are easier to manage and scale so this should be the default approach when setting up a new service or a website.

* Functional programming :thumbsup:
It's easy to write testable code when no state is mutated

* Object-oriented programming :ok:
It's OK to use OOP just keep it SOLID!

* Continuous Delivery (CD) :thumbsup:
Deploy automatically to production after all automated tests pass.

* Feature-toggles :thumbsup:
Use feature-switches to enable new functionality in production for limited set of users. This is recommended for projects that are already in production and serving customers.

* Release from master branch :thumbsup:
Keep master branch up-to-date and ready to be deployed to production at any moment in time. In most case, we would have automatic deployment when code is merged to master.

* Short Lived Feature branching :thumbsup:
Keep branches short-lived and merge to master as soon as possible.

* Rebase merging :thumbsup:
Use rebase over merge to keep git history clean.

* Consumer-driven contract testing :question:
Using PACT or other forms of contract testing to keep RESTful services in sync.

* UI Component Library :thumbsup:
Shared UI components help us build consistent UI faster across various digital assets.

NOTE: At the moment we only support vicinity theme. So for centre specific projects this is not valid.

* Pull requests for code reviews :thumbsup:
Useful to pick any issues, learn more, and share the knowledge using the power of GitHub


## Platforms


* AWS :thumbsup:
AWS is our cloud platform of choice. Of course we should keep an eye on other platforms so the solutions we build should have business logiс decoupled from the infrastructure whenever possible.

* Auth0 :thumbsup:
Managed Identity Provider service


## Languages and Frameworks


* NodeJS :thumbsup:
It's cool and fast enough plus works really well for serverless architectures, e.g. running in AWS lambdas

* JavaScript as a first class language :thumbsup:
Combined with static typing JavaScript allows rich full-stack programming experience

* TypeScript :thumbsup:
Superset of JavaScript adds types, intellisense, ES6 syntax and much more

* React.js :thumbsup: :cool:
Our default choice for UI

* CssModules (PostCSS, CssNext) :thumbsup:
Incapsulated CSS with variables

* Storybook :thumbsup:
Interactive UI component development / testing library

* Styleguidist :question:
Component development environment with hot reloaded dev server and a living style guide, competitor to Storybook

* Terraform :thumbsup:
Deploying cloud services using Terraform gives an opportunity to use different cloud providers.

* serverless.com framework :thumbsup:
Deploying APIs to AWS Lambda is easy with this proven framework, it just works


## Tools


* Buildkite :thumbsup:
Managed build service of choice

* GitHub :thumbsup:
Everything is there including this document.

---
Legend: :thumbsup: preferred, :ok: accepted, :question: assess, :no_good: avoid


## Agency Workflow

This section lists down some steps are involved, when we work with Digital agencies here at Vicinity.

<details>
  <summary>Technical Plan (Draft)</summary>
  
Before any technical tasks are undertaken, we all discuss technical details of the project and draft out a rough technical plan. This technical plan will consist of following details,
- Tech stack
- Github Repo's, CI/CD
- 3rd party services (loggly, trackjs, segment.io etc)
- Data/API requirements
- High level architecture details

</details>

<details>
  <summary>Project Setup/Kick-off</summary>
  
Depending on technical plan, Digital agency and Vicinity team would undertake tasks for project setup. Some of the things that Digital Team will likely be helping out with are,
- AWS account(s)
- Github Repo(s) / Teams
- Buildkite agent(s) etc
- Slack channel(s)
- Jira board
- Emails, subdomains
- any other accounts needed to get started

</details>


<details>
  <summary>Day to Day Work</summary>
  
This varies from project to project but in most cases members of Vicinity Data/Digital Team here at vicinity would be involved in following,
- Daily standups
- System design, architecture and technical dicussions/concerns
- Digital Team would actively helpout with DevOpsy stuff (automation, terraform etc)
- User acceptance testing

On day to day, we also expect all members to,
- Actively document and Update high level design diagrams as and when needed
- Capture technical debt details and prioritise them

</details>

<details>
  <summary>Security Review</summary>
  
As we near completion of version 1 of the project, we will start looping in the security team here at Vicinity to kick start a security review of the product. Depending on type of software we are building, this may include Penetration testing.

</details>

<details>
  <summary>Productionizing</summary>
  
As we near completion, we would draft a plan together for production release. This plan may include,
- Prepare infra (using automation scripts + some manual work)
- Send out communication to stakeholders involved
- Agree on SLA and Support team
</details>

## On-boarding new Digital Agencies

This section serves as a guide to onboard a new external digital agency and to give them access to the services required to work on their projects.

<details>
  <summary>Shared Communications (Slack)</summary>
  
The first step in on-boarding a new Digital Agency is to establish mechanisms for open communication.

The most convenient chat system that can be shared between Digital Agencies is Slack. Within slack, we can utilise Slack’s shared channels feature to establish real time communications.

Visit https://get.slack.help/hc/en-us/articles/115004151203-Create-shared-channels-on-a-workspace-beta-for information on how to setup a shared channel for connecting Vicinity and External Agency staff.
</details>

<details>
  <summary>Project Management (Jira)</summary>
  
Within Vicinity, we have access to the Atlassian suite of software tools that can help manage projects. For all the projects, we try to maintain a Jira board so that all team members and stakeholders can be in the loop through out the project.
</details>

<details>
  <summary>GitHub</summary>
  
If the project revolves around creating any digital system, you will most likely require repositories under Vicinity’s organisation in GitHub.
You will need to contact Digital team at Vicinity to help you with that
Create a new team under Vicinity’s Organisation for this project
Allocate team members
Create empty repositories for the project’s development.
Generally, you will need to adjust the number of seats licensed in GitHub to cater for the expanded number of developers getting access to the organisation.
</details>

<details>
  <summary>npmjs</summary>
If you project results in the requirement to distribute javascript based components, you may like to have access to Vicinity's private npmjs.com organisation account.

contact DevOps group to gain access to this account.
</details>

<details>
  <summary>AWS Accounts</summary>
If AWS accounts are required, you should establish them on project initiation. Additionally, you should establish them with clear determination of billing and in accordance with Vicinity’s security recommendations.

This will most likely require at least two accounts to support a production environment and a separate account for all other environments, like staging.

In order to create AWS accounts, a service request will need to be raised and there can be some lead time in getting this account established. It is strongly advised that this creation process is managed through Vicinity’s DevOps group (Avi Beetul)
</details>

<details>
  <summary>Build Systems</summary>
If the new project requires the development of software that relies on build systems, you will need to establish build pipelines in BuildKite. Contact DevOps group with your requirements so that Build pipelines that support your activities are created.

You are welcomed to work with DevOps from Digital team to create these pipelines.
</details>

<details>
  <summary>Third Party Services</summary>
Chances are that we may have systems that your project will require. We subscribe to a number of services that you can use for your project.

PagerDuty (incident management)
Loggly (logging)
Pingdom (monitoring)
TrackJS

There are many services and we may have what you need. If not, we will create an account on the given service and establish a way so that you have access to the tool that you need.
</details>

<details>
  <summary>Office Work</summary>
You are allowed to work from the Vicinity office in Tower One at Chadstone and are able to work on your own laptop. WiFi access is available through the Vicinity Guest network and your project liaison will assist you in getting credentials to access the network. Your project liaison will also be able to grant you building access cards.
</details>
