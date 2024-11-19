#  NatureNex - Explore Eco-Adventure Experiences

**NatureNex** is an eco-adventure blog website designed to connect users with exciting and eco-friendly travel experiences. From mountain treks to ocean dives, this platform allows users to explore adventure options, learn detailed information, and engage with experts for personalized consultation.

## 🌐 Live URL
Check out the live application: [NatureNex Live](https://naturenex2.netlify.app/)

## 🎯 Purpose
The purpose of **NatureNex** is to promote sustainable tourism by showcasing various eco-adventure experiences. It provides detailed insights, interactive user engagement features, and ensures a smooth browsing experience for adventure enthusiasts.

## ✨ Key Features

1. **Eco-Adventures Showcase**:
   - Dynamic cards featuring adventure titles, images, eco-friendly features, and an "Explore Now" button that redirects logged-in users to detailed adventure pages.

2. **User Authentication**:
   - Secure login and registration system with social login via Google.
   - Password validation for a secure registration process.

3. **Adventure Details**:
   - Comprehensive adventure detail page accessible through private routes.
   - A "Talk with Expert" button with conditional actions:
     - Opens a Google Meet if the current time is between 10:00 AM and 8:00 PM.
     - Displays consultation timings in a modal outside these hours.

4. **Profile Management**:
   - User profile page displaying account details with an option to update the profile.
   - Update profile form includes fields for name and photo URL.

5. **Dynamic Pages**:
   - Dynamic titles for each page based on the route.
   - Fully responsive design across desktop, tablet, and mobile devices.

6. **Additional Features**:
   - Secure Firebase integration using environment variables.
   - JSON data for adventure details including categories, costs, eco-friendly features, and more.

7. **Extras**:
   - Animations using the AOS (Animate On Scroll) package on the homepage.
   - Functional "Forgot Password" feature that allows users to reset their password via Gmail.

## 📦 NPM Packages Used

- **React Router Dom**: For navigation and route handling.
- **Firebase**: For authentication and database integration.
- **React Toastify**: For user notifications and error messages.
- **DaisyUI**: For UI components and sliders on the homepage.
- **Swiper**: For creating image carousels/sliders.
- **AOS (Animate On Scroll)**: For homepage animations.
- **Environment Variables**: To securely store Firebase configuration keys.