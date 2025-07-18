---
title: "Test Code Blocks - Language Labels"
date: "2024-12-20"
excerpt: "Testing code block language labels to ensure they display correctly"
tags: ["Test", "Code", "Programming"]
coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
featured: false
---

# Test Code Blocks - Language Labels

This is a test post to verify that programming language labels are displaying correctly on code blocks.

## JavaScript Example

```javascript
// Example JavaScript code
const greeting = "Hello, World!";
console.log(greeting);

function add(a, b) {
  return a + b;
}
```

## TypeScript Example

```typescript
// Example TypeScript code
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John Doe",
  age: 30
};
```

## Python Example

```python
# Example Python code
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## HTML Example

```html
<!-- Example HTML code -->
<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

## CSS Example

```css
/* Example CSS code */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

## SQL Example

```sql
-- Example SQL code
SELECT 
  users.name,
  users.email,
  COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id;
```

## JSON Example

```json
{
  "name": "Test Project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "next": "^14.0.0"
  }
}
```

## Bash Example

```bash
#!/bin/bash
# Example bash script
echo "Hello from bash!"
for i in {1..5}; do
  echo "Count: $i"
done
```

## PHP Example

```php
<?php
// Example PHP code
$name = "World";
echo "Hello, " . $name . "!";

function greet($name) {
    return "Hello, " . $name . "!";
}
?>
```

## Go Example

```go
// Example Go code
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    
    numbers := []int{1, 2, 3, 4, 5}
    for _, num := range numbers {
        fmt.Println(num)
    }
}
```

## Rust Example

```rust
// Example Rust code
fn main() {
    println!("Hello, World!");
    
    let numbers = vec![1, 2, 3, 4, 5];
    for num in numbers {
        println!("{}", num);
    }
}
```

All code blocks above should display their respective programming language labels in the top-right corner. 