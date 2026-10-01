 # 💛 Teachers’ Day Digital Scrapbook Card


🚀 How to Run the Project
 https://marlondignos19-cyber.github.io/TEACHERS-DAY-CARD/


> **A handmade digital message of appreciation for Sir Randy.**

A creative and interactive **Teachers’ Day digital scrapbook card** designed to express gratitude and appreciation for a teacher. The project combines a warm scrapbook aesthetic with modern web technologies, animations, interactive elements, and responsive design.

---

## ✨ Project Overview

This project is a personalized digital Teachers’ Day card created with **HTML5, CSS3, and Vanilla JavaScript**.

The design is inspired by a handmade scrapbook, featuring:

* 📜 Layered paper and scrapbook textures
* 📌 Interactive push pins
* 📎 Animated paper clips
* 🖼️ Polaroid-style teacher photo
* 💌 Interactive message opening
* ✨ Animated decorations
* 🎉 Confetti celebration effect
* 💬 Personalized appreciation message
* 📱 Responsive layout for different screen sizes
* ♿ Reduced-motion support for accessibility

The main purpose of the project is to create a digital card that feels **personal, warm, creative, and interactive** rather than like a traditional static webpage.

---

## 🎯 Objectives

The project was created to:

1. Express sincere appreciation to a teacher.
2. Apply basic **HTML, CSS, and JavaScript** skills.
3. Create an interactive and visually appealing webpage.
4. Practice CSS animations and responsive design.
5. Demonstrate how JavaScript can add interaction to a webpage.
6. Combine creativity and programming into one digital project.

---

## 🛠️ Technologies Used

| Technology             | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| **HTML5**              | Structure and content of the digital card                        |
| **CSS3**               | Layout, colors, scrapbook design, animations, and responsiveness |
| **Vanilla JavaScript** | Interactions, buttons, animations, and confetti                  |
| **Google Fonts**       | Typography and visual styling                                    |

### Fonts Used

* **Playfair Display** — elegant headings
* **DM Sans** — clean and readable body text
* **Caveat** — handwritten scrapbook-style text

---

## 📁 Project Structure

```text
Teachers-Day-Scrapbook/
│
├── index.html
├── style.css
├── script.js
├── teacher.jpg
└── README.md
```

### File Description

#### `index.html`

Contains the main structure of the digital scrapbook card, including the cover page, teacher photo, appreciation message, quote, sticky note, and interactive buttons.

#### `style.css`

Controls the complete visual appearance of the project, including the scrapbook paper effect, colors, typography, Polaroid photo, push pins, paper clips, animations, and responsive layouts.

#### `script.js`

Handles the interactive functionality such as opening and closing the message, replaying the animation, clicking push pins, bouncing paper clips, displaying image fallbacks, and creating the celebration effect.

#### `teacher.jpg`

The teacher's photo displayed on the cover and inside the Polaroid-style photo section. The HTML expects the image filename to be `teacher.jpg`.

#### `README.md`

This documentation file explaining the project, its features, technologies, structure, and usage.

---

## 🎨 Design Concept

The visual concept is based on a **modern handmade scrapbook**.

### Color Palette

The design uses warm and soft colors such as:

* 🤍 Cream
* 🤎 Brown
* 🧸 Beige
* 🩵 Muted Blue
* 🧡 Warm Orange
* 💛 Soft Yellow

These colors create a warm and appreciative atmosphere while keeping the project professional.

The CSS defines these colors as reusable variables, making the design easier to maintain and customize.

---

## ⭐ Main Features

### 💌 Interactive Message

Clicking **"Open Message"** hides the cover and reveals the personalized Teachers’ Day message.

### 📌 Interactive Push Pins

The scrapbook push pins respond when clicked with a small pop animation.

### 📎 Animated Paper Clips

Paper clips gently bounce when interacted with, giving the scrapbook a more realistic handmade feel.

### 🎉 Celebration Effect

Opening the message triggers a small celebration using animated symbols such as:

```text
✦ ✧ ♥ ♡ • ✿
```

The JavaScript dynamically creates the celebration pieces and removes them after the animation finishes.

### 🖼️ Image Fallback

If `teacher.jpg` cannot be loaded, the project automatically displays a friendly photo placeholder instead of leaving a broken image.

### 🔄 Replay Animation

The **Replay** button returns to the cover and automatically starts the scrapbook sequence again.

### ↩️ Close Message

