# Job Recommendation – HMI Frontend

Angular frontend for a job-recommendation system built in the
Human-Machine Interaction course of my M.Sc. Applied Computer Science
(Hochschule Schmalkalden, 2024).

The backend uses an AI model trained on a large job dataset to find
related jobs. This app lets users browse jobs, open job details and
see similar positions suggested by the model.

## Features
- Homepage, job list and job detail pages
- Related-job suggestions from the AI model via the backend API
- [Search / filters – remove if not included]

## Tech stack
- Angular 17, TypeScript, SCSS
- Structure: `core/` (services, HTTP interceptors, models),
  `features/pages/` (homepage, job-list, job-details), `shared/pipes/`
- Angular SSR configuration

## Run locally
npm install
ng serve
→ http://localhost:4200

Backend: https://github.com/dev-protim/HMI_Project/tree/main/backend
