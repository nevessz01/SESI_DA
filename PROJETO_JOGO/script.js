* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #e8f0fe;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
}

.container {
    background-color: white;

    width: 90%;
    max-width: 500px;

    padding: 30px;

    border-radius: 15px;

    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    text-align: center;
}

h1 {
    color: #2563eb;
    margin-bottom: 15px;
}

p {
    margin: 10px 0;
}

.jogo {
    margin-top: 25px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 12px;

    border: 2px solid #ccc;
    border-radius: 8px;

    font-size: 18px;

    text-align: center;
}

button {
    margin-top: 15px;

    padding: 12px 20px;

    border: none;
    border-radius: 8px;

    background-color: #2563eb;
    color: white;

    font-size: 16px;

    cursor: pointer;
}

button:hover {
    background-color: #1d4ed8;
}

#mensagem {
    font-weight: bold;
    min-height: 25px;
}

.resultado {
    margin-top: 30px;

    padding-top: 20px;

    border-top: 2px solid #ddd;
}

#melhorResultado {
    font-weight: bold;
    color: #16a34a;
}