The **Close Note** button returns the user to the scrapbook cover.

### ⌨️ Keyboard Support

Pressing the **Escape** key closes the message when it is open.

### 📱 Responsive Design

The layout automatically adjusts for smaller screens. The message content changes from a multi-column layout to a single-column layout on smaller devices.

### ♿ Reduced Motion

The project respects users who prefer reduced motion by reducing animation and transition durations when the browser's `prefers-reduced-motion` setting is enabled.

---

## 🚀 How to Run the Project

### Method 1 — Open Directly

1. Download or copy the entire project folder.
2. Make sure all files are inside the same folder.
3. Double-click:

```text
index.html
```

4. The digital Teachers’ Day card will open in your browser.

---

### Method 2 — Using VS Code

If you are using **Visual Studio Code**:

1. Open the project folder in VS Code.
2. Make sure the following files are present:

```text
index.html
style.css
script.js
teacher.jpg
```

3. Open `index.html`.
4. Use **Live Server** if installed.
5. View the project in your browser.

---

## 🖼️ Adding or Changing the Teacher Photo

The project uses:

```text
teacher.jpg
```

To change the teacher's photo:

1. Prepare the desired image.
2. Rename it to:

```text
teacher.jpg
```

3. Place it in the same folder as `index.html`.
4. Refresh the webpage.

The image is used both on the cover and inside the main message section.

---

## 🎮 User Interaction

| Action                 | Result                          |
| ---------------------- | ------------------------------- |
| Click **Open Message** | Opens the Teachers’ Day message |
| Click a **Push Pin**   | Plays a pin animation           |
| Click a **Paper Clip** | Plays a bouncing animation      |
| Click **Replay**       | Restarts the scrapbook sequence |
| Click **Close Note**   | Returns to the cover            |
| Press **Escape**       | Closes the message              |
| Open the message       | Triggers celebration effects    |

---

## 💬 Personalized Message

The card contains a personalized Teachers’ Day message expressing appreciation for Sir Randy's kindness, approachability, patience, and supportive classroom environment. The message is included directly in the HTML project.

---

## 📐 Responsive Design

The webpage is designed to work across different screen sizes.

### Desktop

The scrapbook uses a spacious multi-column composition containing:

* Teacher photo
* Main appreciation letter
* Quote note
* Sticky note

### Tablet

The layout adjusts spacing and reorganizes the content for a narrower screen.

### Mobile

The project switches to a single-column layout and reduces typography, spacing, and image dimensions to improve usability on smaller screens.

---

## 🔧 Customization

You can easily customize the project by editing:

### Message

Open:

```text
index.html
```

Find the section containing:

```html
<div class="main-message">
```

and replace the message with your own appreciation message.

### Colors

Open:

```text
style.css
```

The main colors are defined inside:

```css
:root
```

This makes it easy to create a different color theme without changing the entire stylesheet.

### Animations

The project uses CSS `@keyframes` for effects such as:

* Title entrance
* Section entrance
* Polaroid animation
* Message animation
* Note animation
* Floating decorations
* Push-pin pop
* Paper-clip bounce
* Final thank-you popup
* Confetti burst

---

## 📚 What I Learned

Through this project, I practiced:

* Creating a webpage using HTML5
* Styling webpages with CSS3
* Using CSS variables
* Creating responsive layouts
* Working with CSS Grid and Flexbox
* Creating CSS animations
* Using JavaScript event listeners
* Manipulating HTML elements with JavaScript
* Creating dynamic elements
* Handling image errors
* Adding keyboard interaction
* Combining programming with creative design

---

## 👨‍💻 Project Information

**Project:** Teachers’ Day Digital Scrapbook Card
**Theme:** Handmade Digital Scrapbook
**Technologies:** HTML5, CSS3, Vanilla JavaScript
**Purpose:** Teachers’ Day Appreciation
**Recipient:** Sir Randy
**Creator:** Marlon

---

## ❤️ Acknowledgment

This project was created as a simple digital expression of gratitude.

> **"A good teacher leaves a lasting mark, not just on a notebook, but in a student's heart."**

Thank you to every teacher who continues to guide, encourage, and inspire students to learn and grow.

---

## 📜 License

This project was created for **educational and personal school-project purposes**.

You may modify the HTML, CSS, and JavaScript for learning and customization.

---

### 🌟 Made with HTML, CSS, JavaScript, creativity, and appreciation.

**Happy Teachers’ Day! 💛**
