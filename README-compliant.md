# Transcendence

## Context

_This project has been created as part of the 42 curriculum by ppontet, halnuma, secros, yabokhar, vdurand._

## Introduction

This project is an online education platform for vocational training that offers courses created by users for other users. The platform serves as a hub for knowledge of all kinds, regardless of category. It also allows users to test their knowledge through exams created by other users.

It can also be viewed as a messaging platform, as users can send messages through it.

The platform draws inspiration from examples such as Moodle, FunMooc, Openclassrooms, and Udemy.

The platform consists of assembled micro-services and can be scaled up to accommodate a growing number of users.

## Descriptions

The goal of this project is to design a complete architecture for an application that can be developed by multiple people without friction. Each team member can work on their own part without overlapping duties with anyone else. This separation makes merging features easy and effortless for everyone. We can work on features first, without conflicts, the mind in peace.

The key features are :

- consolidate knowledge by creating and viewing courses for everyone
- exercise knowledge with multiple types of exams
- chat with friends or 'professors'

## Instructions

Global prerequisites :

- a `browser` : to see the Frontend
- a `performant` enough server/computer to run all the services (iMac's are too slow for a correct experience)

### For Development

- you would need `node` at `24.16.0` and `npm` at `12.0.2`. We used `Node Version Manager` to all have the same setup.
- for the `.env` setup, we provide a script to generate it for all services.

// TODO HOW TO RUN PROJECT

## Project Management

### Team

See [MEMBERS.md](MEMBERS.md) for more explanations.

// TODO MEMBERS.md

### Organization

See [MEMBERS.md](MEMBERS.md) for more explanations.

// TODO MEMBERS.md

## Technical Stack

- Frontend : `React TS`, `ShadCN` for components, `Lucid` and `Simple Icons` for logos and icons.
- Backend : `AdonisJS`
- Database : `PostgreSQL` as it provides a good overall relationnal table.
- S3 : `Garage`, open-source, light-weight, distributed by design and compatible with the `AWS S3` API
- Message Broker and Cache : `Redis`

## Database Schema

For more information about ObjectStorage, see [database.md](ObjectStorage/Arch/database.md).

## Features

For more information about ObjectStorage, see [README.md](ObjectStorage/README.md).

## Modules

See Obsidian or Google Sheets.

## Resources

See G-Docs for references
Explain how AI was used for which tasks and which parts
