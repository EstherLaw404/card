<?php
header('Content-Type: application/json');

// Get number of people from query parameter
$numPeople = isset($_GET['people']) ? intval($_GET['people']) : 0;

if ($numPeople <= 0) {
    http_response_code(400);
    echo json_encode(["error" => "Input value does not exist or value is invalid"]);
    exit;
}

// Create deck
$suits = ["S","H","D","C"];
$values = ["A","2","3","4","5","6","7","8","9","X","J","Q","K"];
$deck = [];
foreach ($suits as $suit) {
    foreach ($values as $value) {
        $deck[] = "$suit-$value";
    }
}
shuffle($deck);

// Distribute cards
$distributed = [];
for ($i = 0; $i < $numPeople; $i++) $distributed[$i] = [];
foreach ($deck as $index => $card) {
    $distributed[$index % $numPeople][] = $card;
}

echo json_encode($distributed);
