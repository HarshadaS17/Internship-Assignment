<?php
// Database connection (replace with your credentials)
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, content, author, date FROM articles";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<h1>" . $row["title"] . "</h1>";
        echo "<p>By " . $row["author"] . "</p>";
        echo "<p>" . $row["date"] . "</p>";
        echo "<p>" . $row["content"] . "</p>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>