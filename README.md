# 📜 Quote of the Day

A simple web app that fetches and displays a random quote from an API, with options to copy, share, and export the quote.

---

## 🚀 Features

✅ Fetch a random quote from the API  
✅ Display the quote and author  
✅ "New Quote" button to fetch another quote  
✅ "Copy to Clipboard" button  
✅ "Share on Twitter" button  
✅ Random background image behind the quote  
✅ "Export" button to save the quote as an image  

---

## 🖼 Screenshots

### 🎨 Main Interface  
![Quote of the Day Screenshot](assets/screenshot.png)  

### ✨ Fetching New Quote  
![Fetching New Quote](assets/new_quote.png)  

---

## 🌍 Live Demo

🔗 **[Click here to visit the deployed app](https://your-deployment-link.com)**  

---

## 🛠 Tech Stack

- HTML  
- CSS  
- JavaScript  
- [FreeAPI Quotes API](https://api.freeapi.app/api/v1/public/quotes/quote/random)  
- [Unsplash / Picsum Photos for Backgrounds](https://picsum.photos/)  
- [html2canvas](https://html2canvas.hertzen.com/) (for exporting quotes as an image)  

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/quote-of-the-day.git
cd quote-of-the-day
```

### 2️⃣ Open `index.html` in a Browser
No additional setup required! Just open the `index.html` file in any modern web browser.  

---

## 🎯 How to Use

1️⃣ Open the app  
2️⃣ Click **"New Quote"** to get a new quote  
3️⃣ Click **"Copy"** to copy the quote  
4️⃣ Click **"Share"** to tweet the quote  
5️⃣ Click **"Export"** to save the quote as an image  

---

## 📌 API Usage

The app fetches a random quote from:  
```sh
https://api.freeapi.app/api/v1/public/quotes/quote/random
```
Example Response:
```json
{
  "success": true,
  "data": {
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt"
  }
}
```

---

## 🛠 Deployment

You can deploy the app easily using:  
- **GitHub Pages**  
- **Netlify**  
- **Vercel**  

To deploy using **GitHub Pages**:  
1. Push the repository to GitHub  
2. Go to **Settings → Pages**  
3. Select the branch and enable GitHub Pages  

---

## 📜 License

This project is **open-source** and free to use.  

---

## 🙌 Contributing

Feel free to fork this project, make improvements, and submit a pull request! 😊  
