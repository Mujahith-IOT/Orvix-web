<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orvix AI</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #0b0f18;
            color: #e4ecff;
        }

        header {
            background: #111827;
            padding: 20px;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 2px;
        }

        section {
            padding: 40px;
            max-width: 900px;
            margin: auto;
        }

        h2 {
            color: #6aa9ff;
        }

        .card {
            background: #141b2d;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
        }

        .launch-btn {
            display: block;
            margin: 30px auto;
            padding: 15px 30px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 18px;
            cursor: pointer;
        }

        .launch-btn:hover {
            background: #1d4ed8;
        }

        footer {
            text-align: center;
            padding: 20px;
            background: #111827;
            font-size: 14px;
        }
    </style>
</head>

<body>

<header>
    ORVIX AI SYSTEM
</header>

<section>

    <div class="card">
        <h2>Project Overview</h2>
        <p>
            Orvix is a modular artificial intelligence platform designed to act as a universal control hub
            across hardware and software systems. This web interface serves as the initial software layer
            for interaction, monitoring, and development of the Orvix ecosystem.
        </p>
    </div>

    <div class="card">
        <h2>Current Capabilities</h2>
        <ul>
            <li>Web-based interaction interface</li>
            <li>Expandable voice assistant integration</li>
            <li>Command processing framework</li>
            <li>Future hardware bridge support</li>
        </ul>
    </div>

    <div class="card">
        <h2>Future Expansion</h2>
        <ul>
            <li>ESP32 communication control</li>
            <li>Satellite link management</li>
            <li>Distributed AI cognition modules</li>
            <li>Unified device orchestration</li>
        </ul>
    </div>

    <button class="launch-btn" onclick="launchOrvix()">
        Launch Interface
    </button>

</section>

<footer>
    Orvix AI — Experimental Development Platform
</footer>

<script>
function launchOrvix(){
    alert("Interface module coming next stage.");
}
</script>

</body>
</html>
