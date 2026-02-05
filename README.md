<div align="center">
  <a href="https://card-game.reedus.dev">
    <img src="public/logo.svg" alt="Logo" width="100" height="100">
  </a>
  <h1 align="center">Card game</h1>
  <p align="center">
    An assignment for a Frontend position
    <br />
    <br />
    <a href="https://card-game.reedus.dev">View Demo</a>
  </p>
</div>

A modern, interactive Pokémon card game built with Vite, React, and TypeScript.
This project is designed for scalability, developer experience, and smooth UI prototyping with Storybook and MSW for
mocking API data.

## 🎯 Features

- List card deck
- View card details
- Simulate a card fight (with 3 different results: win, lose, error)

## 💬 How to Use

From card deck page(home), clicking a card redirects to card details page. <br />
Here with a button you can simulate a fight between the card and a random opponent.<br />
The start fight button simulate a polling request, that returns fight steps. Every tick has a 2% possibility to bring to
a
failure.<br/>
The last two cards, simulate a details fetch error.
Every other unhandled route brings to a 404 page.

## 🚀 Tech Stack

- React 19
- TypeScript
- Storybook
- MSWJS
- Package Manager: yarn

## 📋 Prerequisites

- Node.js (v.22.17.0 or higher)
- yarn (preferred)
    - if you don't have it, you can use `npm install -g yarn` to install it globally
- git (of course)

## 🛠️ Installation & Setup

1. `git clone https://github.com/dev-reedus/cardgame_interview.git`


2. `cd cardgame-interview`


3. `yarn install`


4. `yarn dev`


5. open your app at http://localhost:5173


6. `yarn storybook` to start storybook

You can also deploy it in a container by running `run.sh` script, it will create a docker image and run it on port 8085.

## 📁 Project Structure

```
card-game/
├── .storybook/         # Storybook configuration
├── src/
│   ├── app/            # App initialization
│   ├── assets/         # Global styles/variables
│   ├── components/     # React components
│   ├── views/          # Views components
│   ├── hooks/          # Custom hooks
│   ├── mock-server/    # MSWJS handlers for mocks
│   ├── services/       # API services
│   └── types/          # TypeScript global types
└── public/             # Static assets
```
