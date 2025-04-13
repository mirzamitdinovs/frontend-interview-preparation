# 🧠 JavaScript Event Delegation

## 📘 What is Event Delegation?

**Event delegation** is a technique in JavaScript where a **single event listener** is added to a **parent element** to handle events on its **child elements**.

Instead of adding individual listeners to each child, you let the event **bubble up** and handle it at the parent level.

---

## 🚀 Why Use Event Delegation?

- ✅ Improves **performance** (fewer listeners)
- ✅ Handles **dynamic content** (new children added later)
- ✅ Easier to **maintain**

---

## 📍 How It Works

1. Add a single event listener to a **parent** element.
2. When a child is clicked, the event **bubbles** up to the parent.
3. Use `event.target` to find out which child triggered the event.
4. Optionally filter using `nodeName` or `matches()`.

---

## 🧪 Example 1: `UL` with `LI` children

```html
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
</ul>
