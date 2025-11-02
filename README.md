# Portfolio Website

A modern, responsive, and easily customizable portfolio website built with Vue.js and Vite. This project serves as a personal showcase for skills, experience, and projects, designed to be fast, visually appealing, and simple to maintain.

## Features

- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Modern UI**: A clean and professional design with smooth animations and hover effects.
- **Single Page Application**: Seamless navigation with smooth scrolling between sections.
- **Data-Driven Content**: Easily update portfolio content by modifying a single `data.js` file.
- **Fast & Lightweight**: Built with Vite for a fast development experience and optimized build performance.

## Sections

1.  **Hero**: A welcoming introduction with a name, title, bio, and call-to-action buttons.
2.  **Technical Skills**: A categorized grid displaying languages, frameworks, and technologies.
3.  **Experience**: A professional timeline showcasing work history and key responsibilities.
4.  **Projects**: A collection of project cards with descriptions, tech stacks, and GitHub links.
5.  **Certifications & Awards**: A section to highlight credentials and achievements.
6.  **Contact**: A clear call-to-action to get in touch, with email and social media links.

## Tech Stack

-   **Frontend**: Vue.js 3
-   **Build Tool**: Vite
-   **Styling**: CSS3 with modern layouts (Flexbox, Grid)
-   **Icons**: Font Awesome
-   **Fonts**: Inter (from Google Fonts)

## Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

## Usage

To run the application in development mode with hot-reloading, use the following command:

```sh
npm run dev
```

This will start the development server, typically at `http://localhost:5173`.

To build the application for production, run:

```sh
npm run build
```

The optimized static files will be generated in the `dist/` directory.

## Customization

This portfolio is designed for easy customization. All the content displayed on the website—including personal information, skills, experience, projects, and awards—is sourced from the `src/data.js` file.

To personalize the portfolio, simply open `src/data.js` and modify the values within the `portfolioData` object. The website will automatically update with your information.

```javascript
// Example from src/data.js
export const portfolioData = {
  personal: {
    name: "Hi ! I'm Your Name",
    title: "Your Professional Title",
    email: "your-email@example.com",
    // ... and so on
  },
  // ...
};
```

## Contact

Sufyan Shaik
- Email: sufyanshaik608@gmail.com
- LinkedIn: [linkedin.com/in/sufyanshaik03](https://linkedin.com/in/sufyanshaik03)
- GitHub: [github.com/crumbs1505](https://github.com/crumbs1505)
