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

🔗 **[Quote of the Day Screenshot](https://prnt.sc/FCOlABRfZDzF)** 

---

## 🌍 Live Demo

🔗 **[Click here to visit the deployed app](https://quote-of-the-day-gamma.vercel.app)**  

---

## 🛠 Tech Stack

- HTML  
- CSS  
- JavaScript  
- [FreeAPI Quotes API](https://api.freeapi.app/api/v1/public/quotes/quote/random)  
- [Picsum Photos for Backgrounds](https://picsum.photos/)  
- [html2canvas](https://html2canvas.hertzen.com/) (for exporting quotes as an image)  

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yashpatel14/quote-of-the-day.git
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
  "statusCode": 200,
  "data": {
    "author": "Thomas Edison",
    "content": "If I find 10,000 ways something won't work, I haven't failed. I am not discouraged, because every wrong attempt discarded is another step forward.",
    "tags": [
      "Perseverance",
      "Success",
      "Inspirational",
      "Motivational"
    ],
    "authorSlug": "thomas-edison",
    "length": 146,
    "dateAdded": "2023-04-14",
    "dateModified": "2023-04-14",
    "id": 10
  },
  "message": "Quote fetched successfully",
  "success": true
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
