
### 🧾 Live Food App (Frontend for Users)
The user-facing frontend is deployed on Vercel:

🔗 [https://eat-buddy-frontend-food-app.vercel.app](https://eat-buddy-frontend-food-app.vercel.app)


### 🛍️ Live Vendor Dashboard (Frontend)
The vendor dashboard frontend is deployed on Vercel:

🔗 [https://eat-buddy-frontend-vendor-dashboard.vercel.app](https://eat-buddy-frontend-vendor-dashboard.vercel.app)



### ⚙️ Live Backend API
The backend is deployed on Render *(may take 1 to 2 minutes to wake up initially)*:

🔗 [https://eatbuddy-backend-vendordashboard.onrender.com](https://eatbuddy-backend-vendordashboard.onrender.com) 

---
---
# EatBuddy-Frontend-FoodApp

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E0?style=for-the-badge&logo=axios&logoColor=white)

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Backend Dependency](#backend-dependency)
- [Author](#author)

---

## About The Project

This repository contains the frontend application for the **EatBuddy Food App**, designed for customers to explore available food items and restaurants. Currently, it serves as a Browse platform, allowing users to view various firms and their product offerings fetched from the EatBuddy Backend.

This application communicates with the [EatBuddy-Backend](https://github.com/ArunKumarValmiki/EatBuddy-Backend) to retrieve food and firm data.

## Features

* **Browse Firms:** View a list of available food firms/restaurants.
* **View Firm Details:** Explore individual firm profiles, including their location and category.
* **Browse Products:** See the menu of food items offered by each firm.
* **Intuitive UI:** A user-friendly interface for Browse through food options.

## Tech Stack

* **React.js:** A JavaScript library for building user interfaces.
* **React Router DOM:** For declarative routing within the single-page application.
* **Axios:** Promise-based HTTP client for making API requests to the EatBuddy Backend.
* **HTML/CSS:** For structuring and styling the user interface.

## Architecture

The Food App is structured as a single-page application (SPA) using React's component-based architecture. Components are organized into logical sections (`components`, `pages`) to promote reusability and maintainability. It primarily interacts with the backend via RESTful API calls to fetch data.

## Getting Started

Follow these steps to set up and run the EatBuddy Frontend Food App locally for development.

### Prerequisites

* Node.js (LTS version recommended)
* npm (Node Package Manager) or Yarn
* **Running EatBuddy-Backend:** This frontend requires the backend server to be running or deployed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ArunKumarValmiki/EatBuddy-Frontend-FoodApp.git
    cd EatBuddy-Frontend-FoodApp
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure Backend API URL:**
    Create a `.env` file in the root of the project (if not already present) and add your backend API URL:
    ```env
    REACT_APP_BACKEND_URL=[https://eatbuddy-backend-vendordashboard.onrender.com](https://eatbuddy-backend-vendordashboard.onrender.com)
    ```
    *Note: Adjust the URL if you're running the backend locally (e.g., `http://localhost:5000`).*

### Running the Application

To start the development server:
```bash
npm start
# or
yarn start
```

## Author
### ArunKumarValmiki
