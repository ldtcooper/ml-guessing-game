# Untitled ML Guessing Game
This repo is a simple game I'm working on. In this game you will be presented with some synthetic data and a decision boundary and asked to guess what kind of classification algorithm was used. 

## Setup
All of the requirements for this project live in `requirements.txt` and can be installed from there with `pip`. `.env.template` contains all of the environment variable names. This file should be duplicated to a file called `.env` and then filled in with the appropriate credentials.

During development, `/frontend/package.json` will need `"proxy": "http://localhost:5000` added.