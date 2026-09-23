# Transcendence

## Context

_This project has been created as part of the 42 curriculum by ppontet, halnuma, secros, yabokhar, vdurand._

## 📋 Table of Contents

- [Transcendence](#transcendence)
  - [Context](#context)
  - [📋 Table of Contents](#-table-of-contents)
  - [Introduction](#introduction)
  - [Description](#description)
  - [⚙️ Instructions](#️-instructions)
    - [Requirements for host server](#requirements-for-host-server)
    - [Requirements for user](#requirements-for-user)
    - [For Development](#for-development)
    - [How to run the project](#how-to-run-the-project)
  - [Project Management](#project-management)
  - [🔧 Architecture (Technical Stack)](#-architecture-technical-stack)
  - [Database Schema](#database-schema)
  - [🚀 Features](#-features)
  - [Modules](#modules)
  - [Resources](#resources)

## Introduction

The project is subdivised in many repositories, and this one's the principal. It regroups all the services for the project.

This project is an online education platform for vocational training that offers courses created by users for other users. The platform serves as a hub for knowledge of all kinds, regardless of category. It also allows users to test their knowledge through exams created by other users.

It can also be viewed as a messaging platform, as users can send messages through it.

The platform draws inspiration from examples such as Moodle, FunMooc, Openclassrooms, and Udemy.

The platform consists of assembled micro-services and can be scaled up to accommodate a growing number of users.

## Description

The goal of this project is to design a complete architecture for an application that can be developed by multiple people without friction. Each team member can work on their own part without overlapping duties with anyone else. This separation makes merging features easy and effortless for everyone. We can work on features first, without conflicts, the mind in peace.

The key features are :

- consolidate knowledge by creating and viewing courses for everyone
- exercise knowledge with multiple types of exams
- chat with friends or 'professors'

## ⚙️ Instructions

Global prerequisites :

- a `browser` : to see the Frontend
- a `performant` enough server/computer to run all the services (iMac's are too slow for a correct experience)

### Requirements for host server

You will need at least :

- `git` with `git submodules` or target the branch `monorepo` to use subtrees
  - for submodules, we advise you to use the commands :
    - `git clone --recurse-submodules git@github.com:Raiders-io/Transcendence.git`
    - or `git submodule update --init --recursive` if you already cloned this repository
  - for the `monorepo` with subtrees, you can directly clone and you should have access to full history of all services
- `docker` (with docker compose)
- Internet access to download images from Docker Hub (or DHI.io)
- `admin permissions` if you want to modify the `/etc/hosts` file (and use the URL, `https://raiders.io/`, instead of `https://127.0.0.1/`)
- 200-600 mB of disk storage for each service
- at least 2 GB of free RAM only for docker

### Requirements for user

You will need :

- an updated browser, we don't actually require hardware acceleration but could in the future
- be in the same network as the host server (as it is not open publically on internet directly)

### For Development

- `docker` with `compose`
- you would need `node` at `24.16.0` and `npm` at `12.0.2`. We used `Node Version Manager` to all have the same setup.
- for the `.env` setup, we provide a script to generate it for all services.
- be sure to not use overly old images for docker as the number of vulnerabilities can be too overwhelming
- a tool like Obsidian or directly VS Code to preview Markdown documents
- Bruno, API client from [usebruno.com](https://www.usebruno.com/)

### How to run the project

This command enters in the `deployment` project, where the command `build-all` calls the build command of each services and configure it automatically.

```sh
cd deployment && make build-all
```

When everything is ready, it should be accessible through `https://localhost/` and `https://$(hostname)/`.

## Project Management

See [MEMBERS.md](MEMBERS.md) for more explanations.

## 🔧 Architecture (Technical Stack)

- Frontend : `React TS`, `ShadCN` for components, `Lucide` and `Simple Icons` for logos and icons.
- Backend : `AdonisJS` : 'battery included', a lot of documentation with pre-made choices over which packages are conveninant for each use
- Database : `PostgreSQL` as it provides a good overall relationnal table.
- S3 : `Garage`, open-source, light-weight, distributed by design and compatible with the `AWS S3` API
- Message Broker and Cache : `Redis`

## Database Schema

For more information about the database schemas and relations, you should see directly in each service.

## 🚀 Features

For more information about the features, you should see directly in each service.

## Modules

| Value | Modules                                                                                                                  | Context        |
| ----- | -------------------------------------------------------------------------------------------------------------------------| -------------- |
| 2     | Use a framework for both the frontend and backend.                                                                       | Every API      |
| 2     | Implement real-time features using WebSockets or similar technology.                                                     | messaging      |
| 2     | Allow users to interact with other users.                                                                                | user           |
| 2     | A public API to interact with the database with a secured API key, rate limiting, documentation, and at least 5 endpoints| Every API      |
| 1     | Use an ORM for the database.                                                                                             | Every API      |
| 1     | Implement advanced search functionality with filters, sorting, and pagination.                                           | Every API      |
| 1     | File upload and management system.                                                                                       | ObjectStorage  |
| 1     | Support for additional browsers.                                                                                         | Frontend       |
| 2     | Standard user management and authentication.                                                                             | Auth and user  |
| 1     | User activity analytics and insights dashboard.                                                                          | user           |
| 2     | Monitoring system with Prometheus and Grafana.                                                                           | deployment     |
| 2     | Backend as microservices.                                                                                                | Every API      |
| 1     | GDPR compliance features.                                                                                                | ObjectStorage  |
| 2     | Implement a custom module that is not listed above.                                                                      | @yosone/broker |

Total is `22` if all modules are validated.

## Resources

See G-Docs for references
Explain how AI was used for which tasks and which parts

// TODO noter toutes les références et sources ici

For more information about how AI was used, for which tasks and which parts, you should see directly in each service.
