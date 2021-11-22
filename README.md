<img src="https://assets.terminusdb.com/images/horizontal_lockup_(2).png" width="350px"/> 

## The easiest way to build a knowledge graph

## A toolkit for building collaborative applications

## Document-oriented knowledge graph database

[![CI](https://github.com/terminusdb/terminusdb/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/terminusdb/terminusdb/actions/workflows/ci.yml)
[![Docker](https://img.shields.io/docker/pulls/terminusdb/terminusdb-server?logo=Docker&style=plastic)](https://hub.docker.com/r/terminusdb/terminusdb-server)
[![Discord](https://img.shields.io/discord/689805612053168129?label=Discord&logo=Discord&style=plastic)](https://discord.gg/yTJKAma)
[![Discourse](https://img.shields.io/discourse/topics?color=yellow&logo=Discourse&server=https%3A%2F%2Fdiscuss.terminusdb.com%2F&style=plastic)](https://discuss.terminusdb.com/)

TerminusDB is an open source graph database and document store. We like to think of it as a document graph. 

Use TerminusDB to create rich connected knowledge graphs and use documents to organize data in meaningful ways. The result is a knowledge graph of JSON documents that can refer to each other to build a vibrant picture in data.

Build powerful applications with collaboration as a core idea. Allow your users to branch and merge their data and to collaborate at the same time in a controlled way, and added the ability to link JSON documents in a powerful knowledge graph all through a radically simplified interface. We are excited to bring this revolutionary open-sourced data management tool to our growing community of users.

TerminusX is a cloud self-service data platform built on TerminusDB. Use it to collaborate with colleagues to quickly build a vibrant ecosystem of domain data products. TerminusX is in **public beta** and you can [sign up now](https://dashboard.terminusdb.com/).

TerminusDB provides a [document API](https://terminusdb.com/docs/v10.0/#/reference/reference-document-interface) for building via the JSON exchange format. The convenience of documents with the power of a knowledge graph.

TerminusDB is a lightweight, high-speed immutable database. Our delta-encoding approach makes branch, merge, push, pull, clone, time-travel, and other git-like operations possible.

<img src="https://assets.terminusdb.com/images/tdb-dashboard-tablet.png" width="100%" height="auto" />


TerminusDB allow you to build, deploy, execute, monitor, and share versioned data products. TerminusDB versions both data and schema allowing your team to deliver a consistent product to others while continuing to improve and innovate. Versioning is the enabler of collaboration and the future for all important data. TerminusDB brings software engineering best practices to data.

If you want to build: a knowledge graph of interconnected data products; data-intensive applications; or collaborate with colleagues, TerminusDB and TerminusX are right for you.


## Quick Links

| [TerminusDB and TerminusX Documentation](https://terminusdb.com/docs/) | [Bootstrap TerminusDB](https://github.com/terminusdb/terminusdb-bootstrap) | [Python Client](https://github.com/terminusdb/terminusdb-client-python) | [JavaScript Client](https://github.com/terminusdb/terminusdb-client-js) |
| :--- | :--- | :--- | :--- |

<br/><br/>

<img src="https://assets.terminusdb.com/images/terminusdb-github-intro.gif" width="100%" height="auto" />

<br/>

TerminusDB is a lightweight, high-speed immutable database. Our [delta-encoding](https://assets.terminusdb.com/research/succinct-data-structures-and-delta-encoding.pdf) approach makes branch, merge, push, pull, clone, time-travel, and other git-like operations possible.

**Data collaboration is facilitated through [TerminusX](https://terminusdb.com)**, which is a cloud self-service data platform enabling you to build, deploy, execute, monitor, and share versioned data products.


## Why TerminusDB/TerminusX

* Get started in minutes. Work using your preferred language, or use our low-code console to get your database running in just a few minutes.
* Add, replace and query documents using our document interface.
* Powerful query allows you to search for repeating patterns using recursion.
* Generate forms, get data validation, and a flexible & surfable document interface (in the console).
* Visual tool to build complex data models, which are easy, maintainable, and enforced.
* Data science/data engineering functionality directly in the database and via TerminusX.
* Versioning as a first class citizen. Commit graphs and data lineage out of the box.
* Clone the production database and associated schema to branch, merge, collaborate, and time travel.
* New paradigm in data-centric, domain focused, and decentralized data product development.


## Community

Come visit us [Discord](https://discord.gg/yTJKAma)
or our [forum](https://discuss.terminusdb.com). On Twitter, we're [@TerminusDB](https://twitter.com/TerminusDB).
<img align="right" src="https://assets.terminusdb.com/images/TerminusDB%20color%20mascot.png" width="256px"/>

## Changes in this Version

[Release Notes](docs/RELEASE_NOTES.md)

## Copyright

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
```
http://www.apache.org/licenses/LICENSE-2.0
```

## Why TerminusDB


* Get started in minutes. Whatever language you're using or if you prefer our low-code console, TerminusDB is easy - you can have your database running in just a few minutes. And nothing will make you more productive
* Powerful query allows you to search for repeating patterns using recursion
* Generate forms, get data validation, and a flexible & surfable document interface (in the console)
* Visual tool to build complex data models, which are easy, maintainable, and enforced
* Data science/data engineering functionality directly in the database and via TerminusHub
* Clone the production database, branch, merge, collaboration, lineage, versioning, and time travel - Git-like revision control for large databases
* New paradigm in data-centric application development


## Getting Started

Desktop versions of TerminusDB can be found in our [Download Center](https://terminusdb.com/hub/download).

For development and testing, we recommend our [TerminusDB Bootstrap](https://github.com/terminusdb/terminusdb-bootstrap) installer, which uses the Docker image.

### Building from source

In order to build from the source, follow the [build from source](docs/BUILD.md) directions.

### Open Console

Once you have installed terminusdb-server either from the docker image or built from source you can enter the server location into your browser to view your database from the console "http://SERVER:PORT/". (the default is: https://127.0.0.1:6363/).

### Command Line

In order to start the terminusdb server or simply to explore a store
from the command line, you can use the [TerminusDB Command Line
Interface](docs/CLI.md).

<img src="https://assets.terminusdb.com/images/cli-github.gif" width="500px"/>

## Client

In order to begin manipulating and querying your database you can
start the TerminusDB server (using the CLI) and then simply point your
browser to `"http://SERVER:PORT/"` which should allow you to manage
and query your database.

You can also perform all configuration, querying, and management
functions via the RESTful API. We have a number of client libraries to
help you get started:

The [JavaScript client libraries](https://github.com/terminusdb/terminusdb-client) give you
assistance with programmatic access.

The [JavaScript Console](https://github.com/terminusdb/terminusdb-console) allows manipulation 
of the database using the javascript client fluent syntax.

The [Python client libraries](https://github.com/terminusdb/terminusdb-client-python) allows
you to use a pythonic syntax to query the database.

## Documentation

In order to use your TerminusDB through the console rather than
directly through clients, you should look at the documentation on our
[TerminusDB documentation](https://terminusdb.com/docs/terminusdb/) website.

## Community

Come visit us on our [discord server](https://discord.gg/yTJKAma)
or our [forum](https://discuss.terminusdb.com). We are also on [twitter](https://twitter.com/TerminusDB)
<img align="right" src="https://assets.terminusdb.com/images/TerminusDB%20color%20mascot.png" width="256px"/>

## Changes in this Version

[Release Notes](docs/RELEASE_NOTES.md)

## Copyright

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
```
http://www.apache.org/licenses/LICENSE-2.0
```
