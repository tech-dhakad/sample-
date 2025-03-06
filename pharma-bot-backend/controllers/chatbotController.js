const axios = require("axios");

exports.getBotResponse = async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post("https://api.gaminai.com/chat", {
            prompt: message,
            api_key: process.env.GAMINAI_API_KEY
        });

        res.json({ botResponse: response.data.reply });
    } catch (error) {
        console.error("Error calling GaminAI API:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
};
