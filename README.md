![GitHub release (latest by date)](https://img.shields.io/github/v/release/Fraccs/discord-daily-role)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Fraccs/discord-daily-role/release)
![GitHub](https://img.shields.io/github/license/Fraccs/discord-daily-role)
![GitHub issues](https://img.shields.io/github/issues/Fraccs/discord-daily-role)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Fraccs/discord-daily-role)

# DailyRole BOT

> *DailyRole 🍀, an easy-to-use ✨ role-manager Discord BOT 🤖.*

> **[ &rarr; Invite me! &larr; ](https://discord.com/api/oauth2/authorize?client_id=814172130945794128&permissions=8&scope=bot%20applications.commands)**

## Table of contents

1. [ Guide ](#usage)
    - [ Commands ](#commands)
        - [ add ](#add)
        - [ show ](#show)
        - [ remove ](#remove)
        - [ help ](#help)
2. [ Workflow ](#workflow)
    - [ Branching Strategy ](#branching-strategy)
        - [ Create a branch ](#create-a-branch)
        - [ Make changes ](#make-changes)
        - [ Create a PR ](#create-a-pull-request)
        - [ Delete your branch ](#delete-your-branch)
    - [ Commit Convention ](#commit-convention)
        - [ Commit message header ](#commit-message-header)
            - [ Type ](#type)
            - [ Scope ](#scope)
        - [ Commit message body ](#commit-message-body)
        - [ Commit message footer ](#commit-message-footer)
    - [ Issues ](#issues)
    - [ Pull Requests ](#pull-requests)
        - [ When to pull request ](#when-to-pull-request)
    - [ Versioning ](#versioning)

## Guide

### Commands

##### 🍀 Add: `/add <role> [<channel>]` ***[Admin Permissions Required]***

*Set the role that the BOT will assign to a random user each day.*

**Options**

`<role>`: the role that will be given each day.

`*<channel>`: the text channel where the BOT will print the greeting message.

**Examples**

- `/add @myrole`

- `/add @myrole #mytextchannel`

##### 🍀 Show: `/show`

*Show the current configuration (role/channel).*

##### 🍀 Remove `/remove` ***[Admin Permissions Required]***

*Remove the current configuration.*

##### 🍀 Help `/help`

*Print a comprehensive help message.*

## Workflow

### Branching Strategy

> This project follows the [GitHubFlow](https://docs.github.com/en/get-started/quickstart/github-flow) branching strategy.

> Following is a summary of a typical GitHubFlow workflow.

##### Create a branch

Create a branch in your repository. The branch name should be short and descriptive, for example: `increase-test-timeout` or `add-code-of-conduct`.

- If a branch targets a specific issue **the name of the branch should begin with the issue_id** e.g. `123-fix-users-endpoint`.

##### Make changes

On your branch, make the desired changes to the repository, then commit and push your changes to your branch.

When committing your changes, make sure to follow the guidelines described in the <a href="#commits">commits section</a>.

##### Create a pull request

When you create a pull request, **include a summary of the changes** and what problem they solve.

##### Merge your pull request

Once your pull request is approved, merge your pull request. This will automatically merge your branch so that your changes appear on the default branch.

##### Delete your branch

After you merge your pull request, **delete your branch**.

### Commit Convention

> This project follow the [AngularJS commit-message convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format), this increases consistency and readability of commits but more importantly it eases the creation of version numbers.

> Following is a summary of the conventional commits strategy, modified to fit the needs of this project.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: components|controllers|db|hooks|middlewares|models|pages|readme|services|utils|<workflow_name>|<test_name>
  │
  └─⫸ Commit Type: build|chiore|ci|docs|feat|fix|perf|refactor|revert|style|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **chore**: Maintain
* **ci**: Changes to CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **revert**: Revert a previous change
* **style**: Trailing spaces, semi-colons, tab size...
* **test**: Adding missing tests or correcting existing tests

##### Scope

The scope is the part of the codebase where the changes happened and it can be one of the following: `commands|controllers|db|docker|events|interfaces|middlewares|models|readme|services|utils|<workflow_name>|<test_name>`.

- If none of the above matches the modified scope then the scope can be empty e.g. `fix: stuff that is not above`.

- If a commit changes multiple parts of the codebase then an `*` sign can be used as the scope specifier.

#### Commit Message Body

- Use imperative, present tense: “change” not “changed” nor “changes”.

- Include motivation for the change and contrasts with previous behavior.

#### Commit Message Footer

All breaking changes have to be mentioned in footer with the description of the change, justification and migration notes (e.g. `BREAKING CHANGE: desc...`).

- If a commit targets a specific issue, the issue_id must be specified in the footer e.g. `Closes #123`, in case of multiple issues `Closes #123, #124, #125`.

### Issues

> Issues can be opened for everything that has to do with the program, from asking questions to requesting new fetures or bug-fixes.

Issues should describe and include each of the following components:

- A `priority` label
    - `priority: 0` &larr; **Highest**
    - `priority: 1`
    - `priority: 2`
    - `priority: 3`
    - `priority: 4` &larr; **Lowest**
- A `scope` label
    - One of the scopes described in the [commit scope section](#scope).
- A `type` label
    - One of the types described in the [commit type section](#type).

### Pull Requests

> Pull requests are the final part of this workflow and they allow contributors to **review and share opinions on code** with each other. Furthermore such mechanism opens the doors to **automated workflow runs** (continuous integration).

#### When to pull request

- A pull request should only be opened when the work is *done* and ready for production.

- If a pull request doesn't pass every automated test, **it shouldn't be merged**, fix the problems and then push your fixes again until it passes.

### Versioning

> Versioning is done automatically by [GitVersion](https://gitversion.net) each time a PR is successfully merged into the `main branch`.
