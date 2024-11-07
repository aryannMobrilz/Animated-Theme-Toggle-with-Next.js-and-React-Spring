# Animated Theme Toggle with Next.js and React Spring

This project demonstrates how to create an animated dark/light mode toggle in a Next.js application using React Spring. It's inspired by the example on [jfelix.info](https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle) but adapted for use with `next-themes`.

## Features

*   Animated transition between sun and moon icons.
*   Uses `next-themes` for managing the theme.
*   No custom CSS required (relies on `color-scheme` or `data-theme` attribute).
*   Smooth and visually appealing animation with React Spring.

## Demo

[https://chic-torrone-c1fd6a.netlify.app](https://chic-torrone-c1fd6a.netlify.app/)

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/ProgrammerNomad/Animated-Theme-Toggle-with-Next.js-and-React-Spring.git
    ```

2.  Install dependencies:

    ```bash
    cd Animated-Theme-Toggle-with-Next.js-and-React-Spring
    npm install
    ```

## Usage

1.  Import the `ThemeToggle` component into your page or layout component:

    ```javascript
    import ThemeToggle from '../components/ThemeToggle';
    ```

2.  Render the component:

    ```javascript
    export default function Home() {
      return (
        <div>
          {/* ... other content ... */}
          <ThemeToggle />
        </div>
      );
    }
    ```

## Configuration

*   This project uses `next-themes` for theme management. Make sure you have it installed and configured in your `pages/_app.js` file:

    ```javascript
    import { ThemeProvider } from 'next-themes';

    function MyApp({ Component, pageProps }) {
      return (
        <ThemeProvider> {/* Or <ThemeProvider attribute="class"> if using data-theme attribute */}
          <Component {...pageProps} />
        </ThemeProvider>
      );
    }

    export default MyApp;
    ```

## Customization

*   You can customize the appearance of the sun and moon icons by modifying the SVG code within the `ThemeToggle` component.
*   Adjust the animation properties in the `properties` object to change the speed, tension, and friction of the animation.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)