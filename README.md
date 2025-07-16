# 🔢 Priority Numeric Rating

A flexible, colorful, and customizable **React numeric rating component**. Ideal for rating **task priority**, **level difficulty**, or anything that needs a numbered scale from **1 to 100** — with vibrant color transitions from 🔴 Red (High Priority) to 🟢 Green (Low Priority).

![Component Preview](./public/sc1.png)

---

## 🚀 Features

- 🔢 Numeric rating from 1 to 100+
- 🎨 Automatic red → green color gradient
- 🌈 Custom background colors per level
- 🎯 Optional text color override
- 📱 Mobile-friendly with optional scrolling
- 🧩 Customizable styling for buttons and container
- 🛑 Read-only mode for view-only usage

---

## 📦 Installation

```bash
npm install @rk/react-rating
```

🧪 Basic Usage

```jsx static
import React, { useState } from "react";
import PriorityRating from "@rk/react-rating";

export default function App() {
  const [priority, setPriority] = useState(5);

  return (
    <PriorityRating
      max={10}
      value={priority}
      name="priority"
      onChange={(val) => setPriority(val)}
    />
  );
}

```

🎛️ Props

| Prop           | Type       | Default    | Description                                |
| -------------- | ---------- | ---------- | ------------------------------------------ |
| `max`          | `number`   | `10`       | Total rating steps (up to 200)             |
| `value`        | `number`   | `0`        | Selected rating value                      |
| `name`         | `string`   | `"rating"` | Field name identifier                      |
| `onChange`     | `function` | `-`        | Callback `(value, name)` on change         |
| `readonly`     | `boolean`  | `false`    | Disables button clicks                     |
| `colors`       | `array`    | `[]`       | Override background colors                 |
| `textColor`    | `string`   | `"#fff"`   | Text color for selected buttons            |
| `buttonStyle`  | `object`   | `{}`       | Custom CSS for each button                 |
| `wrapperStyle` | `object`   | `{}`       | Custom CSS for wrapper container           |
| `scrollable`   | `boolean`  | `true`     | Enables horizontal scroll for large scales |


🎨 Examples

1. 🔧 Custom Styles + Colors

```jsx static

<PriorityRating
  max={15}
  value={priority}
  name="taskPriority"
  onChange={(val) => setPriority(val)}
  colors={["#ff0000", "#ff6600", "#ffcc00", "#ccff33", "#66ff66"]}
  textColor="#000"
  buttonStyle={{ borderRadius: "8px", fontSize: "14px" }}
  wrapperStyle={{ justifyContent: "flex-start" }}
/>

```
2. 📱 Scrollable UI (50+ Buttons)

```jsx static

<PriorityRating max={75} value={32} scrollable={true} />

```
3. 👀 Read-only Mode

```jsx static

<PriorityRating value={8} readonly={true} />

```

👨‍💻 Author
Rajkumar — Software Engineer- Full Stack Developer

[🔗 GitHub ](https://github.com/Rajkumar5068689)

[🌐 Portfolio](https://raj-developer.netlify.app/)
