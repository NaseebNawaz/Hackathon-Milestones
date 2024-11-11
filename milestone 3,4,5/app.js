function shareResume() {
    // Get the current resume content
    const resumeContent = document.getElementById("resumeContent").outerHTML;

    // Construct a simple HTML page structure for sharing
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shared Resume</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                .resume-content { max-width: 800px; margin: auto; }
                img { max-width: 100px; border-radius: 50%; }
            </style>
        </head>
        <body>
            <div class="resume-content">
                ${resumeContent}
            </div>
        </body>
        </html>
    `;

    // Create a Blob from the HTML string
    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // Display the link in an alert or console for testing
    alert(`Shareable Link: ${url}`);
    console.log(`Shareable Link: ${url}`);
}
