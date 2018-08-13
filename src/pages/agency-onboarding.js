import React from 'react'
import Link from 'gatsby-link'

const AgencyOnboardingPage = () => (
  <div>
    <a id="intro" />
    <h1>On-boarding new Digital Agencies</h1>
    <p>
      This document will serve as a guide to onboard a new external digital
      agency and to give them access to the services required to work on their
      projects.
    </p>

    <a id="comms" />
    <h2>Shared Communications</h2>

    <p>
      The first step in on-boarding a new Digital Agency is to establish
      mechanisms for open communication.
    </p>

    <p>
      The most convenient chat system that can be shared between Digital
      Agencies is Slack. Within slack, we can utilise Slack’s shared channels
      feature to establish real time communications.
    </p>

    <p>
      Visit
      <a href="https://get.slack.help/hc/en-us/articles/115004151203-Create-shared-channels-on-a-workspace-beta-">
        https://get.slack.help/hc/en-us/articles/115004151203-Create-shared-channels-on-a-workspace-beta-
      </a>
      for information on how to setup a shared channel for connecting Vicinity
      and External Agency staff.
    </p>

    <a id="project" />
    <h2>Project Management</h2>

    <p>
      Within Vicinity, we have access to the Atlassian suite of software tools
      that can help manage projects. If there is the need to establish projects
      in Jira, Trello, Confluence or any other Atlassian toolset, then a request
      will need to be submitted to Ross Goodings via email. He is quite
      responsive and will have you up and running in a very short time frame.
    </p>

    <p>
      Ross’ email address is{' '}
      <a href="mailto:Ross.Goodings@vicinity.com.au">
        Ross.Goodings@vicinity.com.au
      </a>
    </p>

    <a id="github" />
    <h2>GitHub</h2>

    <p>
      If the project revolves around creating any digital system, you will most
      likely require repositories under{' '}
      <a href="https://github.com/vicinity">Vicinity’s organisation</a> in
      GitHub.
    </p>

    <p>
      You will need to contact a GitHub administrator to help you. This includes
      Slava Guzenko and Avi Beetul.
    </p>

    <p>You will need to …</p>

    <ul>
      <li>Create a new team under Vicinity’s Organisation for this project</li>
      <li>Allocate team members</li>
      <li>Create empty repositories for the project’s development.</li>
    </ul>

    <p>
      Generally, you will need to adjust the number of seats licensed in GitHub
      to cater for the expanded number of developers getting access to the
      organisation.
    </p>

    <a id="npmjs" />
    <h2>npmjs</h2>

    <p>
      If you project results in the requirement to distribute javascript based
      components, you may like to have access to Vicinity's private npmjs.com
      organisation account.
    </p>

    <p>See Avi Beetul in the DevOps group to gain access to this account.</p>

    <a id="aws" />
    <h2>AWS Accounts</h2>

    <p>
      If AWS accounts are required, you should establish them on project
      initiation. Additionally, you should establish them with clear
      determination of billing and in accordance with Vicinity’s security
      recommendations.
    </p>

    <p>
      This will most likely require at least two accounts to support a
      production environment and a separate account for all other environments,
      like staging.
    </p>

    <p>
      In order to create AWS accounts, a service request will need to be raised
      and there can be some lead time in getting this account established. It is
      strongly advised that this creation process is managed through Vicinity’s
      DevOps group (Avi Beetul)
    </p>

    <a id="build" />
    <h2>Build Systems</h2>

    <p>
      If the new project requires the development of software that relies on
      build systems, you will need to establish build pipelines in BuildKite.
      Contact Avi Beetul of the DevOps group with your requirements so that
      Build pipelines that support your activities are created.{' '}
    </p>

    <p>You are welcomed to work with Avi to create these pipelines.</p>

    <a id="third-party" />
    <h2>Third Party Services</h2>

    <p>
      Chances are that we may have systems that your project will require. We
      subscribe to a number of services that you can use for your project.
    </p>

    <ul>
      <li>PagerDuty (incident management)</li>
      <li>Loggly (logging)</li>
      <li>Pingdom (monitoring)</li>
      <li>TrackJS</li>
    </ul>

    <p>
      There are many services and we may have what you need. If not, we will
      create an account on the given service and establish a way so that you
      have access to the tool that you need.
    </p>

    <a id="office" />
    <h2>Office Work</h2>

    <p>
      You are allowed to work from the Vicinity office in Tower One at Chadstone
      and are able to work on your own laptop. WiFi access is available through
      the Vicinity Guest network and your project liaison will assist you in
      getting credentials to access the network. Your project liaison will also
      be able to grant you building access cards.
    </p>
  </div>
)

export default AgencyOnboardingPage
