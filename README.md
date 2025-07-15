# 🎨 Screeno Graphix

**Screeno Graphix** is a modern **printing service platform** where customers can personalize and order custom print products like **cup designs**, **t-shirts**, and **posters**, delivered right to their **doorstep**.  
Admins can manage available services, review customer orders, and monitor secure online payments via **Stripe**.

---

## 🌟 Features

### 👤 Customers Can:
- 🛒 Browse and choose from multiple print services
- ✏️ Upload custom designs or text
- 💳 Pay securely online using **Stripe**
- 📬 View order history and live status
- 🚚 Get orders delivered to their doorstep

### 🛠️ Admins Can:
- ➕ Add, update, or delete print services
- 📦 Review and manage customer orders
- 🔁 Change order statuses (Pending → In Progress → Shipped → Delivered)
- 💵 View Stripe-based transactions and status

---

## 💻 Technologies Used

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=fff" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=fff" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=fff" />
</p>

---

## 🔐 Authentication & Payments

- Role-based authentication for **Customer** and **Admin**
- Protected routes and user sessions
- Stripe integration for secure and fast online transactions

---

## 📸 Screenshots
### 🏠 Login Page  
![Home](./Screenshots/Login_Form.png)
### 🏠 Home Page  
![Home](./Screenshots/homepage1.png)
![Home](./Screenshots/homepage2.png)

### 🛍️ Service Selection  
![Service Selection](./Screenshots/services.png)

### 🛍️ Cart 
![Service Selection](./Screenshots/cart.png)


### 📋 Customer Order History  
![Customer Order](./Screenshots/Orders.png)

### 📋 Add Adresses
![Customer Orders](./Screenshots/Add_Address.png)

### 📋 About Us
![Customer Orders](./Screenshots/about_us1.png)
![Customer Orders](./Screenshots/about_us2.png)


### 🛠️ Admin Dashboard  
![Admin Dashboard](./Screenshots/Add_services.png)

### 🛠️ Service List
![Admin Dashboard](./Screenshots/ServiceList.png)


### 🛠️ Service List
![Admin Dashboard](./Screenshots/ServiceList.png)

---

## 📁 Folder Structure

screeno-graphix/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── App.js
│
├── screenshots/ # <- Add your images here
└── README.md

bash
Copy
Edit

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or MongoDB Atlas)
- Stripe account with test keys
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Shubha274/ScreenoPress.git


# Setup backend
cd backend
npm install
cp .env.example .env
# Add environment variables (MONGO_URI, STRIPE_SECRET_KEY, etc.)
npm run start

# Setup frontend
cd ../frontend
npm install
npm run dev


📦 Upcoming Features
 Customer email notifications on order status

 Admin analytics dashboard

 Review & rating system

 Coupon and discount support

📊 GitHub Stats
<p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=Shubha274&show_icons=true&theme=default" /> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shubha274&layout=compact" /> </p>


🤝 Contributing
We welcome contributions!

Fork this repository

Create your branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to the branch: git push origin feature-name

Open a Pull Request


📄 License
This project is licensed under the MIT License.

👩‍💻 Developed By
Shubha
