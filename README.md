


# News App 📰

A responsive and dynamic News Application built with React.js and the GNews API. This application provides users with the latest news, categorized into multiple sections, along with an intuitive and modern UI.

---

## Features 🚀

- **Top Headlines**: Displays the most relevant news headlines dynamically.
- **Category Filtering**: Browse news articles by categories such as Technology, Sports, Business, and more.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Placeholder Images**: Handles missing images gracefully using a default placeholder.
- **Interactive Modals**: Click on any news article for detailed views in an overlay.
- **Dark Theme**: A modern and visually appealing dark-themed interface.

---

## Screenshots 🌟

![App Screenshot](https://github.com/kishan9535/News-app/raw/main/screenshots/exampl1.png)

---

## Tech Stack 🛠️

- **Frontend**: React.js
- **Styling**: CSS
- **API**: [GNews API](https://gnews.io)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)

---

## Prerequisites 🔧

Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org)
- A valid GNews API Key

---

## Getting Started 🚀

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kishan9535/news-app.git
   cd news-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your GNews API key:
   ```env
   REACT_APP_API_KEY=your_actual_api_key
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure 📂

```
src/
├── assets/            # Static assets like images
├── components/        # React components (News, NewsModel, etc.)
├── styles/            # CSS files
├── App.js             # Main React component
├── index.js           # Entry point of the application
├── .env               # Environment variables
```

---

## API Integration 🌐

This project integrates with the [GNews API](https://gnews.io) to fetch real-time news data. Steps to use the API:

1. Sign up at [GNews API](https://gnews.io).
2. Obtain your API key.
3. Add the API key to your `.env` file as shown above.

---

## Usage 📖

- Use the **Categories** menu on the left to filter news articles.
- Click on a news article to open a detailed view in a modal.
- The footer includes a link to the creator's GitHub profile.

---

## Deployment 🌍

To deploy the app to a live environment:
1. Build the production version:
   ```bash
   npm run build
   ```
2. Host the `build` directory using a platform like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).

---

## Git Setup for Environment Variables 🔑

### Add `.env` to `.gitignore`
Ensure sensitive data like API keys are excluded from version control:
1. Open or create a `.gitignore` file in your project root.
2. Add the following line:
   ```
   .env
   ```

### Push Your Project
Commit and push the project to your GitHub repository:
```bash
git add .
git commit -m "Initial commit for News App"
git push origin main
```

---

## Author 💻

**Kishan Kumar N.**  
- GitHub: [kishan9535](https://github.com/kishan9535)  
- Portfolio: [kishan17.vercel.app](https://kishan17.vercel.app)

---

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments 🙌

- **GNews API**: For providing real-time news data.
- **React Icons**: For the stunning icons used in the app.
- **Ramaiah Institute of Technology**: For supporting this development.
- **Prithvi Kumar**: For supporting this development .
