# Pluton

![GitHub Release](https://img.shields.io/github/v/release/AidenCooper/pluton-app)
[![CodeFactor](https://www.codefactor.io/repository/github/aidencooper/pluton-app/badge)](https://www.codefactor.io/repository/github/aidencooper/pluton-app)
![GitHub License](https://img.shields.io/github/license/AidenCooper/pluton-app)

Pluton is a free, open source media server and journal designed to let you rate, review, and track your favorite movies and shows. It is an alternative to software applications like Plex and Jellyfin, and was originally built because of Jellyfin's lack of a native Apple TV client.

This repository serves as Pluton's frontend applications. Built using React Native with the Expo framework, current platforms that are supported include: Android, Android TV, iOS, Apple TV, and the web.

### Table of Contents

- [Local Development](#local-development)
- [Platform Setup](#platform-setup)

---

# Local development

## Recommended

There is a strict Node.js and NPM version defined in the [package.json](./package.json) so [nvm](https://github.com/nvm-sh/nvm) is recommended to quickly use the proper node version via `nvm use` in the project directory folder.

Package managers like [Homebrew](https://brew.sh/) for macOS/Linux and [Chocolatey](https://chocolatey.org/install) are recommended to install any dependencies needed

Zulu is the preferred vendor for the JDK.

## Setup

1. Install nvm to grab the necessary node version by: `nvm use`
2. Install dependencies: `npm install`
3. Run a specific platform: `npm run <platform>`

# Platform setup

## Android and Android TV

### Prerequisites

Follow the Expo guide [here](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&platform=android&device=simulated&buildEnv=local).

### Run

`npm run android`

`npm run android:tv`

## iOS and Apple TV

### Prerequisites

Follow the Expo guide [here](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&platform=ios&device=simulated&buildEnv=local).

### Run

`npm run ios`

`npm run ios:tv`

## Web

`npm run web`

---
