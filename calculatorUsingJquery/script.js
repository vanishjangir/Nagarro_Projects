<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Using Jquery</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <div class="calculator">
            <input type="text" id="valueData">
            <div id="error">Error in Syntax</div>
            <div class="first">
                <button class="butons" id="ac">AC</button>
                <button class="butons" id="del">DEL</button>
                <button class="butons da" value="/">/</button>
                <button class="butons" id="power">^2</button>
            </div>
            <div class="first">
                <button class="butons da" value="7">7</button>
                <button class="butons da" value="8">8</button>
                <button class="butons da" value="9">9</button>
                <button class="butons da" value="%">%</button>
            </div>
            <div class="first">
                <button class="butons da" value="4">4</button>
                <button class="butons da" value="5">5</button>
                <button class="butons da" value="6">6</button>
                <button class="butons da" value="*">*</button>
            </div>
            <div class="first">
                <button class="butons da" value="3">3</button>
                <button class="butons da" value="2">2</button>
                <button class="butons da" value="1">1</button>
                <button class="butons da" value="-">-</button>
            </div>
            <div class="first">
                <button class="butons da" value="0">0</button>
                <button class="butons da" value=".">.</button>
                <button class="butons" id="result">=</button>
                <button class="butons da" value="+">+</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
