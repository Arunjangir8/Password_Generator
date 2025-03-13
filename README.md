# Password Generator

A modern, secure password generator built with React, Vite, and Tailwind CSS.

## Features

- Generate strong, random passwords with customizable options
- Adjust password length
- Include/exclude uppercase letters, lowercase letters, numbers, and special characters
- Copy passwords to clipboard with one click
- Password strength indicator
- Mobile-responsive design
- Dark/light mode toggle

## Demo

![Password Generator Preview](./Screenshot%202025-03-13%20at%209.43.56 PM.png)


## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/password-generator.git

# Navigate to the project directory
cd password-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

Visit `http://localhost:5173` in your browser to use the application locally.

## Build

```bash
# Build for production
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Project Structure

```
password-generator/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── PasswordGenerator.jsx
│   │   ├── PasswordStrengthMeter.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Security

- Passwords are generated client-side using the Web Crypto API
- No passwords are stored or transmitted to any server
- Open source code allows for security verification

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the appearance by modifying the `tailwind.config.js` file.

### Algorithm

The password generation algorithm can be found in `src/components/PasswordGenerator.jsx`. You can modify it to meet specific requirements.

## License

[MIT](LICENSE) (Or replace with your preferred license)

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/password-generator](https://github.com/yourusername/password-generator)