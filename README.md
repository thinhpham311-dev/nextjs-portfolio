# Next.js Application

A modern web application built with **Next.js**, bootstrapped using `create-next-app`. This project follows best practices for development, scalability, and deployment, making it suitable for both learning purposes and production use.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or later recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

Install project dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

The application will automatically reload when you make changes to the source code.

---

## 🛠 Project Structure

```bash
pages/
 ├── index.js        # Main homepage
 ├── api/
 │   └── hello.js    # Sample API route
public/              # Static assets
styles/              # Global and component styles
```

- **`pages/index.js`**: Entry point of the application UI
- **`pages/api/*`**: Server-side API routes mapped to `/api/*`

---

## 🔌 API Routes

Next.js supports API routes out of the box.

Example endpoint:

```
GET /api/hello
```

Source file:

```bash
pages/api/hello.js
```

API routes run on the server and can be used for handling form submissions, authentication, or database operations.

---

## 📚 Learn More

Useful resources to deepen your understanding of Next.js:

- **Next.js Documentation** – Core concepts, features, and APIs
- **Learn Next.js** – Interactive official tutorial
- **Next.js GitHub Repository** – Source code, issues, and community contributions

---

## 🚢 Deployment

The recommended way to deploy a Next.js application is using **Vercel**, the platform created by the Next.js team.

### Deploy with Vercel

1. Push your project to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables (if any)
4. Deploy with one click

For more details, refer to the official Next.js deployment guide.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or submit an issue.

---

**Author:** Thịnh Phạm
**Framework:** Next.js
**Bootstrapped with:** Portfolio Profile
