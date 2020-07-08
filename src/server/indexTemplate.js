export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Skillbx-react</title>
    <script src="/static/client.js" type="application/javascript"> </script>
</head>
<body>
    <div id="reactRoot">${content}</div>
</body>
</html>
`;